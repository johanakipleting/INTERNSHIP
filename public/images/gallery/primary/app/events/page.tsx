import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, Filter } from "lucide-react"

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Parent-Teacher Conference",
      description:
        "Meet with your child's teachers to discuss academic progress, behavior, and development goals for the term.",
      date: "2024-02-15",
      time: "9:00 AM - 4:00 PM",
      location: "School Main Hall",
      category: "Academic",
      image: "/placeholder.svg?height=200&width=300",
      featured: true,
    },
    {
      id: 2,
      title: "Science Fair 2024",
      description:
        "Students will showcase their innovative science projects and experiments in this annual competition.",
      date: "2024-02-20",
      time: "10:00 AM - 3:00 PM",
      location: "School Compound",
      category: "Academic",
      image: "/placeholder.svg?height=200&width=300",
      featured: true,
    },
    {
      id: 3,
      title: "Inter-House Sports Competition",
      description: "Annual sports competition between school houses featuring various athletic events and team sports.",
      date: "2024-02-25",
      time: "8:00 AM - 5:00 PM",
      location: "School Sports Ground",
      category: "Sports",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      id: 4,
      title: "Cultural Day Celebration",
      description: "Celebrate Uganda's rich cultural heritage with traditional dances, music, and cultural displays.",
      date: "2024-03-05",
      time: "2:00 PM - 6:00 PM",
      location: "School Assembly Hall",
      category: "Cultural",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      id: 5,
      title: "Career Guidance Workshop",
      description:
        "Interactive workshop to help students explore different career paths and educational opportunities.",
      date: "2024-03-10",
      time: "1:00 PM - 4:00 PM",
      location: "Computer Laboratory",
      category: "Educational",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      id: 6,
      title: "End of Term Awards Ceremony",
      description: "Recognition ceremony to celebrate student achievements and academic excellence for the term.",
      date: "2024-03-15",
      time: "10:00 AM - 12:00 PM",
      location: "School Chapel",
      category: "Academic",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
  ]

  const pastEvents = [
    {
      id: 7,
      title: "Christmas Concert 2023",
      description: "Beautiful musical performances by our students celebrating the Christmas season.",
      date: "2023-12-15",
      time: "6:00 PM - 8:00 PM",
      location: "School Chapel",
      category: "Cultural",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 8,
      title: "Annual Sports Day 2023",
      description: "Exciting day of athletic competitions and team spirit among students and families.",
      date: "2023-11-20",
      time: "8:00 AM - 5:00 PM",
      location: "School Sports Ground",
      category: "Sports",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const categories = ["All", "Academic", "Sports", "Cultural", "Educational", "Community"]

  const getCategoryColor = (category: string) => {
    const colors = {
      Academic: "bg-blue-100 text-blue-800",
      Sports: "bg-green-100 text-green-800",
      Cultural: "bg-purple-100 text-purple-800",
      Educational: "bg-orange-100 text-orange-800",
      Community: "bg-pink-100 text-pink-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">School Events & Activities</h1>
            <p className="text-xl text-indigo-100 leading-relaxed">
              Join us for exciting events, educational activities, and community celebrations throughout the academic
              year
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Filter Events</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button key={category} variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-1" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Upcoming Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {upcomingEvents
              .filter((event) => event.featured)
              .map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                    <Button className="w-full">
                      <Users className="h-4 w-4 mr-2" />
                      Register for Event
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Upcoming Events */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow group">
                <div className="relative h-40">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge className={getCategoryColor(event.category)} variant="secondary">
                      {event.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-2" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <Link href={`/events/${event.id}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <div className="flex">
                  <div className="relative w-32 h-24 flex-shrink-0">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover rounded-l-lg"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(event.category)} variant="secondary">
                        {event.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{event.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar CTA */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Miss an Event</h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
            Subscribe to our event calendar and get notifications about upcoming school activities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
              <Calendar className="h-5 w-5 mr-2" />
              Subscribe to Calendar
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-indigo-600"
            >
              Download Event Schedule
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
