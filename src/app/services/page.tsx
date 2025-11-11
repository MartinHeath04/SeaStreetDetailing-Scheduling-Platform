import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      name: "Basic Wash",
      price: 49,
      duration: "45-60 minutes",
      description: "Perfect for regular maintenance",
      features: [
        "Exterior hand wash",
        "Wheel & tire cleaning",
        "Window cleaning",
        "Quick interior vacuum",
        "Dashboard wipe-down"
      ],
      href: "/book?service=basic",
      featured: false
    },
    {
      name: "Premium Detail",
      price: 129,
      duration: "2-3 hours",
      description: "Complete professional detailing",
      features: [
        "Everything in Basic Wash",
        "Clay bar treatment",
        "Premium wax application",
        "Interior deep cleaning",
        "Leather conditioning",
        "Carpet & upholstery cleaning",
        "Engine bay cleaning"
      ],
      href: "/book?service=premium",
      featured: true
    },
    {
      name: "Luxury Package",
      price: 199,
      duration: "4-5 hours",
      description: "Ultimate protection & restoration",
      features: [
        "Everything in Premium Detail",
        "Paint correction (1-step)",
        "Ceramic coating application",
        "Headlight restoration",
        "Interior protection treatment",
        "Tire shine & protection",
        "90-day protection guarantee"
      ],
      href: "/book?service=luxury",
      featured: false
    }
  ]

  const addOns = [
    { name: "Headlight Restoration", price: 35 },
    { name: "Engine Bay Detail", price: 40 },
    { name: "Pet Hair Removal", price: 25 },
    { name: "Odor Elimination", price: 30 }
  ]

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Our Detailing Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional mobile auto detailing packages designed to keep your vehicle looking its best
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <div
              key={service.name}
              className={`relative rounded-2xl border-2 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                service.featured
                  ? 'border-blue-600 scale-105'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {service.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-1 rounded-full text-sm font-semibold shadow-md">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{service.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-bold text-blue-600">${service.price}</span>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-gray-600 mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Duration: {service.duration}
              </div>

              <Link
                href={service.href}
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                  service.featured
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                Book {service.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Add-Ons Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-10 mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Add-On Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">{addon.name}</span>
                  <span className="text-blue-600 font-bold text-lg">+${addon.price}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">Add these services to any package during booking</p>
        </div>

        {/* Service Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-xl bg-white border border-gray-100 shadow-sm">
            <div className="text-5xl mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">We Come to You</h3>
            <p className="text-gray-600">
              Mobile service available within 25 miles of downtown. We bring all equipment and water needed for a complete detail at your home, office, or any location.
            </p>
          </div>

          <div className="text-center p-8 rounded-xl bg-white border border-gray-100 shadow-sm">
            <div className="text-5xl mb-4">📅</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Easy Scheduling</h3>
            <p className="text-gray-600">
              Book online or call (555) 626-9810. Same-day service available based on availability. We provide 1-hour arrival windows and text confirmations.
            </p>
          </div>

          <div className="text-center p-8 rounded-xl bg-white border border-gray-100 shadow-sm">
            <div className="text-5xl mb-4">💯</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Satisfaction Guaranteed</h3>
            <p className="text-gray-600">
              Not happy with our service? We'll return within 24 hours to make it right at no additional charge. Your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
