import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Professional Auto Detailing Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Transform your vehicle with our premium detailing services. From thorough cleaning to protective treatments, we make your car look and feel like new.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/book"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Book Now
              </Link>
              <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900">
                See Pricing <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Quality Service</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Sea Street Detailing?
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Professional Equipment
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We use industry-grade tools and premium products to ensure the highest quality results.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Convenient Scheduling
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Book online in minutes with our easy scheduling system and automated reminders.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Satisfaction Guaranteed
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We stand behind our work with a 100% satisfaction guarantee on all services.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Competitive Pricing
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Get premium detailing services at fair, transparent prices with no hidden fees.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}