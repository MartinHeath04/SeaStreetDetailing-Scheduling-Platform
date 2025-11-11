import twilio from 'twilio'
import { prisma } from './prisma'

// Initialize Twilio client
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER

const client = twilio(accountSid, authToken)

export interface SendSMSInput {
  to: string
  message: string
  bookingId?: string
}

export interface SMSResponse {
  sid: string
  status: string
  to: string
}

/**
 * Send an SMS message
 */
export async function sendSMS(input: SendSMSInput): Promise<SMSResponse> {
  try {
    if (!twilioPhoneNumber) {
      throw new Error('TWILIO_PHONE_NUMBER not configured')
    }

    // Send SMS via Twilio
    const message = await client.messages.create({
      body: input.message,
      from: twilioPhoneNumber,
      to: input.to,
    })

    // Log SMS in database
    await prisma.smsLog.create({
      data: {
        bookingId: input.bookingId || null,
        direction: 'outbound',
        toNumber: input.to,
        body: input.message,
        status: message.status,
      },
    })

    return {
      sid: message.sid,
      status: message.status,
      to: message.to,
    }
  } catch (error) {
    console.error('Error sending SMS:', error)
    throw error
  }
}

/**
 * Send booking confirmation SMS
 */
export async function sendBookingConfirmationSMS(
  bookingId: string,
  customerPhone: string,
  customerName: string,
  serviceName: string,
  appointmentDate: string,
  appointmentTime: string
): Promise<SMSResponse> {
  const message = `Hi ${customerName}! Your Sea Street Detailing appointment is confirmed.

Service: ${serviceName}
Date: ${appointmentDate}
Time: ${appointmentTime}

We'll send a reminder 24 hours before. Reply STOP to opt out.`

  return sendSMS({
    to: customerPhone,
    message,
    bookingId,
  })
}

/**
 * Send 24-hour reminder SMS
 */
export async function send24HourReminderSMS(
  bookingId: string,
  customerPhone: string,
  customerName: string,
  serviceName: string,
  appointmentTime: string
): Promise<SMSResponse> {
  const message = `Hi ${customerName}! Reminder: Your ${serviceName} appointment is tomorrow at ${appointmentTime}.

We'll see you at your location. Reply STOP to opt out.`

  return sendSMS({
    to: customerPhone,
    message,
    bookingId,
  })
}

/**
 * Send 2-hour reminder SMS
 */
export async function send2HourReminderSMS(
  bookingId: string,
  customerPhone: string,
  customerName: string,
  serviceName: string,
  appointmentTime: string
): Promise<SMSResponse> {
  const message = `Hi ${customerName}! We'll be at your location in about 2 hours for your ${serviceName} appointment at ${appointmentTime}.

See you soon!`

  return sendSMS({
    to: customerPhone,
    message,
    bookingId,
  })
}

/**
 * Send payment failure SMS
 */
export async function sendPaymentFailureSMS(
  bookingId: string,
  customerPhone: string,
  customerName: string
): Promise<SMSResponse> {
  const message = `Hi ${customerName}, we had trouble processing your payment for your Sea Street Detailing appointment.

Please visit our website to update your payment information to confirm your booking.`

  return sendSMS({
    to: customerPhone,
    message,
    bookingId,
  })
}

/**
 * Send cancellation confirmation SMS
 */
export async function sendCancellationSMS(
  bookingId: string,
  customerPhone: string,
  customerName: string,
  serviceName: string
): Promise<SMSResponse> {
  const message = `Hi ${customerName}, your ${serviceName} appointment has been cancelled.

If you'd like to reschedule, visit our website or call us at (555) 626-9810.`

  return sendSMS({
    to: customerPhone,
    message,
    bookingId,
  })
}

/**
 * Format phone number to E.164 format (+1XXXXXXXXXX)
 */
export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '')

  // If it's 10 digits, add +1 country code
  if (digits.length === 10) {
    return `+1${digits}`
  }

  // If it's 11 digits and starts with 1, add +
  if (digits.length === 11 && digits.startsWith('1')) {
    return `+${digits}`
  }

  // If it already has + prefix, return as is
  if (phone.startsWith('+')) {
    return phone
  }

  // Otherwise, assume it needs +1
  return `+1${digits}`
}
