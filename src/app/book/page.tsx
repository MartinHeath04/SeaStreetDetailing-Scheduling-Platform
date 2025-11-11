"use client"

import { useState, useEffect } from "react"

interface Service {
  id: string
  name: string
  price: number
  duration: number
  features: string[]
  featured?: boolean
}

interface AddOn {
  id: string
  name: string
  price: number
  duration: number
}

interface APIService {
  id: string
  name: string
  duration: number
  price: {
    cents: number
    formatted: string
  }
}

interface APIAddOn {
  id: string
  name: string
  duration: number
  price: {
    cents: number
    formatted: string
  }
}

interface TimeSlot {
  start: string
  end: string
  startUtc: string
  endUtc: string
  formatted: string
}

export default function BookPage() {
  // Form state
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null)
  const [customerName, setCustomerName] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [customerAddress, setCustomerAddress] = useState('')
  const [customerNotes, setCustomerNotes] = useState('')

  // Validation state
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  // Data state
  const [services, setServices] = useState<Service[]>([])
  const [addOns, setAddOns] = useState<AddOn[]>([])
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([])
  const [loading, setLoading] = useState(true)
  const [slotsLoading, setSlotsLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [slotsError, setSlotsError] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [bookingId, setBookingId] = useState<string | null>(null)

  // Fetch services and add-ons from API
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const response = await fetch('/api/services')

        if (!response.ok) {
          throw new Error('Failed to fetch services')
        }

        const data = await response.json()

        // Map API services to frontend format with features
        const serviceFeatures: Record<string, string[]> = {
          'Basic Wash': [
            "Exterior hand wash",
            "Wheel & tire cleaning",
            "Window cleaning",
            "Quick interior vacuum",
            "Dashboard wipe-down"
          ],
          'Premium Detail': [
            "Everything in Basic Wash",
            "Clay bar treatment",
            "Premium wax application",
            "Interior deep cleaning",
            "Leather conditioning",
            "Carpet & upholstery cleaning"
          ],
          'Luxury Package': [
            "Everything in Premium Detail",
            "Paint correction (1-step)",
            "Ceramic coating application",
            "Headlight restoration",
            "Interior protection treatment",
            "90-day protection guarantee"
          ]
        }

        const formattedServices: Service[] = data.services.map((svc: APIService) => ({
          id: svc.id,
          name: svc.name,
          price: svc.price.cents / 100,
          duration: svc.duration,
          features: serviceFeatures[svc.name] || [],
          featured: svc.name === 'Premium Detail'
        }))

        const formattedAddOns: AddOn[] = data.addOns.map((addon: APIAddOn) => ({
          id: addon.id,
          name: addon.name,
          price: addon.price.cents / 100,
          duration: addon.duration
        }))

        setServices(formattedServices)
        setAddOns(formattedAddOns)
        setError(null)
      } catch (error) {
        console.error('Error fetching services:', error)
        setError('Failed to load services. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Fetch available time slots when date is selected
  useEffect(() => {
    async function fetchAvailableSlots() {
      if (!selectedDate || !selectedService) {
        setAvailableSlots([])
        return
      }

      try {
        setSlotsLoading(true)
        setSlotsError(null)

        const response = await fetch(
          `/api/availability?date=${selectedDate}&serviceId=${selectedService}`
        )

        if (!response.ok) {
          throw new Error('Failed to fetch available slots')
        }

        const data = await response.json()
        setAvailableSlots(data.slots || [])
      } catch (error) {
        console.error('Error fetching slots:', error)
        setSlotsError('Failed to load available time slots. Please try again.')
        setAvailableSlots([])
      } finally {
        setSlotsLoading(false)
      }
    }

    fetchAvailableSlots()
  }, [selectedDate, selectedService])

  // Calculate totals
  const selectedServiceData = services.find(s => s.id === selectedService)
  const servicePrice = selectedServiceData?.price || 0
  const serviceDuration = selectedServiceData?.duration || 0

  const addOnsTotal = selectedAddOns.reduce((total, addonId) => {
    const addon = addOns.find(a => a.id === addonId)
    return total + (addon?.price || 0)
  }, 0)

  const addOnsDuration = selectedAddOns.reduce((total, addonId) => {
    const addon = addOns.find(a => a.id === addonId)
    return total + (addon?.duration || 0)
  }, 0)

  const grandTotal = servicePrice + addOnsTotal
  const totalDuration = serviceDuration + addOnsDuration

  // Format duration
  const formatDuration = (minutes: number): string => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60

    if (hours === 0) return `${mins} minutes`
    if (mins === 0) return `${hours} ${hours === 1 ? 'hour' : 'hours'}`

    return `${hours}h ${mins}m`
  }

  // Generate available dates (next 30 days)
  const generateAvailableDates = (): Array<{ date: string; formatted: string; dayName: string }> => {
    const dates = []
    const today = new Date()

    for (let i = 1; i <= 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)

      const dateStr = date.toISOString().split('T')[0]
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' })
      const formatted = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })

      dates.push({ date: dateStr, formatted, dayName })
    }

    return dates
  }

  const availableDates = generateAvailableDates()

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
  }

  const handleAddOnToggle = (addonId: string) => {
    setSelectedAddOns(prev =>
      prev.includes(addonId)
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    )
  }

  const handleDateSelect = (date: string) => {
    setSelectedDate(date)
    setSelectedTimeSlot(null) // Reset time slot when date changes
  }

  const handleTimeSlotSelect = (slot: TimeSlot) => {
    setSelectedTimeSlot(slot)
  }

  const validateCustomerInfo = (): boolean => {
    const errors: Record<string, string> = {}

    // Name validation
    if (!customerName.trim()) {
      errors.name = 'Name is required'
    } else if (customerName.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!customerEmail.trim()) {
      errors.email = 'Email is required'
    } else if (!emailRegex.test(customerEmail)) {
      errors.email = 'Please enter a valid email address'
    }

    // Phone validation
    const phoneDigits = customerPhone.replace(/\D/g, '')
    if (!customerPhone.trim()) {
      errors.phone = 'Phone number is required'
    } else if (phoneDigits.length !== 10) {
      errors.phone = 'Please enter a valid 10-digit phone number'
    }

    // Address validation
    if (!customerAddress.trim()) {
      errors.address = 'Service address is required'
    } else if (customerAddress.trim().length < 10) {
      errors.address = 'Please enter a complete address'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleContinue = () => {
    if (currentStep === 1 && selectedService) {
      setCurrentStep(2)
    } else if (currentStep === 2 && selectedDate && selectedTimeSlot) {
      setCurrentStep(3)
    } else if (currentStep === 3) {
      if (validateCustomerInfo()) {
        setCurrentStep(4)
      }
    }
  }

  const handleBack = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleSubmitBooking = async () => {
    if (!selectedService || !selectedTimeSlot || !selectedDate) {
      setSubmitError('Please complete all required fields')
      return
    }

    try {
      setSubmitting(true)
      setSubmitError(null)

      const bookingData = {
        serviceId: selectedService,
        addOnIds: selectedAddOns,
        startAtUtc: selectedTimeSlot.startUtc,
        endAtUtc: selectedTimeSlot.endUtc,
        customerName: customerName.trim(),
        email: customerEmail.trim(),
        phone: customerPhone.trim(),
        address: customerAddress.trim(),
        notes: customerNotes.trim() || undefined,
      }

      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to create booking')
      }

      const result = await response.json()
      setBookingId(result.booking.id)

      // Redirect to success page or show confirmation
      window.location.href = `/booking-confirmation?id=${result.booking.id}`
    } catch (error) {
      console.error('Error submitting booking:', error)
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit booking. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-xl text-gray-600">Loading services...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="text-4xl mb-4">⚠️</div>
          <p className="text-xl text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Book Your Service</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule your professional auto detailing appointment in just a few steps
          </p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-2 ${
                currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                1
              </div>
              <span className={`text-sm font-semibold ${
                currentStep >= 1 ? 'text-blue-600' : 'text-gray-500'
              }`}>Select Service</span>
            </div>
            <div className={`flex-1 h-1 mx-4 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-2 ${
                currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                2
              </div>
              <span className={`text-sm ${
                currentStep >= 2 ? 'font-semibold text-blue-600' : 'text-gray-500'
              }`}>Date & Time</span>
            </div>
            <div className={`flex-1 h-1 mx-4 ${currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-2 ${
                currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                3
              </div>
              <span className={`text-sm ${
                currentStep >= 3 ? 'font-semibold text-blue-600' : 'text-gray-500'
              }`}>Your Info</span>
            </div>
            <div className={`flex-1 h-1 mx-4 ${currentStep >= 4 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-2 ${
                currentStep >= 4 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                4
              </div>
              <span className={`text-sm ${
                currentStep >= 4 ? 'font-semibold text-blue-600' : 'text-gray-500'
              }`}>Confirm</span>
            </div>
          </div>
        </div>

        {/* Step 1: Service Selection */}
        {currentStep === 1 && (
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Choose Your Service Package</h2>
              <p className="text-gray-600">Select the detailing service that best fits your needs</p>
            </div>

            {/* Service Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => handleServiceSelect(service.id)}
                  className={`relative border-2 rounded-2xl p-6 cursor-pointer transition-all duration-200 ${
                    selectedService === service.id
                      ? 'border-blue-600 bg-blue-50 shadow-xl scale-105'
                      : service.featured
                      ? 'border-blue-300 hover:border-blue-400 hover:shadow-lg'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
                  }`}
                >
                  {service.featured && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{service.name}</h3>
                    <div className="text-4xl font-bold text-blue-600 mb-2">${service.price}</div>
                    <div className="text-sm text-gray-600">
                      ⏱️ {formatDuration(service.duration)}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      selectedService === service.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {selectedService === service.id ? '✓ Selected' : 'Select ' + service.name}
                  </button>
                </div>
              ))}
            </div>

            {/* Add-Ons Section */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Optional Add-Ons</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {addOns.map((addon) => (
                  <label
                    key={addon.id}
                    className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      selectedAddOns.includes(addon.id)
                        ? 'border-blue-600 bg-blue-100'
                        : 'border-gray-200 bg-white hover:border-blue-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedAddOns.includes(addon.id)}
                      onChange={() => handleAddOnToggle(addon.id)}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-3"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm">{addon.name}</div>
                      <div className="text-blue-600 font-bold">+${addon.price}</div>
                      <div className="text-xs text-gray-500">+{formatDuration(addon.duration)}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Booking Summary */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Booking Summary</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">Selected Service:</span>
                  <span className="font-bold text-gray-900">
                    {selectedServiceData ? `${selectedServiceData.name} - $${servicePrice}` : 'Please select a service'}
                  </span>
                </div>

                {selectedServiceData && (
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Service Duration:</span>
                    <span className="font-bold text-gray-900">{formatDuration(serviceDuration)}</span>
                  </div>
                )}

                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">Add-ons:</span>
                  <span className="font-bold text-blue-600">${addOnsTotal.toFixed(2)}</span>
                </div>

                {selectedAddOns.length > 0 && (
                  <div className="pl-4 text-sm text-gray-600">
                    {selectedAddOns.map(id => {
                      const addon = addOns.find(a => a.id === id)
                      return (
                        <div key={id} className="flex justify-between py-1">
                          <span>• {addon?.name}</span>
                          <span>+${addon?.price}</span>
                        </div>
                      )
                    })}
                  </div>
                )}

                <div className="flex justify-between items-center py-4 bg-blue-50 px-4 rounded-lg">
                  <div>
                    <div className="text-xl font-bold text-gray-900">Total:</div>
                    <div className="text-sm text-gray-600">Estimated duration: {formatDuration(totalDuration + 30)}</div>
                  </div>
                  <span className="text-3xl font-bold text-blue-600">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleContinue}
                disabled={!selectedService}
                className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-colors ${
                  selectedService
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue to Date & Time →
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Date & Time Selection */}
        {currentStep === 2 && (
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Select Your Date & Time</h2>
              <p className="text-gray-600">Choose when you'd like us to detail your vehicle</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Date Selection */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">📅 Choose a Date</h3>
                <p className="text-sm text-gray-600 mb-4">Select from the next 30 days</p>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-h-96 overflow-y-auto pr-2">
                  {availableDates.map((dateObj) => (
                    <button
                      key={dateObj.date}
                      onClick={() => handleDateSelect(dateObj.date)}
                      className={`p-3 border-2 rounded-lg text-center transition-all ${
                        selectedDate === dateObj.date
                          ? 'border-blue-600 bg-blue-50 shadow-lg scale-105'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`text-xs font-semibold mb-1 ${
                        selectedDate === dateObj.date ? 'text-blue-600' : 'text-gray-500'
                      }`}>
                        {dateObj.dayName}
                      </div>
                      <div className={`text-lg font-bold ${
                        selectedDate === dateObj.date ? 'text-blue-600' : 'text-gray-900'
                      }`}>
                        {dateObj.formatted}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slot Selection */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">⏰ Choose a Time</h3>

                {!selectedDate && (
                  <div className="text-center py-12 text-gray-400">
                    <div className="text-4xl mb-4">👈</div>
                    <p>Select a date first to see available times</p>
                  </div>
                )}

                {selectedDate && slotsLoading && (
                  <div className="text-center py-12">
                    <div className="text-4xl mb-4">⏳</div>
                    <p className="text-gray-600">Loading available times...</p>
                  </div>
                )}

                {selectedDate && !slotsLoading && slotsError && (
                  <div className="text-center py-12">
                    <div className="text-4xl mb-4">⚠️</div>
                    <p className="text-red-600 mb-4">{slotsError}</p>
                    <button
                      onClick={() => setSelectedDate(selectedDate)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                      Try Again
                    </button>
                  </div>
                )}

                {selectedDate && !slotsLoading && !slotsError && availableSlots.length === 0 && (
                  <div className="text-center py-12 text-gray-400">
                    <div className="text-4xl mb-4">😔</div>
                    <p className="mb-2 font-semibold">No available times on this date</p>
                    <p className="text-sm">Please try a different date</p>
                  </div>
                )}

                {selectedDate && !slotsLoading && !slotsError && availableSlots.length > 0 && (
                  <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
                    {availableSlots.map((slot, index) => (
                      <button
                        key={index}
                        onClick={() => handleTimeSlotSelect(slot)}
                        className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                          selectedTimeSlot?.start === slot.start
                            ? 'border-blue-600 bg-blue-50 shadow-md'
                            : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className={`font-bold text-lg ${
                          selectedTimeSlot?.start === slot.start ? 'text-blue-600' : 'text-gray-900'
                        }`}>
                          {slot.formatted}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Summary and Navigation */}
            <div className="mt-8 bg-white border-2 border-gray-200 rounded-2xl p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Appointment Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Service:</span>
                    <span className="font-bold text-gray-900">{selectedServiceData?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Date:</span>
                    <span className="font-bold text-gray-900">
                      {selectedDate
                        ? new Date(selectedDate).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })
                        : 'Not selected'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Time:</span>
                    <span className="font-bold text-gray-900">
                      {selectedTimeSlot ? selectedTimeSlot.formatted : 'Not selected'}
                    </span>
                  </div>
                  <div className="flex justify-between pt-4 border-t-2 border-gray-200">
                    <span className="text-gray-700">Total Price:</span>
                    <span className="font-bold text-2xl text-blue-600">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleBack}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300"
                >
                  ← Back
                </button>
                <button
                  onClick={handleContinue}
                  disabled={!selectedDate || !selectedTimeSlot}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
                    selectedDate && selectedTimeSlot
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Continue to Your Info →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Customer Information */}
        {currentStep === 3 && (
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Your Information</h2>
              <p className="text-gray-600">Tell us where to send your detailing service</p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={customerName}
                    onChange={(e) => {
                      setCustomerName(e.target.value)
                      if (formErrors.name) {
                        setFormErrors({ ...formErrors, name: '' })
                      }
                    }}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formErrors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Smith"
                  />
                  {formErrors.name && (
                    <p className="mt-2 text-sm text-red-600">{formErrors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={customerEmail}
                    onChange={(e) => {
                      setCustomerEmail(e.target.value)
                      if (formErrors.email) {
                        setFormErrors({ ...formErrors, email: '' })
                      }
                    }}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formErrors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                  />
                  {formErrors.email && (
                    <p className="mt-2 text-sm text-red-600">{formErrors.email}</p>
                  )}
                  <p className="mt-2 text-sm text-gray-500">We'll send your confirmation here</p>
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={customerPhone}
                    onChange={(e) => {
                      setCustomerPhone(e.target.value)
                      if (formErrors.phone) {
                        setFormErrors({ ...formErrors, phone: '' })
                      }
                    }}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formErrors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(555) 123-4567"
                  />
                  {formErrors.phone && (
                    <p className="mt-2 text-sm text-red-600">{formErrors.phone}</p>
                  )}
                  <p className="mt-2 text-sm text-gray-500">For appointment reminders and updates</p>
                </div>

                {/* Address Field */}
                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Address *
                  </label>
                  <textarea
                    id="address"
                    value={customerAddress}
                    onChange={(e) => {
                      setCustomerAddress(e.target.value)
                      if (formErrors.address) {
                        setFormErrors({ ...formErrors, address: '' })
                      }
                    }}
                    rows={3}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formErrors.address ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="123 Main St, Apartment 4B, City, State 12345"
                  />
                  {formErrors.address && (
                    <p className="mt-2 text-sm text-red-600">{formErrors.address}</p>
                  )}
                  <p className="mt-2 text-sm text-gray-500">Where should we come to detail your vehicle?</p>
                </div>

                {/* Notes Field (Optional) */}
                <div>
                  <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Any special instructions or requests? (e.g., gate code, parking location, pet in vehicle)"
                  />
                  <p className="mt-2 text-sm text-gray-500">Help us prepare for your appointment</p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8">
                <button
                  onClick={handleBack}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300"
                >
                  ← Back
                </button>
                <button
                  onClick={handleContinue}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700"
                >
                  Review Booking →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Review and Confirm */}
        {currentStep === 4 && (
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Review Your Booking</h2>
              <p className="text-gray-600">Please review all details before confirming your appointment</p>
            </div>

            {submitError && (
              <div className="mb-6 bg-red-50 border-2 border-red-200 rounded-xl p-4">
                <div className="flex items-start">
                  <div className="text-2xl mr-3">⚠️</div>
                  <div>
                    <h3 className="font-bold text-red-900 mb-1">Booking Error</h3>
                    <p className="text-red-700">{submitError}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-6">
              {/* Service Details */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="mr-2">🚗</span>
                  Service Details
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Package:</span>
                    <span className="font-semibold text-gray-900">{selectedServiceData?.name}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-semibold text-gray-900">${servicePrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-gray-900">{formatDuration(serviceDuration)}</span>
                  </div>
                  {selectedAddOns.length > 0 && (
                    <div className="pt-3">
                      <div className="text-gray-600 mb-2">Add-ons:</div>
                      <div className="space-y-2 ml-4">
                        {selectedAddOns.map((id) => {
                          const addon = addOns.find((a) => a.id === id)
                          return addon ? (
                            <div key={id} className="flex justify-between text-sm">
                              <span className="text-gray-700">• {addon.name}</span>
                              <span className="font-semibold text-gray-900">+${addon.price}</span>
                            </div>
                          ) : null
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Appointment Time */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="mr-2">📅</span>
                  Appointment Time
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-semibold text-gray-900">
                      {selectedDate
                        ? new Date(selectedDate).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })
                        : 'Not selected'}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-semibold text-gray-900">
                      {selectedTimeSlot ? selectedTimeSlot.formatted : 'Not selected'}
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Estimated Duration:</span>
                    <span className="font-semibold text-gray-900">{formatDuration(totalDuration + 30)}</span>
                  </div>
                </div>
              </div>

              {/* Customer Information */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <span className="mr-2">👤</span>
                  Your Information
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Name:</span>
                    <span className="font-semibold text-gray-900">{customerName}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-semibold text-gray-900">{customerEmail}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Phone:</span>
                    <span className="font-semibold text-gray-900">{customerPhone}</span>
                  </div>
                  <div className="py-2 border-b border-gray-200">
                    <div className="text-gray-600 mb-1">Service Address:</div>
                    <div className="font-semibold text-gray-900">{customerAddress}</div>
                  </div>
                  {customerNotes && (
                    <div className="py-2">
                      <div className="text-gray-600 mb-1">Special Instructions:</div>
                      <div className="font-semibold text-gray-900">{customerNotes}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Total Price */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Total Price</h3>
                    <p className="text-sm text-gray-600 mt-1">Payment will be collected on-site after service</p>
                  </div>
                  <div className="text-4xl font-bold text-blue-600">${grandTotal.toFixed(2)}</div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-4">
                <label className="flex items-start cursor-pointer">
                  <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <span className="text-sm text-gray-700">
                    I agree to the cancellation policy: Free cancellation up to 24 hours before the appointment.
                    Cancellations within 24 hours may be subject to a fee.
                  </span>
                </label>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleBack}
                  disabled={submitting}
                  className="flex-1 bg-gray-200 text-gray-800 py-4 px-6 rounded-lg font-semibold hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ← Back
                </button>
                <button
                  onClick={handleSubmitBooking}
                  disabled={submitting}
                  className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {submitting ? 'Processing...' : 'Confirm Booking →'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Emergency Contact */}
        <div className="mt-8 max-w-4xl mx-auto bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
          <h3 className="text-lg font-bold mb-2 text-gray-900">Need Help or Have Questions?</h3>
          <p className="text-gray-600 mb-4">Our team is standing by to help you with your booking</p>
          <a
            href="tel:+15556269810"
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Call (555) 626-9810
          </a>
        </div>
      </div>
    </div>
  )
}
