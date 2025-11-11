import { google } from 'googleapis'
import { prisma } from './prisma'

// Initialize Google Calendar API
const calendar = google.calendar('v3')

/**
 * Get authenticated Google Calendar client
 */
function getAuthClient() {
  const credentials = process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS

  if (!credentials) {
    throw new Error('GOOGLE_SERVICE_ACCOUNT_CREDENTIALS not configured')
  }

  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(credentials),
    scopes: ['https://www.googleapis.com/auth/calendar'],
  })

  return auth
}

export interface CreateCalendarEventInput {
  bookingId: string
  summary: string
  description: string
  startTime: Date
  endTime: Date
  location: string
  attendeeEmail?: string
}

export interface CalendarEventResponse {
  eventId: string
  eventLink: string
  status: string
}

/**
 * Create a Google Calendar event for a booking
 */
export async function createCalendarEvent(
  input: CreateCalendarEventInput
): Promise<CalendarEventResponse> {
  try {
    const auth = getAuthClient()
    const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary'

    // Create event
    const event = {
      summary: input.summary,
      description: input.description,
      location: input.location,
      start: {
        dateTime: input.startTime.toISOString(),
        timeZone: 'America/New_York', // Adjust based on business location
      },
      end: {
        dateTime: input.endTime.toISOString(),
        timeZone: 'America/New_York',
      },
      attendees: input.attendeeEmail
        ? [{ email: input.attendeeEmail }]
        : undefined,
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 24 hours
          { method: 'popup', minutes: 120 }, // 2 hours
        ],
      },
    }

    const response = await calendar.events.insert({
      auth: await auth.getClient(),
      calendarId,
      requestBody: event,
      sendUpdates: 'all', // Send email notifications to attendees
    })

    if (!response.data.id) {
      throw new Error('Failed to create calendar event - no event ID returned')
    }

    // Update booking with calendar event ID
    await prisma.booking.update({
      where: { id: input.bookingId },
      data: {
        gcalEventId: response.data.id,
      },
    })

    return {
      eventId: response.data.id,
      eventLink: response.data.htmlLink || '',
      status: response.data.status || '',
    }
  } catch (error) {
    console.error('Error creating calendar event:', error)
    throw error
  }
}

/**
 * Update a Google Calendar event
 */
export async function updateCalendarEvent(
  eventId: string,
  updates: Partial<CreateCalendarEventInput>
): Promise<void> {
  try {
    const auth = getAuthClient()
    const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary'

    const event: any = {}

    if (updates.summary) event.summary = updates.summary
    if (updates.description) event.description = updates.description
    if (updates.location) event.location = updates.location

    if (updates.startTime && updates.endTime) {
      event.start = {
        dateTime: updates.startTime.toISOString(),
        timeZone: 'America/New_York',
      }
      event.end = {
        dateTime: updates.endTime.toISOString(),
        timeZone: 'America/New_York',
      }
    }

    await calendar.events.patch({
      auth: await auth.getClient(),
      calendarId,
      eventId,
      requestBody: event,
      sendUpdates: 'all',
    })
  } catch (error) {
    console.error('Error updating calendar event:', error)
    throw error
  }
}

/**
 * Cancel/Delete a Google Calendar event
 */
export async function cancelCalendarEvent(eventId: string): Promise<void> {
  try {
    const auth = getAuthClient()
    const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary'

    await calendar.events.delete({
      auth: await auth.getClient(),
      calendarId,
      eventId,
      sendUpdates: 'all', // Notify attendees
    })
  } catch (error) {
    console.error('Error canceling calendar event:', error)
    throw error
  }
}

/**
 * Get calendar event details
 */
export async function getCalendarEvent(eventId: string): Promise<any> {
  try {
    const auth = getAuthClient()
    const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary'

    const response = await calendar.events.get({
      auth: await auth.getClient(),
      calendarId,
      eventId,
    })

    return response.data
  } catch (error) {
    console.error('Error retrieving calendar event:', error)
    throw error
  }
}

/**
 * Format booking details for calendar event
 */
export function formatBookingForCalendar(booking: {
  id: string
  customerName: string
  customerEmail: string
  customerPhone: string
  address: string
  service: { name: string }
  addOns: Array<{ name: string }>
  notes: string | null
  startAtUtc: Date
  endAtUtc: Date
}): CreateCalendarEventInput {
  const addOnsText =
    booking.addOns.length > 0
      ? `\nAdd-ons: ${booking.addOns.map((a) => a.name).join(', ')}`
      : ''

  const notesText = booking.notes ? `\nNotes: ${booking.notes}` : ''

  return {
    bookingId: booking.id,
    summary: `${booking.service.name} - ${booking.customerName}`,
    description: `Sea Street Detailing Appointment

Customer: ${booking.customerName}
Phone: ${booking.customerPhone}
Email: ${booking.customerEmail}
Service: ${booking.service.name}${addOnsText}${notesText}

Address: ${booking.address}`,
    startTime: booking.startAtUtc,
    endTime: booking.endAtUtc,
    location: booking.address,
    attendeeEmail: booking.customerEmail,
  }
}
