const { PrismaClient } = require('../generated/prisma')

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Clear existing data
  await prisma.payment.deleteMany()
  await prisma.smsLog.deleteMany()
  await prisma.booking.deleteMany()
  await prisma.unavailability.deleteMany()
  await prisma.addOn.deleteMany()
  await prisma.service.deleteMany()

  // Seed Services
  const basicWash = await prisma.service.create({
    data: {
      name: 'Basic Wash',
      durationMin: 60,
      basePriceCents: 4900, // $49
      active: true,
    },
  })

  const premiumDetail = await prisma.service.create({
    data: {
      name: 'Premium Detail',
      durationMin: 150, // 2.5 hours
      basePriceCents: 12900, // $129
      active: true,
    },
  })

  const luxuryPackage = await prisma.service.create({
    data: {
      name: 'Luxury Package',
      durationMin: 270, // 4.5 hours
      basePriceCents: 19900, // $199
      active: true,
    },
  })

  console.log(`✅ Created ${3} services`)

  // Seed Add-Ons
  const headlightRestoration = await prisma.addOn.create({
    data: {
      name: 'Headlight Restoration',
      priceCents: 3500, // $35
      durationMin: 30,
      active: true,
    },
  })

  const engineBayDetail = await prisma.addOn.create({
    data: {
      name: 'Engine Bay Detail',
      priceCents: 4000, // $40
      durationMin: 45,
      active: true,
    },
  })

  const petHairRemoval = await prisma.addOn.create({
    data: {
      name: 'Pet Hair Removal',
      priceCents: 2500, // $25
      durationMin: 30,
      active: true,
    },
  })

  const odorElimination = await prisma.addOn.create({
    data: {
      name: 'Odor Elimination',
      priceCents: 3000, // $30
      durationMin: 20,
      active: true,
    },
  })

  console.log(`✅ Created ${4} add-ons`)

  console.log('🎉 Database seeded successfully!')
  console.log('')
  console.log('Services:')
  console.log(`  - ${basicWash.name}: $${basicWash.basePriceCents / 100} (${basicWash.durationMin}min)`)
  console.log(`  - ${premiumDetail.name}: $${premiumDetail.basePriceCents / 100} (${premiumDetail.durationMin}min)`)
  console.log(`  - ${luxuryPackage.name}: $${luxuryPackage.basePriceCents / 100} (${luxuryPackage.durationMin}min)`)
  console.log('')
  console.log('Add-Ons:')
  console.log(`  - ${headlightRestoration.name}: $${headlightRestoration.priceCents / 100} (+${headlightRestoration.durationMin}min)`)
  console.log(`  - ${engineBayDetail.name}: $${engineBayDetail.priceCents / 100} (+${engineBayDetail.durationMin}min)`)
  console.log(`  - ${petHairRemoval.name}: $${petHairRemoval.priceCents / 100} (+${petHairRemoval.durationMin}min)`)
  console.log(`  - ${odorElimination.name}: $${odorElimination.priceCents / 100} (+${odorElimination.durationMin}min)`)
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
