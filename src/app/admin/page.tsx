"use client"

import { useState } from "react"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'bookings'>('dashboard')

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
            <h2 className="text-xl font-bold text-gray-900 mb-4">All Bookings</h2>
            <p className="text-gray-600">Bookings list coming soon...</p>
          </div>
        )}
      </div>
    </div>
  )
}
