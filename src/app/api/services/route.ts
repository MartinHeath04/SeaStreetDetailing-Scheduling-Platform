import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // Fetch all active services
    const services = await prisma.service.findMany({
      where: { active: true },
      orderBy: { basePriceCents: 'asc' },
    })

    // Fetch all active add-ons
    const addOns = await prisma.addOn.findMany({
      where: { active: true },
      orderBy: { priceCents: 'asc' },
    })

    // Format response
    const formattedServices = services.map((service) => ({
      id: service.id,
      name: service.name,
      duration: service.durationMin,
      price: {
        cents: service.basePriceCents,
        formatted: `$${(service.basePriceCents / 100).toFixed(2)}`,
      },
    }))

    const formattedAddOns = addOns.map((addOn) => ({
      id: addOn.id,
      name: addOn.name,
      duration: addOn.durationMin,
      price: {
        cents: addOn.priceCents,
        formatted: `$${(addOn.priceCents / 100).toFixed(2)}`,
      },
    }))

    return NextResponse.json({
      services: formattedServices,
      addOns: formattedAddOns,
    })
  } catch (error) {
    console.error('Error fetching services:', error)
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    )
  }
}
