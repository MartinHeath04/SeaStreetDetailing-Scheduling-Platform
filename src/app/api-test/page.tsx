"use client"

import { useEffect, useState } from "react"

export default function APITestPage() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="p-8">Loading...</div>

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">API Test - /api/services</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Services</h2>
        <div className="space-y-4">
          {data?.services?.map((service: any) => (
            <div key={service.id} className="border p-4 rounded">
              <h3 className="font-bold">{service.name}</h3>
              <p>Price: {service.price.formatted}</p>
              <p>Duration: {service.duration} minutes</p>
              <p className="text-xs text-gray-500">ID: {service.id}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Add-Ons</h2>
        <div className="space-y-4">
          {data?.addOns?.map((addon: any) => (
            <div key={addon.id} className="border p-4 rounded">
              <h3 className="font-bold">{addon.name}</h3>
              <p>Price: {addon.price.formatted}</p>
              <p>Duration: +{addon.duration} minutes</p>
              <p className="text-xs text-gray-500">ID: {addon.id}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h3 className="font-bold mb-2">Raw JSON Response:</h3>
        <pre className="text-xs overflow-auto">{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  )
}
