"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash2, Mail, Eye } from "lucide-react"

type ContactRequest = {
  id: number
  name: string
  email: string
  message: string
  date: string
  read: boolean
}

const initialContacts: ContactRequest[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    message: "I would like to know more about admissions.",
    date: "2025-06-01",
    read: false,
  },
  {
    id: 2,
    name: "Ben Okello",
    email: "ben.okello@example.com",
    message: "Can I schedule a campus tour?",
    date: "2025-06-02",
    read: true,
  },
  {
    id: 3,
    name: "Grace Namatovu",
    email: "grace.n@example.com",
    message: "What are the school fees for Primary 5?",
    date: "2025-06-03",
    read: false,
  },
]

export default function ContactsManagement() {
  const [contacts, setContacts] = useState<ContactRequest[]>(initialContacts)

  const handleDelete = (id: number) => {
    setContacts(contacts.filter(c => c.id !== id))
  }

  const handleMarkRead = (id: number) => {
    setContacts(contacts.map(c => c.id === id ? { ...c, read: true } : c))
  }

  return (
    <div className="max-w-4xl mx-auto py-12">
      <Card>
        <CardHeader>
          <CardTitle>Contact Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left">Name</th>
                <th className="py-2 text-left">Email</th>
                <th className="py-2 text-left">Message</th>
                <th className="py-2 text-left">Date</th>
                <th className="py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(contact => (
                <tr key={contact.id} className={`border-b ${contact.read ? "bg-blue-50" : ""}`}>
                  <td className="py-2">{contact.name}</td>
                  <td className="py-2">{contact.email}</td>
                  <td className="py-2">{contact.message}</td>
                  <td className="py-2">{contact.date}</td>
                  <td className="py-2 text-right space-x-2">
                    {!contact.read && (
                      <Button size="icon" variant="ghost" onClick={() => handleMarkRead(contact.id)} title="Mark as Read">
                        <Eye className="w-4 h-4 text-blue-700" />
                      </Button>
                    )}
                    <Button size="icon" variant="ghost" onClick={() => handleDelete(contact.id)} title="Delete">
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {contacts.length === 0 && (
            <div className="text-center text-gray-500 py-8">No contact requests found.</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}