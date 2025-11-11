import { prisma } from './prisma'

export interface TimeSlot {
  start: string // ISO 8601 time string (e.g., "09:00")
  end: string
  startUtc: Date
  endUtc: Date
  formatted: string // User-friendly format (e.g., "9:00 AM - 10:00 AM")
}

/**
 * Get available time slots for a given date and service
 * @param date - Date string in YYYY-MM-DD format
 * @param serviceId - Service ID to calculate duration
 * @returns Array of available time slots
 */
export async function getAvailableSlots(
  date: string,
  serviceId: string
): Promise<TimeSlot[]> {
  // Get service to know duration
  const service = await prisma.service.findUnique({
    where: { id: serviceId },
  })

  if (!service) {
    throw new Error('Service not found')
  }

  // Business hours: 8 AM - 6 PM
  const businessStart = 8 // 8 AM
  const businessEnd = 18 // 6 PM
  const slotInterval = 15 // 15-minute intervals
  const travelBuffer = 30 // 30-minute buffer between bookings

  const totalDuration = service.durationMin + travelBuffer

  // Parse the date and create UTC timestamps for the day
  const [year, month, day] = date.split('-').map(Number)
  const dayStart = new Date(Date.UTC(year, month - 1, day, businessStart, 0, 0))
  const dayEnd = new Date(Date.UTC(year, month - 1, day, businessEnd, 0, 0))

  // Generate all possible slots
  const allSlots: TimeSlot[] = []
  let currentTime = new Date(dayStart)

  while (currentTime < dayEnd) {
    const slotEnd = new Date(currentTime.getTime() + totalDuration * 60000)

    // Don't include slots that would end after business hours
    if (slotEnd <= dayEnd) {
      allSlots.push({
        start: formatTime(currentTime),
        end: formatTime(slotEnd),
        startUtc: new Date(currentTime),
        endUtc: new Date(slotEnd),
        formatted: `${formatTime12Hour(currentTime)} - ${formatTime12Hour(slotEnd)}`,
      })
    }

    // Move to next slot (15-minute intervals)
    currentTime = new Date(currentTime.getTime() + slotInterval * 60000)
  }

  // Get existing bookings for this date
  const existingBookings = await prisma.booking.findMany({
    where: {
      status: {
        in: ['pending', 'pending_payment', 'confirmed'],
      },
      startAtUtc: {
        gte: dayStart,
        lt: dayEnd,
      },
    },
  })

  // Get unavailability blocks for this date
  const unavailableBlocks = await prisma.unavailability.findMany({
    where: {
      startAtUtc: {
        lt: dayEnd,
      },
      endAtUtc: {
        gt: dayStart,
      },
    },
  })

  // Filter out conflicting slots
  const availableSlots = allSlots.filter((slot) => {
    // Check against existing bookings
    const hasBookingConflict = existingBookings.some((booking) => {
      return (
        (slot.startUtc >= booking.startAtUtc && slot.startUtc < booking.endAtUtc) ||
        (slot.endUtc > booking.startAtUtc && slot.endUtc <= booking.endAtUtc) ||
        (slot.startUtc <= booking.startAtUtc && slot.endUtc >= booking.endAtUtc)
      )
    })

    // Check against unavailability blocks
    const hasUnavailabilityConflict = unavailableBlocks.some((block) => {
      return (
        (slot.startUtc >= block.startAtUtc && slot.startUtc < block.endAtUtc) ||
        (slot.endUtc > block.startAtUtc && slot.endUtc <= block.endAtUtc) ||
        (slot.startUtc <= block.startAtUtc && slot.endUtc >= block.endAtUtc)
      )
    })

    return !hasBookingConflict && !hasUnavailabilityConflict
  })

  return availableSlots
}

/**
 * Format Date to HH:MM (24-hour)
 */
function formatTime(date: Date): string {
  const hours = date.getUTCHours().toString().padStart(2, '0')
  const minutes = date.getUTCMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}

/**
 * Format Date to 12-hour time (e.g., "9:00 AM")
 */
function formatTime12Hour(date: Date): string {
  let hours = date.getUTCHours()
  const minutes = date.getUTCMinutes().toString().padStart(2, '0')
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12 || 12
  return `${hours}:${minutes} ${ampm}`
}
