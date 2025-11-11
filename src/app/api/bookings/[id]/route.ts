import { NextRequest, NextResponse } from 'next/server'
import { getBookingById } from '@/lib/booking'

/**
 * GET /api/bookings/[id] - Get booking by ID
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const bookingId = params.id

    if (!bookingId) {
      return NextResponse.json(
        { error: 'Booking ID is required' },
        { status: 400 }
      )
    }

    const booking = await getBookingById(bookingId)

    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      )
    }

    // Format response
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

    return NextResponse.json({
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
        startAt: booking.startAtUtc.toISOString(),
        endAt: booking.endAtUtc.toISOString(),
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
      createdAt: new Date(booking.startAtUtc).toISOString(), // Using startAt as proxy for createdAt
    })
  } catch (error) {
    console.error('Error fetching booking:', error)

    return NextResponse.json(
      { error: 'Failed to fetch booking' },
      { status: 500 }
    )
  }
}
