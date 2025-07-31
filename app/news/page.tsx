"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { NewsSection } from "@/components/sections/news-section"
import { EventsSection } from "@/components/sections/events-section"
import { ContactSection } from "@/components/sections/contact-section"

const categories = ["All", "Events", "Academics", "Culture", "Facilities", "Sports"]

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with green background */}
      <div className="bg-green-700">
        <Header />
      </div>
      {/* Main/body with light blue background */}
      <main className="flex-1 bg-orange-50">
        <HeroSection />
        <AboutSection />

        {/* News Filter Bar */}
        <div className="flex justify-center gap-4 py-6">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded font-semibold transition-colors ${
                selectedCategory === cat
                  ? "bg-blue-700 text-white"
                  : "bg-white text-blue-700 hover:bg-blue-100"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Section with filter */}
        <NewsSection filter={selectedCategory} />

        <EventsSection />
        <ContactSection />
      </main>
      {/* Footer with purple background */}
      <div className="bg-purple-900">
        <Footer />
      </div>
    </div>
  )
}