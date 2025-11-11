import Stripe from 'stripe'
import { prisma } from './prisma'

// Initialize Stripe with secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-12-18.acacia',
})

export interface CreatePaymentIntentInput {
  bookingId: string
  amount: number // in cents
  customerEmail: string
  customerName: string
  description: string
}

export interface PaymentIntentResponse {
  clientSecret: string
  paymentIntentId: string
  amount: number
  status: string
}

/**
 * Create a Stripe payment intent for a booking
 */
export async function createPaymentIntent(
  input: CreatePaymentIntentInput
): Promise<PaymentIntentResponse> {
  try {
    // Verify booking exists and is in pending_payment status
    const booking = await prisma.booking.findUnique({
      where: { id: input.bookingId },
    })

    if (!booking) {
      throw new Error('Booking not found')
    }

    if (booking.status !== 'pending_payment') {
      throw new Error('Booking is not in pending_payment status')
    }

    // Create payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: input.amount,
      currency: 'usd',
      receipt_email: input.customerEmail,
      description: input.description,
      metadata: {
        bookingId: input.bookingId,
        customerName: input.customerName,
      },
      automatic_payment_methods: {
        enabled: true,
      },
    })

    // Update booking with payment intent ID
    await prisma.booking.update({
      where: { id: input.bookingId },
      data: {
        stripePaymentIntentId: paymentIntent.id,
      },
    })

    // Create payment record
    await prisma.payment.create({
      data: {
        bookingId: input.bookingId,
        amountCents: input.amount,
        status: 'pending',
        providerRef: paymentIntent.id,
      },
    })

    return {
      clientSecret: paymentIntent.client_secret || '',
      paymentIntentId: paymentIntent.id,
      amount: paymentIntent.amount,
      status: paymentIntent.status,
    }
  } catch (error) {
    console.error('Error creating payment intent:', error)
    throw error
  }
}

/**
 * Confirm a payment and update booking status
 */
export async function confirmPayment(paymentIntentId: string): Promise<void> {
  try {
    // Retrieve payment intent from Stripe
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId)

    if (!paymentIntent.metadata.bookingId) {
      throw new Error('Booking ID not found in payment metadata')
    }

    const bookingId = paymentIntent.metadata.bookingId

    // Update booking status to confirmed
    await prisma.booking.update({
      where: { id: bookingId },
      data: {
        status: 'confirmed',
      },
    })

    // Update payment record
    await prisma.payment.updateMany({
      where: {
        bookingId,
        providerRef: paymentIntentId,
      },
      data: {
        status: 'succeeded',
        paidAt: new Date(),
      },
    })
  } catch (error) {
    console.error('Error confirming payment:', error)
    throw error
  }
}

/**
 * Handle payment failure
 */
export async function handlePaymentFailure(
  paymentIntentId: string
): Promise<void> {
  try {
    // Retrieve payment intent from Stripe
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId)

    if (!paymentIntent.metadata.bookingId) {
      throw new Error('Booking ID not found in payment metadata')
    }

    const bookingId = paymentIntent.metadata.bookingId

    // Update booking status to payment_failed
    await prisma.booking.update({
      where: { id: bookingId },
      data: {
        status: 'payment_failed',
      },
    })

    // Update payment record
    await prisma.payment.updateMany({
      where: {
        bookingId,
        providerRef: paymentIntentId,
      },
      data: {
        status: 'failed',
      },
    })
  } catch (error) {
    console.error('Error handling payment failure:', error)
    throw error
  }
}

/**
 * Refund a payment
 */
export async function refundPayment(
  paymentIntentId: string,
  amount?: number
): Promise<void> {
  try {
    const refund = await stripe.refunds.create({
      payment_intent: paymentIntentId,
      amount, // if undefined, refunds full amount
    })

    // Update payment record
    await prisma.payment.updateMany({
      where: {
        providerRef: paymentIntentId,
      },
      data: {
        status: 'refunded',
      },
    })

    console.log('Refund created:', refund.id)
  } catch (error) {
    console.error('Error creating refund:', error)
    throw error
  }
}

/**
 * Get payment status
 */
export async function getPaymentStatus(
  paymentIntentId: string
): Promise<string> {
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId)
    return paymentIntent.status
  } catch (error) {
    console.error('Error retrieving payment status:', error)
    throw error
  }
}

export { stripe }
