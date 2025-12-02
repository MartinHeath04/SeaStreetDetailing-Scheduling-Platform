import Link from "next/link"
import Prism from "@/components/Prism"

export default function Home() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0.5}
            glow={1}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Professional Marine Detailing
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
              Your Boat Deserves
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                The Best Care
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Premium mobile detailing services that bring showroom quality to your dock. Book online in minutes and get your boat looking brand new.
            </p>

            <div className="mt-10 flex items-center justify-center gap-6">
              <Link
                href="/book"
                className="rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/50 transition hover:bg-blue-500 hover:shadow-blue-500/50"
              >
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="group rounded-lg bg-white/10 px-8 py-4 text-base font-semibold text-white ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-white/20"
              >
                View Services
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
            <div className="flex flex-col">
              <dt className="text-sm font-medium text-slate-600">Years Experience</dt>
              <dd className="mt-2 text-4xl font-bold text-slate-900">8+</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-sm font-medium text-slate-600">Boats Detailed</dt>
              <dd className="mt-2 text-4xl font-bold text-slate-900">2,500+</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-sm font-medium text-slate-600">Customer Rating</dt>
              <dd className="mt-2 text-4xl font-bold text-slate-900">4.9★</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Services Preview */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 mb-2">Our Services</h2>
          <p className="text-4xl font-bold text-slate-900">
            Complete Care for Your Boat
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition hover:shadow-xl hover:ring-blue-600">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Exterior Detailing</h3>
            <p className="text-slate-600">
              Complete exterior wash, clay bar treatment, polish, and wax protection for a showroom shine.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition hover:shadow-xl hover:ring-blue-600">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Interior Detailing</h3>
            <p className="text-slate-600">
              Deep vacuum, steam cleaning, leather conditioning, and sanitization for a fresh cabin.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition hover:shadow-xl hover:ring-blue-600">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Paint Protection</h3>
            <p className="text-slate-600">
              Ceramic coatings and paint sealants to protect your investment from the elements.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-base font-semibold text-blue-600 mb-2">Why Sea Street</h2>
              <p className="text-4xl font-bold text-slate-900 mb-6">
                Detailing Done Right
              </p>
              <p className="text-lg text-slate-600 mb-8">
                We're not just another boat wash. Every boat gets meticulous attention to detail using professional-grade marine products and techniques.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Mobile Service Available</h3>
                    <p className="text-slate-600">We come to you. Work, home, or anywhere in the area.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Quick Turnaround</h3>
                    <p className="text-slate-600">Most services completed in 2-4 hours on-site.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Satisfaction Guarantee</h3>
                    <p className="text-slate-600">Not happy? We'll make it right or refund you.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:h-96 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center p-12">
              <div className="text-center text-white">
                <svg className="mx-auto h-24 w-24 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <p className="text-2xl font-bold">Premium Quality</p>
                <p className="mt-2 text-blue-100">Every Detail Matters</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to restore your boat's shine?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Book your appointment online in under 2 minutes. Choose your service, pick a time, and we'll handle the rest.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <Link
                href="/book"
                className="rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/50 transition hover:bg-blue-500"
              >
                Schedule Now
              </Link>
              <Link href="/services" className="text-base font-semibold text-white hover:text-blue-400 transition">
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}