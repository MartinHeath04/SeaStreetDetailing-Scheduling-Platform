import { prisma } from './prisma'
import { getAvailableSlots } from './availability'

export interface CreateBookingInput {
  serviceId: string
  addOnIds?: string[]
  customerName: string
  customerEmail: string
  customerPhone: string
  date: string // YYYY-MM-DD
  timeSlot: string // HH:MM format
  address: string
  notes?: string
}

export interface BookingResponse {
  id: string
  status: string
  startAtUtc: Date
  endAtUtc: Date
  totalPriceCents: number
  customerName: string
  customerEmail: string
  customerPhone: string
  address: string
  notes: string | null
  service: {
    id: string
    name: string
    duration: number
    price: number
  }
  addOns: Array<{
    id: string
    name: string
    price: number
  }>
}

/**
 * Validate booking input and check availability
 */
async function validateBooking(input: CreateBookingInput): Promise<void> {
  // Validate service exists
  const service = await prisma.service.findUnique({
    where: { id: input.serviceId },
  })

  if (!service || !service.active) {
    throw new Error('Service not found or inactive')
  }

  // Validate add-ons exist
  if (input.addOnIds && input.addOnIds.length > 0) {
    const addOns = await prisma.addOn.findMany({
      where: {
        id: { in: input.addOnIds },
        active: true,
      },
    })

    if (addOns.length !== input.addOnIds.length) {
      throw new Error('One or more add-ons not found or inactive')
    }
  }

  // Validate date format
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/
  if (!dateRegex.test(input.date)) {
    throw new Error('Invalid date format. Use YYYY-MM-DD')
  }

  // Validate date is not in the past
  const requestedDate = new Date(input.date)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  if (requestedDate < today) {
    throw new Error('Cannot book appointments in the past')
  }

  // Validate time slot format
  const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/
  if (!timeRegex.test(input.timeSlot)) {
    throw new Error('Invalid time slot format. Use HH:MM (24-hour)')
  }

  // Check if the time slot is available
  const availableSlots = await getAvailableSlots(input.date, input.serviceId)
  const isSlotAvailable = availableSlots.some(
    (slot) => slot.start === input.timeSlot
  )

  if (!isSlotAvailable) {
    throw new Error('Selected time slot is no longer available')
  }
}

/**
 * Calculate total price including add-ons
 */
async function calculateTotalPrice(
  serviceId: string,
  addOnIds?: string[]
): Promise<number> {
  const service = await prisma.service.findUnique({
    where: { id: serviceId },
  })

  if (!service) {
    throw new Error('Service not found')
  }

  let totalCents = service.basePriceCents

  if (addOnIds && addOnIds.length > 0) {
    const addOns = await prisma.addOn.findMany({
      where: {
        id: { in: addOnIds },
      },
    })

    totalCents += addOns.reduce((sum, addOn) => sum + addOn.priceCents, 0)
  }

  return totalCents
}

/**
 * Calculate total duration including add-ons
 */
async function calculateTotalDuration(
  serviceId: string,
  addOnIds?: string[]
): Promise<number> {
  const service = await prisma.service.findUnique({
    where: { id: serviceId },
  })

  if (!service) {
    throw new Error('Service not found')
  }

  let totalMinutes = service.durationMin

  if (addOnIds && addOnIds.length > 0) {
    const addOns = await prisma.addOn.findMany({
      where: {
        id: { in: addOnIds },
      },
    })

    totalMinutes += addOns.reduce((sum, addOn) => sum + addOn.durationMin, 0)
  }

  // Add 30-minute travel buffer
  totalMinutes += 30

  return totalMinutes
}

/**
 * Create a new booking
 */
