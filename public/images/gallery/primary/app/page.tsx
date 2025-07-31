import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Award, Heart, Calendar, Newspaper } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: BookOpen,
      title: "Quality Education",
      description: "Comprehensive curriculum that meets national standards while incorporating Christian values.",
    },
    {
      icon: Users,
      title: "Experienced Teachers",
      description: "Dedicated and qualified educators committed to nurturing every child's potential.",
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Consistent outstanding performance in national examinations and competitions.",
    },
    {
      icon: Heart,
      title: "Christian Values",
      description: "Character development rooted in Seventh-day Adventist principles and values.",
    },
  ]

  const recentNews = [
    {
      id: 1,
      title: "New Science Laboratory Opens",
      excerpt: "State-of-the-art science laboratory now available for hands-on learning experiences.",
      date: "2024-01-15",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Sports Day 2024 Success",
      excerpt: "Annual sports day brings together students, parents, and community in celebration.",
      date: "2024-01-10",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Parent-Teacher Conference",
      date: "2024-02-15",
      time: "9:00 AM",
    },
    {
      id: 2,
      title: "Science Fair",
      date: "2024-02-20",
      time: "10:00 AM",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Bugema Adventist Primary School</h1>
              <p className="text-xl mb-8 text-blue-100">
                Excellence in Christian Education - Nurturing minds, building character, and preparing leaders for
                tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Learn More About Us
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Apply Now
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Bugema Adventist Primary School"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Bugema Adventist Primary School?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a holistic education that develops the whole child in a nurturing Christian environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News and Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Recent News */}
            <div>
              <div className="flex items-center mb-8">
                <Newspaper className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
              </div>
              <div className="space-y-6">
                {recentNews.map((article) => (
                  <Card key={article.id} className="hover:shadow-md transition-shadow">
                    <div className="flex">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={120}
                        height={80}
                        className="rounded-l-lg object-cover"
                      />
                      <CardContent className="flex-1 p-4">
                        <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{article.excerpt}</p>
                        <p className="text-blue-600 text-sm">{new Date(article.date).toLocaleDateString()}</p>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/news">
                  <Button variant="outline">View All News</Button>
                </Link>
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <div className="flex items-center mb-8">
                <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
              </div>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <Card key={event.id}>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>
                          {new Date(event.date).toLocaleDateString()} at {event.time}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/events">
                  <Button variant="outline">View All Events</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our School Family?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Give your child the gift of quality Christian education at Bugema Adventist Primary School.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Start Application Process
          </Button>
        </div>
      </section>
    </div>
  )
}
