"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const heroImages = [
  "/images/gate.jpg",
  "/images/LIB.jpg", 
  "/images/gallery/e5.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/20.jpg",
  // Add more image paths as needed
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Moving background images */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt="Bugema Adventist Primary School"
            fill
            className={`object-cover transition-opacity duration-1000 ${idx === current ? "opacity-100" : "opacity-0"}`}
            style={{ zIndex: 0 }}
            priority={idx === 0}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20" />
      </div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
         <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white">
  The fear of God <span className="text-white">is the beginning of wisdom</span>
</h1>
<p className="text-xl max-w-lg text-yellow-100">
  Train the child spiritually, mentally, and socially for this world and world to come.
</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/admissions">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          {/* Optionally, you can keep a static image or remove this column */}
          <div />
        </div>
      </div>
    </section>
  )
}