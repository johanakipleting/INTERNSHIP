import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"

// Mock data - in real app, this would come from the database
const events = [
  {
    id: 1,
    title: "Academic Progress Session",
    description: "A collaborative meeting to assess your child’s performance and future goals.",
    date: "2025-07-15",
    time: "09:00 AM",
    location: "School Hall",
    category: "Academic",
  },
  {
    id: 2,
    title: "Young Scientists' Exhibition",
    description: "Students demonstrate curiosity through exciting projects and experiments.",
    date: "2025-08-20",
    time: "10:00 AM",
    location: "Science Laboratory",
    category: "Competition",
  },
  {
    id: 3,
    title: "Cultural Showcase",
    description: "Honoring the rich traditions and heritage of our diverse student body.",
    date: "2025-07-25",
    time: "02:00 PM",
    location: "School Grounds",
    category: "Cultural",
  },
]

export function EventsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground">Don't miss out on these exciting school events</p>
          </div>
          <Button asChild>
            <Link href="/events">View All Events</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{event.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                </div>
                <CardTitle className="line-clamp-2">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground line-clamp-3">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    {event.location}
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href={`/events/${event.id}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
