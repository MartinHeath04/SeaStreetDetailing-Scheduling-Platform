import Link from "next/link"

interface Review {
  id: number
  name: string
  rating: 5
  date: string
  text: string
  service: string
  verified: boolean
}

export default function ReviewsPage() {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      date: "2 weeks ago",
      text: "Amazing service! My car looks brand new. The team was professional, thorough, and paid attention to every detail. They even cleaned areas I didn't think were possible. Highly recommend the Premium Detail package!",
      service: "Premium Detail",
      verified: true
    },
    {
      id: 2,
      name: "Mike R.",
      rating: 5,
      date: "1 month ago",
      text: "Excellent mobile service. They came to my office and detailed my car while I worked. When I came out, it looked absolutely stunning. The convenience alone is worth it, but the quality of work exceeded my expectations.",
      service: "Basic Wash",
      verified: true
    },
    {
      id: 3,
      name: "Jennifer L.",
      rating: 5,
      date: "3 weeks ago",
      text: "Fair pricing and incredible results. I have two dogs and my SUV was a mess. They got every bit of pet hair out and eliminated the odor completely. Will definitely use their services again!",
      service: "Pet Hair Removal Add-on",
      verified: true
    },
    {
      id: 4,
      name: "David K.",
      rating: 5,
      date: "1 week ago",
      text: "The Luxury Package transformed my Mercedes. The ceramic coating is phenomenal and the paint looks better than when I bought it. These guys are true professionals who care about their craft.",
      service: "Luxury Package",
      verified: true
    },
    {
      id: 5,
      name: "Lisa P.",
      rating: 5,
      date: "2 months ago",
      text: "Best detailing service in the area! They're always on time, communicate well via text, and the results speak for themselves. My husband and I are now regular customers.",
      service: "Premium Detail",
      verified: true
    },
    {
      id: 6,
      name: "James T.",
      rating: 5,
      date: "3 days ago",
      text: "Incredibly thorough interior cleaning. The leather conditioning brought my seats back to life, and the whole car smells fresh. Worth every penny!",
      service: "Premium Detail",
      verified: true
    }
  ]

  const stats = [
    { label: "Happy Customers", value: "500+" },
    { label: "5-Star Reviews", value: "98%" },
    { label: "Years in Business", value: "5+" },
    { label: "Vehicles Detailed", value: "2,000+" }
  ]

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Customer Reviews</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What our satisfied customers are saying about their Sea Street Detailing experience
          </p>

          {/* Average Rating */}
          <div className="mt-8 inline-flex items-center gap-3 bg-blue-50 px-8 py-4 rounded-full">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-8 h-8 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <div className="text-left">
              <div className="text-3xl font-bold text-gray-900">5.0</div>
              <div className="text-sm text-gray-600">Based on 500+ reviews</div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4 leading-relaxed">{review.text}</p>

              {/* Service Badge */}
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {review.service}
                </span>
              </div>

              {/* Reviewer Info */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <div className="font-semibold text-gray-900 flex items-center gap-2">
                    {review.name}
                    {review.verified && (
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">{review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Experience 5-Star Service Yourself</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our growing family of satisfied customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors text-lg"
            >
              Book Your Detailing
            </Link>
            <Link
              href="/services"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg"
            >
              View Services & Pricing
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="font-bold text-lg mb-2">100% Satisfaction Guaranteed</h3>
            <p className="text-gray-600">Not happy? We'll make it right or refund you</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="font-bold text-lg mb-2">Award-Winning Service</h3>
            <p className="text-gray-600">Recognized for excellence in auto detailing</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-3">📱</div>
            <h3 className="font-bold text-lg mb-2">SMS Confirmations</h3>
            <p className="text-gray-600">Stay updated with automated text reminders</p>
          </div>
        </div>
      </div>
    </div>
  )
}
