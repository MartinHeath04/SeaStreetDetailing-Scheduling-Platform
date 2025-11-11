"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

interface Booking {
  id: string
  customerName: string
  email: string
  phone: string
  address: string
  notes: string | null
  startAtUtc: string
  endAtUtc: string
  priceCents: number
  status: string
  service: {
    name: string
    duration: number
  }
  addOns: Array<{
    id: string
    name: string
    price: {
      cents: number
      formatted: string
    }
  }>
}

export default function BookingConfirmationPage() {
  const searchParams = useSearchParams()
  const bookingId = searchParams.get("id")

  const [booking, setBooking] = useState<Booking | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchBooking() {
      if (!bookingId) {
        setError("No booking ID provided")
        setLoading(false)
        return
      }

      try {
        const response = await fetch(`/api/bookings/${bookingId}`)

        if (!response.ok) {
          throw new Error("Failed to fetch booking details")
        }

        const data = await response.json()
        setBooking(data.booking)
      } catch (error) {
        console.error("Error fetching booking:", error)
        setError("Failed to load booking details. Please contact us if you need assistance.")
      } finally {
        setLoading(false)
      }
    }

    fetchBooking()
  }, [bookingId])

  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-xl text-gray-600">Loading your booking details...</p>
        </div>
      </div>
    )
  }

  if (error || !booking) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="text-4xl mb-4">⚠️</div>
          <p className="text-xl text-red-600 mb-4">{error || "Booking not found"}</p>
          <a
            href="/book"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Make a New Booking
          </a>
        </div>
      </div>
    )
  }

  const startDate = new Date(booking.startAtUtc)
  const endDate = new Date(booking.endAtUtc)
  const totalPrice = booking.priceCents / 100

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  const formatTimeRange = (start: Date, end: Date) => {
    return `${formatTime(start)} - ${formatTime(end)}`
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Success Banner */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-4xl font-bold text-green-900 mb-2">Booking Confirmed!</h1>
            <p className="text-xl text-green-700">
              Your appointment has been successfully scheduled
            </p>
          </div>
        </div>

        {/* Booking Details */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Booking ID */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Booking Reference Number</p>
              <p className="text-3xl font-bold text-blue-600 font-mono">{booking.id.slice(-8).toUpperCase()}</p>
              <p className="text-sm text-gray-500 mt-2">Save this for your records</p>
            </div>
          </div>

          {/* Appointment Details */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
              <span className="mr-2">📅</span>
              Appointment Details
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Service:</span>
                <span className="font-bold text-gray-900">{booking.service.name}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Date:</span>
                <span className="font-bold text-gray-900">{formatDate(startDate)}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Time:</span>
                <span className="font-bold text-gray-900">{formatTimeRange(startDate, endDate)}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Location:</span>
                <span className="font-bold text-gray-900 text-right">{booking.address}</span>
              </div>
              {booking.addOns.length > 0 && (
                <div className="py-3">
                  <div className="text-gray-600 font-medium mb-2">Add-ons:</div>
                  <div className="space-y-1 ml-4">
                    {booking.addOns.map((addon) => (
                      <div key={addon.id} className="text-gray-700">
                        • {addon.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {booking.notes && (
                <div className="py-3">
                  <div className="text-gray-600 font-medium mb-2">Special Instructions:</div>
                  <div className="text-gray-700 ml-4">{booking.notes}</div>
                </div>
              )}
            </div>
          </div>

          {/* Customer Information */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
              <span className="mr-2">👤</span>
              Your Information
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Name:</span>
                <span className="font-bold text-gray-900">{booking.customerName}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Email:</span>
                <span className="font-bold text-gray-900">{booking.email}</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-gray-600 font-medium">Phone:</span>
                <span className="font-bold text-gray-900">{booking.phone}</span>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
              <span className="mr-2">💳</span>
              Payment Information
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-700 font-medium">Total Amount:</span>
                <span className="text-3xl font-bold text-blue-600">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="text-gray-700">
                  <strong>Payment will be collected on-site</strong> after your service is completed.
                  We accept cash, credit cards, and digital payments.
                </p>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
              <span className="mr-2">📋</span>
              What to Expect
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-2xl mr-4">📧</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Confirmation Email</h3>
                  <p className="text-gray-600">
                    You'll receive a confirmation email at {booking.email} with all your booking details.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-2xl mr-4">📱</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">SMS Reminders</h3>
                  <p className="text-gray-600">
                    We'll send you text reminders 24 hours and 2 hours before your appointment.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-2xl mr-4">🚗</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">On the Day</h3>
                  <p className="text-gray-600">
                    Our team will arrive at your location at the scheduled time with all necessary equipment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-3 text-gray-900 flex items-center">
              <span className="mr-2">⚠️</span>
              Cancellation Policy
            </h2>
            <p className="text-gray-700">
              Free cancellation up to 24 hours before your appointment. Cancellations within 24 hours
              may be subject to a fee. To cancel or reschedule, please call us at{" "}
              <a href="tel:+15556269810" className="text-blue-600 font-bold hover:underline">
                (555) 626-9810
              </a>
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 text-center">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Questions or Need to Reschedule?</h2>
            <p className="text-gray-600 mb-4">Our team is here to help!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15556269810"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                📞 Call (555) 626-9810
              </a>
              <a
                href={`mailto:info@seastreetdetailing.com?subject=Booking ${booking.id.slice(-8).toUpperCase()}`}
                className="inline-block bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                ✉️ Email Us
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <a
              href="/"
              className="flex-1 bg-gray-200 text-gray-800 py-4 px-6 rounded-lg font-semibold text-center hover:bg-gray-300 transition-colors"
            >
              ← Back to Home
            </a>
            <button
              onClick={() => window.print()}
              className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              🖨️ Print Confirmation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
