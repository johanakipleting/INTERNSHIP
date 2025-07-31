"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react"

export default function NewsManagement() {
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data - in real app, this would come from your database
  const newsArticles = [
    {
      id: 1,
      title: "New Science Laboratory Opens",
      excerpt: "State-of-the-art science laboratory now available for hands-on learning experiences.",
      published: true,
      createdAt: "2024-01-15",
      author: "Admin",
    },
    {
      id: 2,
      title: "Sports Day 2024 Success",
      excerpt: "Annual sports day brings together students, parents, and community in celebration.",
      published: true,
      createdAt: "2024-01-10",
      author: "Admin",
    },
    {
      id: 3,
      title: "Upcoming Parent Meeting",
      excerpt: "Important meeting scheduled to discuss academic progress and school policies.",
      published: false,
      createdAt: "2024-01-08",
      author: "Admin",
    },
  ]

  const filteredArticles = newsArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">News Management</h1>
          <p className="text-gray-600">Create and manage news articles</p>
        </div>
        <Link href="/admin/news/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New Article
          </Button>
        </Link>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Articles List */}
      <div className="space-y-4">
        {filteredArticles.map((article) => (
          <Card key={article.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                  <CardDescription className="mt-2">{article.excerpt}</CardDescription>
                  <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                    <span>By {article.author}</span>
                    <span>•</span>
                    <span>{new Date(article.createdAt).toLocaleDateString()}</span>
                    <Badge variant={article.published ? "default" : "secondary"}>
                      {article.published ? "Published" : "Draft"}
                    </Badge>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No articles found matching your search.</p>
        </div>
      )}
    </div>
  )
}
