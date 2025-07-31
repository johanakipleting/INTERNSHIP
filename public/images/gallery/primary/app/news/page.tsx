import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calendar, User, Search, ArrowRight } from "lucide-react"

export default function NewsPage() {
  // Mock data - in real app, this would come from your database
  const featuredNews = {
    id: 1,
    title: "New Science Laboratory Opens at Bugema Adventist Primary School",
    excerpt:
      "We are excited to announce the opening of our state-of-the-art science laboratory, equipped with modern equipment and safety features to enhance hands-on learning experiences for our students.",
    content:
      "The new laboratory features modern microscopes, chemical storage systems, and interactive learning stations...",
    image: "/placeholder.svg?height=400&width=800",
    author: "School Administration",
    publishedAt: "2024-01-15",
    category: "Facilities",
  }

  const newsArticles = [
    {
      id: 2,
      title: "Annual Sports Day 2024 - A Celebration of Athletic Excellence",
      excerpt:
        "Our annual sports day brought together students, parents, and the community in a spectacular celebration of athletic talent and school spirit.",
      image: "/placeholder.svg?height=200&width=300",
      author: "Sports Department",
      publishedAt: "2024-01-10",
      category: "Sports",
    },
    {
      id: 3,
      title: "Outstanding PLE Results - 100% Pass Rate Achieved",
      excerpt:
        "We are proud to announce that our Primary 7 students achieved a 100% pass rate in the Primary Leaving Examinations, with 85% scoring in Division 1.",
      image: "/placeholder.svg?height=200&width=300",
      author: "Academic Office",
      publishedAt: "2024-01-05",
      category: "Academic",
    },
    {
      id: 4,
      title: "New Library Wing Opens with Over 5,000 Books",
      excerpt:
        "The expansion of our library facility now provides students with access to over 5,000 books, digital resources, and quiet study spaces.",
      image: "/placeholder.svg?height=200&width=300",
      author: "Library Department",
      publishedAt: "2023-12-20",
      category: "Facilities",
    },
    {
      id: 5,
      title: "Christmas Concert 2023 - A Night of Musical Excellence",
      excerpt:
        "Our students showcased their musical talents in a beautiful Christmas concert that brought joy to families and the community.",
      image: "/placeholder.svg?height=200&width=300",
      author: "Music Department",
      publishedAt: "2023-12-15",
      category: "Events",
    },
    {
      id: 6,
      title: "Environmental Club Plants 200 Trees on School Grounds",
      excerpt:
        "Our Environmental Club, in partnership with local organizations, planted 200 indigenous trees to promote environmental conservation.",
      image: "/placeholder.svg?height=200&width=300",
      author: "Environmental Club",
      publishedAt: "2023-12-10",
      category: "Environment",
    },
    {
      id: 7,
      title: "Parent-Teacher Conference Strengthens School-Home Partnership",
      excerpt:
        "The recent parent-teacher conference provided valuable opportunities for parents and teachers to discuss student progress and development.",
      image: "/placeholder.svg?height=200&width=300",
      author: "Academic Office",
      publishedAt: "2023-12-05",
      category: "Academic",
    },
  ]

  const categories = ["All", "Academic", "Sports", "Facilities", "Events", "Environment"]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">School News & Updates</h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Stay informed about the latest happenings, achievements, and events at Bugema Adventist Primary School
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search news articles..." className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button key={category} variant="outline" size="sm">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured News</h2>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredNews.image || "/placeholder.svg"}
                  alt={featuredNews.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 lg:p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge>{featuredNews.category}</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(featuredNews.publishedAt).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    {featuredNews.author}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredNews.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredNews.excerpt}</p>
                <Link href={`/news/${featuredNews.id}`}>
                  <Button className="group">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-48">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3 mb-4">{article.excerpt}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </div>
                    <Link href={`/news/${article.id}`}>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news and updates directly in your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder="Enter your email address" className="bg-white text-gray-900 border-0" />
            <Button className="bg-white text-blue-600 hover:bg-gray-100">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
