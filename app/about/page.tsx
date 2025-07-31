import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart, Users, Award, BookOpen } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "Upholding honesty and moral principles in all our actions and decisions.",
    },
    {
      icon: BookOpen,
      title: "Spiritual Growth",
      description: "Nurturing the spiritual development of every child through Christian teachings.",
    },
    {
      icon: Users,
      title: "Humility",
      description: "Teaching modesty and respect for others while recognizing our dependence on God.",
    },
    {
      icon: Award,
      title: "Hard Work",
      description: "Instilling the value of diligence and perseverance in academic and personal pursuits.",
    },
    {
      icon: Heart,
      title: "Love",
      description: "Demonstrating Christ-like love and compassion in all our relationships.",
    },
    {
      icon: Users,
      title: "Truthfulness",
      description: "Promoting honesty and transparency in all communications and interactions.",
    },
  ]

  const achievements = [
    "Consistently high performance in national examinations",
    "Award-winning cultural dance troupe",
    "Active participation in inter-school sports competitions",
    "Modern ICT facilities and digital literacy programs",
    "Strong alumni network contributing to society",
    "Recognized for excellence in holistic education",
  ]

  return (
    <>
      {/* Header with green background */}
      <div className="bg-green-700">
        <Header />
      </div>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4 bg-orange-600 hover:bg-orange-700">About Our School</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story & Mission</h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Discover the rich history and unwavering commitment to excellence that defines Bugema Adventist Primary
                School.
              </p>
            </div>
          </div>
        </section>

        {/* School History */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Heritage</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Bugema Adventist Primary School has been a beacon of quality Christian education for decades. Founded on
                  the principle that "The Fear of God is the Beginning of Wisdom," we have consistently provided holistic
                  education that nurtures the mind, body, and spirit.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our school has grown from humble beginnings to become one of the most respected primary institutions in
                  the region, maintaining our commitment to academic excellence while staying true to our Christian
                  values.
                </p>
                <p className="text-lg text-gray-600">
                  Today, we continue to evolve and adapt to modern educational needs while preserving the timeless values
                  that have made us who we are.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/images/41.jpg"
                  alt="Bugema Adventist Primary School Buildings"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-green-700" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-lg text-gray-600">
                    Train the child spiritually, mentally, and socially, for this world and the world to come.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Eye className="h-8 w-8 text-orange-700" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-lg text-gray-600">
                    To provide education that is wholistic in nature to the children in order to have good citizen as well
                    as those who have been transformed towards God's kingdom.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      {value.icon && <value.icon className="h-6 w-6 text-green-700" />}
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

        {/* Achievements */}
        <section className="py-16 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Achievements</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We take pride in our accomplishments and the success of our students and alumni who continue to make us
                  proud.
                </p>
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/sport.jpg"
                  alt="School Playground"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md"
                />
                <Image
                  src="/images/2.jpg"
                  alt="School Library"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Footer with green background */}
      <div className="bg-pink-700">
        <Footer />
      </div>
    </>
  )
}