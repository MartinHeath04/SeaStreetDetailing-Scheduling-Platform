"use client"

import PillNav from "../PillNav"

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
]

export default function Header() {
  return (
    <header>
      <PillNav
        items={navigation}
        baseColor="#1e293b"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#1e293b"
        ease="power2.easeOut"
      />
    </header>
  )
}