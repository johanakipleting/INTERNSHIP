import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, BookOpen, Heart, Target, Eye } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Christian Values",
      description:
        "We integrate biblical principles into all aspects of education, fostering spiritual growth and moral development.",
    },
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description:
        "We maintain high academic standards while providing personalized attention to each student's learning needs.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "We build strong partnerships with families and the community to support student success.",
    },
    {
      icon: Award,
      title: "Character Development",
      description: "We emphasize integrity, respect, responsibility, and service to others in all our programs.",
    },
  ]

  const staff = [
    {
      name: "Mrs. Sarah Nakamya",
      position: "Head Teacher",
      qualification: "M.Ed in Educational Leadership",
      experience: "15 years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mr. David Ssemakula",
      position: "Deputy Head Teacher",
      qualification: "B.Ed in Primary Education",
      experience: "12 years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mrs. Grace Namukasa",
      position: "Senior Teacher - Mathematics",
      qualification: "B.Sc Mathematics, Dip.Ed",
      experience: "10 years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mr. John Kiwanuka",
      position: "Senior Teacher - Science",
      qualification: "B.Sc Biology, Dip.Ed",
      experience: "8 years",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const achievements = [
    "Top 5 Primary Schools in Luwero District (2023)",
    "100% PLE Pass Rate for 3 consecutive years",
    "Winner - Inter-School Science Fair 2023",
    "Best Christian School Award - Uganda SDA Education (2022)",
    "Excellence in Sports - District Championships 2023",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Bugema Adventist Primary School</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              For over two decades, we have been committed to providing quality Christian education that nurtures the
              whole child - spiritually, academically, physically, and socially.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To provide quality Christian education that develops the whole child intellectually, spiritually,
                  physically, and socially, preparing them to be responsible citizens and faithful servants of God in
                  their communities and beyond.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Eye className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading Christian primary school in Uganda, recognized for academic excellence, character
                  development, and producing graduates who are well-prepared for secondary education and life-long
                  learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do at Bugema Adventist Primary School
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* School History */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our History</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Bugema Adventist Primary School was established in 2001 as part of the Seventh-day Adventist education
                  system in Uganda. Founded with the vision of providing quality Christian education to children in the
                  Luwero district and surrounding areas.
                </p>
                <p>
                  Over the years, we have grown from a small school with 50 students to a thriving institution serving
                  over 400 students from Primary 1 to Primary 7. Our commitment to excellence has remained unwavering
                  throughout our journey.
                </p>
                <p>
                  Today, we are proud to be one of the leading primary schools in the region, with a strong reputation
                  for academic excellence, character development, and holistic education that prepares students for
                  success in secondary school and beyond.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="School History"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">Recognition of our commitment to excellence</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                  <Award className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Experienced educators dedicated to student success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staff.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="rounded-full mx-auto"
                    />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="secondary">{member.qualification}</Badge>
                    <p className="text-sm text-gray-600">{member.experience} experience</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our School Family</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Experience the difference of quality Christian education at Bugema Adventist Primary School
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Visit
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
