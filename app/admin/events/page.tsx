"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Pencil, Trash2, Plus } from "lucide-react"

type Event = {
  id: number
  title: string
  date: string
  location: string
}

const initialEvents: Event[] = [
  { id: 1, title: "Annual Sports Day", date: "2025-03-15", location: "School Grounds" },
  { id: 2, title: "Parents Meeting", date: "2025-04-10", location: "Main Hall" },
  { id: 3, title: "Science Fair", date: "2025-05-05", location: "Science Block" },
]

export default function EventsManagement() {
  const [events, setEvents] = useState<Event[]>(initialEvents)
  const [showAdd, setShowAdd] = useState(false)
  const [newEvent, setNewEvent] = useState({ title: "", date: "", location: "" })

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.location) return
    setEvents([
      ...events,
      { id: Date.now(), ...newEvent }
    ])
    setNewEvent({ title: "", date: "", location: "" })
    setShowAdd(false)
  }

  const handleDelete = (id: number) => {
    setEvents(events.filter(e => e.id !== id))
  }

  return (
    <div className="max-w-4xl mx-auto py-12">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Events Management</CardTitle>
          <Button onClick={() => setShowAdd(true)} className="bg-blue-700 text-white hover:bg-blue-800">
            <Plus className="w-4 h-4 mr-2" /> Add Event
          </Button>
        </CardHeader>
        <CardContent>
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left">Title</th>
                <th className="py-2 text-left">Date</th>
                <th className="py-2 text-left">Location</th>
                <th className="py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <tr key={event.id} className="border-b hover:bg-blue-50">
                  <td className="py-2">{event.title}</td>
                  <td className="py-2">{event.date}</td>
                  <td className="py-2">{event.location}</td>
                  <td className="py-2 text-right space-x-2">
                    <Button size="icon" variant="ghost">
                      <Pencil className="w-4 h-4 text-blue-700" />
                    </Button>
                    <Button size="icon" variant="ghost" onClick={() => handleDelete(event.id)}>
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Add Event Modal */}
          {showAdd && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg">
                <h2 className="text-xl font-bold mb-4">Add New Event</h2>
                <div className="space-y-4">
                  <Input
                    placeholder="Title"
                    value={newEvent.title}
                    onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
                  />
                  <Input
                    type="date"
                    placeholder="Date"
                    value={newEvent.date}
                    onChange={e => setNewEvent({ ...newEvent, date: e.target.value })}
                  />
                  <Input
                    placeholder="Location"
                    value={newEvent.location}
                    onChange={e => setNewEvent({ ...newEvent, location: e.target.value })}
                  />
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setShowAdd(false)}>Cancel</Button>
                    <Button className="bg-blue-700 text-white hover:bg-blue-800" onClick={handleAddEvent}>Add</Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}