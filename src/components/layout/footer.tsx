import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Sea Street Detailing</h3>
            <p className="text-gray-400 mb-4">
              Professional auto detailing services with attention to detail and quality results.
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                📞
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                ✉️
                <span>info@seastreedetailing.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                📍
                <span>Your City, State</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Business Hours</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                🕒
                <div>
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 8:00 AM - 4:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700">
        <div className="mx-auto max-w-7xl px-6 py-4 md:flex md:items-center md:justify-between lg:px-8">
          <p className="text-center text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; 2024 Sea Street Detailing. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="/privacy" className="text-gray-400 hover:text-gray-300 text-xs">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-gray-300 text-xs">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}