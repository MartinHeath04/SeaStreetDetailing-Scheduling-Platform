import { NextRequest, NextResponse } from 'next/server'
import { createBooking, getBookingById } from '@/lib/booking'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

// Validation schema for booking creation (matching test format)
const createBookingSchema = z.object({
  serviceId: z.string().min(1, 'Service ID is required'),
  addOnIds: z.array(z.string()).optional(),
  customer: z.object({
    name: z.string().min(2, 'Customer name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z
      .string()
      .regex(
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        'Invalid phone number format'
      ),
  }),
  appointment: z.object({
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
    startTime: z.string().regex(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/, 'Time must be in HH:MM format'),
  }),
  address: z.string().min(5, 'Address is required'),
  notes: z.string().optional(),
})

/**
 * GET /api/bookings - Get all bookings
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')

    // Build query filter
    const where: any = {}
    if (status && status !== 'all') {
      where.status = status
    }

    // Fetch bookings with related data
    const bookings = await prisma.booking.findMany({
      where,
      include: {
        service: true,
      },
      orderBy: {
        startAtUtc: 'desc',
      },
    })

    // Format response
    const formattedBookings = bookings.map((booking) => ({
      id: booking.id,
      customerName: booking.customerName,
      email: booking.email,
      phone: booking.phone,
      service: {
        name: booking.service.name,
        duration: booking.service.durationMin,
      },
      appointment: {
        startAt: booking.startAtUtc,
        endAt: booking.endAtUtc,
        formatted: new Date(booking.startAtUtc).toLocaleDateString('en-US', {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
        }),
      },
      address: booking.address,
      status: booking.status,
      price: {
        cents: booking.priceCents,
        formatted: `$${(booking.priceCents / 100).toFixed(2)}`,
      },
      createdAt: booking.createdAt,
    }))

    return NextResponse.json({
      bookings: formattedBookings,
      count: formattedBookings.length,
    })
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    )
  }
}

/**
 * POST /api/bookings - Create a new booking
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate request body
    const validationResult = createBookingSchema.safeParse(body)

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

    const requestData = validationResult.data

    // Transform to booking lib format
    const bookingData = {
      serviceId: requestData.serviceId,
      addOnIds: requestData.addOnIds,
      customerName: requestData.customer.name,
      customerEmail: requestData.customer.email,
      customerPhone: requestData.customer.phone,
      date: requestData.appointment.date,
      timeSlot: requestData.appointment.startTime,
      address: requestData.address,
      notes: requestData.notes,
    }

    // Create the booking
    const booking = await createBooking(bookingData)

    // Format response to match test expectations
    const startDate = new Date(booking.startAtUtc)
    const endDate = new Date(booking.endAtUtc)
    const formattedDate = startDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    const formattedTime = `${startDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })} - ${endDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })}`

    return NextResponse.json(
      {
        bookingId: booking.id,
        status: booking.status,
        customer: {
          name: booking.customerName,
          email: booking.customerEmail,
          phone: booking.customerPhone,
        },
        service: {
          name: booking.service.name,
          duration: booking.service.duration,
        },
        addOns: booking.addOns.map((addOn) => ({
          name: addOn.name,
          price: {
            cents: addOn.price,
            formatted: `$${(addOn.price / 100).toFixed(2)}`,
          },
        })),
        appointment: {
          date: requestData.appointment.date,
          startTime: requestData.appointment.startTime,
          formatted: `${formattedDate} at ${formattedTime}`,
        },
        address: booking.address,
        notes: booking.notes,
        pricing: {
          servicePrice: {
            cents: booking.service.price,
            formatted: `$${(booking.service.price / 100).toFixed(2)}`,
          },
          addOnsTotal: {
            cents: booking.addOns.reduce((sum, a) => sum + a.price, 0),
            formatted: `$${(
              booking.addOns.reduce((sum, a) => sum + a.price, 0) / 100
            ).toFixed(2)}`,
          },
          totalPrice: {
            cents: booking.totalPriceCents,
            formatted: `$${(booking.totalPriceCents / 100).toFixed(2)}`,
          },
        },
        createdAt: new Date().toISOString(),
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating booking:', error)

    if (error instanceof Error) {
      // Handle specific error messages
      if (
        error.message.includes('not found') ||
        error.message.includes('inactive')
      ) {
        return NextResponse.json({ error: error.message }, { status: 404 })
      }

      if (
        error.message.includes('Invalid') ||
        error.message.includes('Cannot book') ||
        error.message.includes('no longer available')
      ) {
        return NextResponse.json({ error: error.message }, { status: 400 })
      }
    }

    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    )
  }
}