export async function createBooking(
  input: CreateBookingInput
): Promise<BookingResponse> {
  // Validate the booking
  await validateBooking(input)

  // Calculate price and duration
  const totalPriceCents = await calculateTotalPrice(
    input.serviceId,
    input.addOnIds
  )
  const totalDuration = await calculateTotalDuration(
    input.serviceId,
    input.addOnIds
  )

  // Parse date and time to create UTC timestamps
  const [year, month, day] = input.date.split('-').map(Number)
  const [hours, minutes] = input.timeSlot.split(':').map(Number)

  const startAtUtc = new Date(Date.UTC(year, month - 1, day, hours, minutes, 0))
  const endAtUtc = new Date(startAtUtc.getTime() + totalDuration * 60000)

  // Create the booking
  const booking = await prisma.booking.create({
    data: {
      serviceId: input.serviceId,
      customerName: input.customerName,
      email: input.customerEmail,
      phone: input.customerPhone,
      addOnIds: JSON.stringify(input.addOnIds || []),
      startAtUtc,
      endAtUtc,
      address: input.address,
      status: 'pending_payment',
      priceCents: totalPriceCents,
      notes: input.notes || null,
    },
  })

  // Fetch service details
  const service = await prisma.service.findUnique({
    where: { id: booking.serviceId },
  })

  if (!service) {
    throw new Error('Service not found')
  }

  // Fetch add-on details
  const addOnIdsList = JSON.parse(booking.addOnIds) as string[]
  let addOns: Array<{ id: string; name: string; price: number }> = []

  if (addOnIdsList.length > 0) {
    const addOnRecords = await prisma.addOn.findMany({
      where: {
        id: { in: addOnIdsList },
      },
    })
    addOns = addOnRecords.map((addon) => ({
      id: addon.id,
      name: addon.name,
      price: addon.priceCents,
    }))
  }

  return {
    id: booking.id,
    status: booking.status,
    startAtUtc: booking.startAtUtc,
    endAtUtc: booking.endAtUtc,
    totalPriceCents: booking.priceCents,
    customerName: booking.customerName,
    customerEmail: booking.email,
    customerPhone: booking.phone,
    address: booking.address,
    notes: booking.notes,
    service: {
      id: service.id,
      name: service.name,
      duration: service.durationMin,
      price: service.basePriceCents,
    },
    addOns,
  }
}

/**
 * Get booking by ID
 */
export async function getBookingById(id: string): Promise<BookingResponse | null> {
  const booking = await prisma.booking.findUnique({
    where: { id },
  })

  if (!booking) {
    return null
  }

  // Fetch service details
  const service = await prisma.service.findUnique({
    where: { id: booking.serviceId },
  })

  if (!service) {
    throw new Error('Service not found')
  }

  // Fetch add-on details
  const addOnIdsList = JSON.parse(booking.addOnIds) as string[]
  let addOns: Array<{ id: string; name: string; price: number }> = []

  if (addOnIdsList.length > 0) {
    const addOnRecords = await prisma.addOn.findMany({
      where: {
        id: { in: addOnIdsList },
      },
    })
    addOns = addOnRecords.map((addon) => ({
      id: addon.id,
      name: addon.name,
      price: addon.priceCents,
    }))
  }

  return {
    id: booking.id,
    status: booking.status,
    startAtUtc: booking.startAtUtc,
    endAtUtc: booking.endAtUtc,
    totalPriceCents: booking.priceCents,
    customerName: booking.customerName,
    customerEmail: booking.email,
    customerPhone: booking.phone,
    address: booking.address,
    notes: booking.notes,
    service: {
      id: service.id,
      name: service.name,
      duration: service.durationMin,
      price: service.basePriceCents,
    },
    addOns,
  }
}

/**
 * Cancel a booking
 */
export async function cancelBooking(id: string): Promise<void> {
  const booking = await prisma.booking.findUnique({
    where: { id },
  })

  if (!booking) {
    throw new Error('Booking not found')
  }

  if (booking.status === 'cancelled') {
    throw new Error('Booking is already cancelled')
  }

  await prisma.booking.update({
    where: { id },
    data: { status: 'cancelled' },
  })
}
