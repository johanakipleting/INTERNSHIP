"use client"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, BookOpen, Mail } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-blue-900">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card>
            <CardHeader className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-blue-700" />
              <CardTitle>Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-gray-600">Manage all users and roles.</p>
              <Link href="/admin/user-management" className="text-blue-700 hover:underline font-medium">
                Go to User Management
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center space-x-2">
              <Calendar className="h-6 w-6 text-blue-700" />
              <CardTitle>Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-gray-600">View and manage school events.</p>
              <Link href="/admin/events" className="text-blue-700 hover:underline font-medium">
                Go to Events Management
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-blue-700" />
              <CardTitle>Academics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-gray-600">Manage academic records and classes.</p>
              <Link href="/admin/academics" className="text-blue-700 hover:underline font-medium">
                Go to Academics
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center space-x-2">
              <Mail className="h-6 w-6 text-blue-700" />
              <CardTitle>Contact Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-gray-600">View messages and inquiries.</p>
              <Link href="/admin/contacts" className="text-blue-700 hover:underline font-medium">
                Go to Contacts
              </Link>
            </CardContent>
          </Card>
        </div>
        {/* Add more dashboard widgets or stats here as needed */}
      </div>
    </div>
  )
}