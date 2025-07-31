import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Newspaper, Calendar, Users, Eye } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total News Articles",
      value: "24",
      description: "3 published this month",
      icon: Newspaper,
      color: "text-blue-600",
    },
    {
      title: "Upcoming Events",
      value: "8",
      description: "2 this week",
      icon: Calendar,
      color: "text-green-600",
    },
    {
      title: "Site Visitors",
      value: "1,234",
      description: "+12% from last month",
      icon: Eye,
      color: "text-purple-600",
    },
    {
      title: "Admin Users",
      value: "3",
      description: "All active",
      icon: Users,
      color: "text-orange-600",
    },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome to the Bugema Adventist Primary School admin panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent News</CardTitle>
            <CardDescription>Latest published articles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New Science Laboratory Opens</p>
                  <p className="text-xs text-gray-500">Published 2 days ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Sports Day 2024 Success</p>
                  <p className="text-xs text-gray-500">Published 1 week ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Events scheduled for this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Parent-Teacher Conference</p>
                  <p className="text-xs text-gray-500">February 15, 2024</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Science Fair</p>
                  <p className="text-xs text-gray-500">February 20, 2024</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
