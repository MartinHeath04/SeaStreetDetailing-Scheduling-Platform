"use client"

import Link from "next/link"
import { useState } from "react"

type FilterType = "all" | "exterior" | "interior" | "luxury"

interface GalleryItem {
  id: number
  category: FilterType
  title: string
  description: string
  badges: string[]
  beforeGradient: string
  afterGradient: string
  beforeIcon: string
  afterIcon: string
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all")

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: "exterior",
      title: "2020 BMW X5 - Premium Detail",
      description: "Complete exterior wash, clay bar treatment, and premium wax application",
      badges: ["Exterior Wash", "Clay Bar", "Premium Wax"],
      beforeGradient: "linear-gradient(135deg, #6b7280 0%, #374151 100%)",
      afterGradient: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
      beforeIcon: "🚗",
      afterIcon: "✨"
    },
    {
      id: 2,
      category: "interior",
      title: "Honda Accord - Interior Deep Clean",
      description: "Deep carpet cleaning, leather conditioning, and dashboard restoration",
      badges: ["Deep Clean", "Leather Care", "Stain Removal"],
      beforeGradient: "linear-gradient(135deg, #92400e 0%, #451a03 100%)",
      afterGradient: "linear-gradient(135deg, #059669 0%, #047857 100%)",
      beforeIcon: "🪑",
      afterIcon: "✨"
    },
    {
      id: 3,
      category: "luxury",
      title: "Mercedes-Benz S-Class - Luxury Package",
      description: "Paint correction, ceramic coating, and premium interior protection",
      badges: ["Paint Correction", "Ceramic Coating", "Premium Protection"],
      beforeGradient: "linear-gradient(135deg, #6b7280 0%, #1f2937 100%)",
      afterGradient: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
      beforeIcon: "🏎️",
      afterIcon: "💎"
    },
    {
      id: 4,
      category: "exterior",
      title: "Ford F-150 - Truck Detail",
      description: "Heavy-duty wash, wheel cleaning, and protective coating application",
      badges: ["Heavy Duty Wash", "Wheel Detail", "Protective Coating"],
      beforeGradient: "linear-gradient(135deg, #78716c 0%, #44403c 100%)",
      afterGradient: "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
      beforeIcon: "🚙",
      afterIcon: "🌟"
    },
    {
      id: 5,
      category: "interior",
      title: "Toyota Camry - Pet Hair Removal",
      description: "Specialized pet hair removal and fabric protection treatment",
      badges: ["Pet Hair Removal", "Fabric Protection", "Odor Elimination"],
      beforeGradient: "linear-gradient(135deg, #a16207 0%, #713f12 100%)",
      afterGradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
      beforeIcon: "🧽",
      afterIcon: "✨"
    },
    {
      id: 6,
      category: "luxury",
      title: "Porsche 911 - Show Car Detail",
      description: "Complete paint restoration and concours-level detailing",
      badges: ["Paint Restoration", "Concours Detail", "Show Ready"],
      beforeGradient: "linear-gradient(135deg, #475569 0%, #334155 100%)",
      afterGradient: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
      beforeIcon: "🏁",
      afterIcon: "🏆"
    }
  ]

  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Our Work Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the incredible transformations we achieve with our professional detailing services
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: "all", label: "All Work" },
            { id: "exterior", label: "Exterior Details" },
            { id: "interior", label: "Interior Details" },
            { id: "luxury", label: "Luxury Vehicles" }
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as FilterType)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeFilter === filter.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Before/After Images */}
              <div className="grid grid-cols-2 gap-0">
                {/* Before */}
                <div className="relative">
                  <div
                    className="aspect-video flex items-center justify-center text-white"
                    style={{ background: item.beforeGradient }}
                  >
                    <div className="text-center">
                      <div className="text-6xl mb-2">{item.beforeIcon}</div>
                      <p className="text-xl font-bold tracking-wider">BEFORE</p>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Before
                  </div>
                </div>

                {/* After */}
                <div className="relative">
                  <div
                    className="aspect-video flex items-center justify-center text-white"
                    style={{ background: item.afterGradient }}
                  >
                    <div className="text-center">
                      <div className="text-6xl mb-2">{item.afterIcon}</div>
                      <p className="text-xl font-bold tracking-wider">AFTER</p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    After
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>

                {/* Service Badges */}
                <div className="flex flex-wrap gap-2">
                  {item.badges.map((badge, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready for Your Vehicle's Transformation?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied customers who trust Sea Street Detailing for professional results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Your Free Quote
            </Link>
            <Link
              href="/services"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-400 transition-colors text-lg border-2 border-white"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
