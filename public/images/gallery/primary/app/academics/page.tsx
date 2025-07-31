import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calculator, Globe, Beaker, Palette, Music, Trophy } from "lucide-react"

export default function AcademicsPage() {
  const subjects = [
    {
      icon: BookOpen,
      name: "English Language",
      description: "Comprehensive language skills development including reading, writing, speaking, and listening.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Calculator,
      name: "Mathematics",
      description: "Problem-solving skills and mathematical concepts from basic arithmetic to advanced topics.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Beaker,
      name: "Science",
      description: "Hands-on exploration of natural phenomena and scientific principles.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Globe,
      name: "Social Studies",
      description: "Understanding of society, geography, history, and civic responsibilities.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Palette,
      name: "Creative Arts",
      description: "Visual arts, crafts, and creative expression to develop artistic talents.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Music,
      name: "Music & Dance",
      description: "Musical education and traditional dance to preserve cultural heritage.",
      color: "bg-indigo-100 text-indigo-600",
    },
  ]

  const programs = [
    {
      title: "Primary 1-3 (Lower Primary)",
      description: "Foundation years focusing on basic literacy, numeracy, and social skills development.",
      features: ["Play-based learning", "Phonics instruction", "Basic numeracy", "Social skills development"],
      ageRange: "6-9 years",
    },
    {
      title: "Primary 4-7 (Upper Primary)",
      description: "Advanced learning preparing students for Primary Leaving Examinations (PLE).",
      features: ["Subject specialization", "Critical thinking", "PLE preparation", "Leadership development"],
      ageRange: "10-13 years",
    },
  ]

  const facilities = [
    {
      name: "Modern Classrooms",
      description: "Well-ventilated classrooms equipped with modern teaching aids and comfortable seating.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Science Laboratory",
      description: "Fully equipped laboratory for hands-on science experiments and practical learning.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Computer Lab",
      description: "Modern computers with internet access for digital literacy and research skills.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Library",
      description: "Extensive collection of books, reference materials, and quiet study spaces.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Sports Facilities",
      description: "Playground, sports fields, and equipment for physical education and recreation.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Chapel",
      description: "Dedicated space for worship, spiritual development, and school assemblies.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const achievements = [
    {
      year: "2023",
      achievement: "100% PLE Pass Rate",
      description: "All students successfully completed Primary Leaving Examinations",
    },
    {
      year: "2023",
      achievement: "District Science Fair Winners",
      description: "First place in inter-school science competition",
    },
    {
      year: "2022",
      achievement: "Best Performing School",
      description: "Recognized by Ministry of Education for academic excellence",
    },
    {
      year: "2022",
      achievement: "Sports Champions",
      description: "Winners of district primary schools sports championship",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Excellence</h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Our comprehensive curriculum combines academic rigor with Christian values, preparing students for success
              in secondary education and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Curriculum</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Following the Uganda National Curriculum with enhanced Christian education components
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${subject.color}`}>
                    <subject.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{subject.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{subject.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
            <p className="text-xl text-gray-600">Structured learning pathways for different age groups</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <Badge variant="secondary">{program.ageRange}</Badge>
                  </div>
                  <CardDescription className="text-gray-600">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* School Facilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Learning Facilities</h2>
            <p className="text-xl text-gray-600">Modern facilities designed to enhance the learning experience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={facility.image || "/placeholder.svg"} alt={facility.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{facility.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{facility.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic Calendar</h2>
            <p className="text-xl text-gray-600">Important dates for the academic year</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-blue-600">Term 1</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold">February - May</p>
                  <p className="text-sm text-gray-600 mt-2">First term of the academic year</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-green-600">Term 2</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold">June - August</p>
                  <p className="text-sm text-gray-600 mt-2">Second term with mid-year assessments</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-purple-600">Term 3</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold">September - December</p>
                  <p className="text-sm text-gray-600 mt-2">Final term with end-of-year examinations</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Achievements</h2>
            <p className="text-xl text-gray-600">Celebrating our students' and school's success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-l-4 border-l-yellow-500">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Trophy className="h-6 w-6 text-yellow-600" />
                    <div>
                      <CardTitle className="text-lg">{achievement.achievement}</CardTitle>
                      <Badge variant="outline">{achievement.year}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{achievement.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Information */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Enroll?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join our academic community and give your child the foundation for lifelong success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Download Admission Form
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Admissions
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
