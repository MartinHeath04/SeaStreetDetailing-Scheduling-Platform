"use client"

import { useState } from "react"
import { z } from "zod"

// Zod validation schema
const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  phone: z.string().regex(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  address: z.string().min(10, "Please provide a complete address"),
  serviceType: z.string().min(1, "Please select a service"),
  vehicleType: z.string().min(1, "Please select your vehicle type"),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
  textReminders: z.boolean().optional()
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    serviceType: "",
    vehicleType: "",
    preferredDate: "",
    message: "",
    textReminders: false
  })

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error", text: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))

    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    setSubmitMessage(null)

    try {
      // Validate with Zod
      contactSchema.parse(formData)

      setIsSubmitting(true)

      // Simulate API call (replace with actual API call later)
      await new Promise(resolve => setTimeout(resolve, 1000))

      setSubmitMessage({
        type: "success",
        text: "✅ Thank you! Your quote request has been submitted. We'll contact you within 24 hours."
      })

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        serviceType: "",
        vehicleType: "",
        preferredDate: "",
        message: "",
        textReminders: false
      })

    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message
          }
        })
        setErrors(fieldErrors)
        setSubmitMessage({
          type: "error",
          text: "❌ Please fix the errors above and try again."
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to book your detailing service? Get in touch for a free quote!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Get Your Free Quote</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Contact Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Where should we come to detail your vehicle?"
                    value={formData.address}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.address ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                  )}
                </div>

                {/* Service & Vehicle Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.serviceType ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select a service...</option>
                      <option value="basic">Basic Wash - $49</option>
                      <option value="premium">Premium Detail - $129</option>
                      <option value="luxury">Luxury Package - $199</option>
                      <option value="custom">Custom Quote</option>
                    </select>
                    {errors.serviceType && (
                      <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="vehicleType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Vehicle Type *
                    </label>
                    <select
                      id="vehicleType"
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.vehicleType ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select vehicle type...</option>
                      <option value="sedan">Sedan/Coupe</option>
                      <option value="suv">SUV/Crossover</option>
                      <option value="truck">Pickup Truck</option>
                      <option value="van">Van/Minivan</option>
                      <option value="luxury">Luxury Vehicle</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.vehicleType && (
                      <p className="text-red-500 text-sm mt-1">{errors.vehicleType}</p>
                    )}
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your vehicle's condition, any special requests, or questions..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Text Reminders Checkbox */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="textReminders"
                    name="textReminders"
                    checked={formData.textReminders}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="textReminders" className="ml-2 text-sm text-gray-700">
                    Send me text reminders about my appointment
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? "Sending..." : "📞 Send My Quote Request"}
                </button>

                {/* Submit Message */}
                {submitMessage && (
                  <div className={`p-4 rounded-lg ${
                    submitMessage.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                  }`}>
                    {submitMessage.text}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">📞 Call for Immediate Service</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">(555) 626-9810</p>
              <p className="text-gray-600 mb-4">
                Monday - Saturday: 8:00 AM - 6:00 PM<br />
                Sunday: 9:00 AM - 4:00 PM
              </p>
              <a
                href="tel:+15556269810"
                className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Call Now
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">✉️ Email Us</h3>
              <p className="text-lg font-semibold text-gray-900 mb-2">info@seastreedetailing.com</p>
              <p className="text-gray-600">We respond to all inquiries within 24 hours</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">📍 Service Area</h3>
              <p className="text-lg font-semibold text-gray-900 mb-2">25 Mile Radius</p>
              <p className="text-gray-600">Mobile detailing service - we bring everything needed to your location</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">⚡ Why Choose Us?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Free on-site quotes
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Same-day service available
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  100% satisfaction guarantee
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Fully insured & licensed
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Eco-friendly products
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
