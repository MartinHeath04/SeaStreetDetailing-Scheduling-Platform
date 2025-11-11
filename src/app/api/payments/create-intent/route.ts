import { NextRequest, NextResponse } from 'next/server'
import { createPaymentIntent } from '@/lib/stripe'
import { getBookingById } from '@/lib/booking'
import { z } from 'zod'

// Validation schema
const createPaymentIntentSchema = z.object({
  bookingId: z.string().min(1, 'Booking ID is required'),
})

/**
 * POST /api/payments/create-intent - Create a Stripe payment intent
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate request body
    const validationResult = createPaymentIntentSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: validationResult.error.errors.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      )
    }

    const { bookingId } = validationResult.data

    // Get booking details
    const booking = await getBookingById(bookingId)

    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      )
    }

    if (booking.status !== 'pending_payment') {
      return NextResponse.json(
        { error: 'Booking is not pending payment' },
        { status: 400 }
      )
    }

    // Create payment intent
    const paymentIntent = await createPaymentIntent({
      bookingId: booking.id,
      amount: booking.totalPriceCents,
      customerEmail: booking.customerEmail,
      customerName: booking.customerName,
      description: `Sea Street Detailing - ${booking.service.name}`,
    })

    return NextResponse.json(
      {
        success: true,
        clientSecret: paymentIntent.clientSecret,
        paymentIntentId: paymentIntent.paymentIntentId,
        amount: {
          cents: paymentIntent.amount,
          formatted: `$${(paymentIntent.amount / 100).toFixed(2)}`,
        },
        status: paymentIntent.status,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error creating payment intent:', error)

    if (error instanceof Error) {
      if (error.message.includes('not found')) {
        return NextResponse.json({ error: error.message }, { status: 404 })
      }

      if (error.message.includes('not in pending_payment')) {
        return NextResponse.json({ error: error.message }, { status: 400 })
      }
    }

    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    )
  }
}
