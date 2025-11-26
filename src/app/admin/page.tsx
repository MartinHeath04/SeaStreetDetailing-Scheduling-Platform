"use client"

import { useState, useEffect } from "react"

interface Booking {
  id: string
  customerName: string
  email: string
  phone: string
  service: {
    name: string
    duration: number
  }
  appointment: {
    startAt: string
    endAt: string
    formatted: string
  }
  address: string
  status: string
  price: {
    cents: number
    formatted: string
  }
  createdAt: string
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'bookings'>('dashboard')
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Fetch bookings when bookings tab is active
  useEffect(() => {
    if (activeTab === 'bookings') {
      fetchBookings()
    }
  }, [activeTab])

  const fetchBookings = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch('/api/bookings')

      if (!response.ok) {
        throw new Error('Failed to fetch bookings')
      }

      const data = await response.json()
      setBookings(data.bookings)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load bookings')
    } finally {
      setLoading(false)
    }
  }

  const getStatusBadge = (status: string) => {
    const statusStyles: Record<string, string> = {
      pending: 'bg-yellow-100 text-yellow-800',
      pending_payment: 'bg-blue-100 text-blue-800',
      confirmed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
      payment_failed: 'bg-red-100 text-red-800',
    }

    const statusLabels: Record<string, string> = {
      pending: 'Pending',
      pending_payment: 'Pending Payment',
      confirmed: 'Confirmed',
      cancelled: 'Cancelled',
      payment_failed: 'Payment Failed',
    }

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`}>
        {statusLabels[status] || status}
      </span>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Manage your detailing business</p>
            </div>
            <div className="text-sm text-gray-500">
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'dashboard'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('bookings')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'bookings'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              All Bookings
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'dashboard' && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Overview</h2>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Today's Appointments */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Today's Appointments</h3>
                  <span className="text-2xl">📅</span>
                </div>
                <p className="text-3xl font-bold text-gray-900">0</p>
                <p className="text-sm text-gray-500 mt-1">No appointments today</p>
              </div>

              {/* Total Bookings */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Total Bookings</h3>
                  <span className="text-2xl">📊</span>
                </div>
                <p className="text-3xl font-bold text-gray-900">-</p>
                <p className="text-sm text-gray-500 mt-1">All time</p>
              </div>

              {/* Total Revenue */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Total Revenue</h3>
                  <span className="text-2xl">💰</span>
                </div>
                <p className="text-3xl font-bold text-gray-900">$0</p>
                <p className="text-sm text-gray-500 mt-1">Confirmed bookings</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
              <p className="text-gray-500 text-center py-8">No recent bookings to display</p>
            </div>
          </div>
        )}

        {activeTab === 'bookings' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">All Bookings</h2>
              <button
                onClick={fetchBookings}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
              >
                Refresh
              </button>
            </div>

            {loading && (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">⏳</div>
                <p className="text-gray-600">Loading bookings...</p>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <p className="text-red-800">{error}</p>
              </div>
            )}

            {!loading && !error && bookings.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                <div className="text-4xl mb-4">📭</div>
                <p className="text-gray-600">No bookings found</p>
              </div>
            )}

            {!loading && !error && bookings.length > 0 && (
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Service
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Appointment
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{booking.customerName}</div>
                          <div className="text-sm text-gray-500">{booking.phone}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{booking.service.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{booking.appointment.formatted}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {getStatusBadge(booking.status)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{booking.price.formatted}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button className="text-blue-600 hover:text-blue-900 font-medium">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
