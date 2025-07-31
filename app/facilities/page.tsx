"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, BookOpen, Computer, Gamepad2, Users, Utensils, Bus, Heart } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function FacilitiesPage() {
  const [showTourModal, setShowTourModal] = useState(false)

  const facilities = [
    {
      icon: Building,
      title: "Modern Classrooms",
      description: "Spacious, well-ventilated classrooms equipped with modern teaching aids and comfortable furniture.",
      image: "/images/school.jpg",
    },
    {
      icon: BookOpen,
      title: "Well-Stocked Library",
      description: "Extensive collection of books, reference materials, and digital resources for all age groups.",
      image: "/images/LIB.jpg",
    },
    {
      icon: Computer,
      title: "ICT Laboratory",
      description: "State-of-the-art computer lab with modern equipment for digital literacy and technology education.",
      image: "/images/ict.jpg",
    },
    {
      icon: Gamepad2,
      title: "Playground & Sports",
      description:
        "Safe and fun playground equipment, sports fields, and recreational facilities for physical development.",
      image: "/images/gallery/38.jpg",
    },
  ]

  const additionalFacilities = [
    {
      icon: Users,
      title: "Assembly Hall",
      description: "Large multipurpose hall for assemblies, cultural events, and community gatherings.",
    },
    {
      icon: Utensils,
      title: "Dining Facilities",
      description: "Clean and hygienic dining area serving nutritious meals for students.",
    },
    {
      icon: Bus,
      title: "Transportation",
      description: "Safe and reliable school transport services for students from various locations.",
    },
    {
      icon: Heart,
      title: "Health Center",
      description: "On-site medical facility with qualified staff for student health and wellness.",
    },
  ]

  const safetyFeatures = [
    "24/7 security personnel and surveillance",
    "Secure perimeter fencing and controlled access",
    "Fire safety equipment and emergency procedures",
    "First aid stations throughout the campus",
    "Safe drinking water and sanitation facilities",
    "Regular safety drills and training",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with light blue background */}
      <div className="bg-blue-100">
        <Header />
      </div>
      <div className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4 bg-orange-600 hover:bg-orange-700">World-Class Facilities</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our School Facilities</h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Modern infrastructure and well-equipped facilities that create an optimal learning environment for our
                students.
              </p>
            </div>
          </div>
        </section>

        {/* Main Facilities */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Learning Facilities</h2>
              <p className="text-xl text-gray-600">Essential spaces designed to enhance the learning experience</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {facilities.map((facility, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64">
                    <Image
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <facility.icon className="h-5 w-5 text-purple-700" />
                      </div>
                      <CardTitle className="text-xl">{facility.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{facility.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Facilities */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Additional Amenities</h2>
              <p className="text-xl text-gray-600">Supporting facilities that enhance the overall school experience</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalFacilities.map((facility, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <facility.icon className="h-6 w-6 text-purple-700" />
                    </div>
                    <CardTitle className="text-lg">{facility.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-sm">{facility.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sports & Recreation */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sports & Recreation</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Physical activity is an integral part of our holistic education approach. Our sports facilities and
                  playground equipment provide students with opportunities for physical development, teamwork, and healthy
                  recreation.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Football field and sports grounds</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Modern playground equipment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Indoor games and activities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Organized sports competitions</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/gallery/e2.jpg"
                  alt="Sports Team"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md"
                />
                <Image
                  src="/images/playground.jpg"
                  alt="Playground"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Safety & Security */}
        <section className="py-16 bg-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Safety & Security</h2>
              <p className="text-xl text-gray-600">Your child's safety is our top priority</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Campus Tour CTA */}
        <section className="py-16 bg-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Our Facilities</h2>
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Schedule a visit to see our world-class facilities firsthand and discover why Bugema Adventist Primary
              School is the right choice for your child's education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => setShowTourModal(true)}
              >
                Schedule a Tour
              </button>
              <Link
                href="/contact"
                className="border border-white text-white hover:bg-white hover:text-purple-700 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
          {/* Modal for Schedule a Tour */}
          {showTourModal && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg text-gray-900">
                <h2 className="text-2xl font-bold mb-4">Schedule a Tour</h2>
                <p className="mb-4">
                  Please call <span className="font-semibold">+256 786 934 813</span> or email{" "}
                  <span className="font-semibold">bugemaadvprimary@gmail.com</span> to arrange your campus tour.
                </p>
                <button
                  className="mt-4 bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded"
                  onClick={() => setShowTourModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
      {/* Footer with pink background */}
      <div className="bg-pink-600">
        <Footer />
      </div>
    </div>
  )
}