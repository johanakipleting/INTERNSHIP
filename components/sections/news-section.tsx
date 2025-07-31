import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"

// Mock data - in real app, this would come from the database
const news = [
  {
    id: 1,
    title: "New Science Laboratory Opens",
    excerpt:
      "Our state-of-the-art science laboratory is now open, providing students with hands-on learning opportunities.",
    image: "/images/LIB.jpg?height=200&width=300",
    date: "2025-08-15",
    category: "Facilities",
  },
  {
    id: 2,
    title: "Annual Sports Day Success",
    excerpt: "Students showcased their athletic talents in our annual sports day celebration.",
    image: "/images/gallery/38.jpg?height=200&width=300",
    date: "2025-08-10",
    category: "Sports",
  },
  {
    id: 3,
    title: "Academic Excellence Awards",
    excerpt: "Celebrating our top-performing students in the recent academic assessments.",
    image: "/images/award.jpg?height=200&width=300",
    date: "2025-07-05",
    category: "Academics",
  },
  {
    id: 4,
    title: "Cultural Showcase Event",
    excerpt: "A vibrant display of our students' diverse cultural heritage through music, dance, and art.",
    image: "/images/gallery/33.jpg?height=200&width=300",
    date: "2025-09-01",
    category: "Culture",
  },
  {
    id: 5,
    title: "Inter-School Football Tournament",
    excerpt: "Our school team reached the finals in the regional football tournament.",
    image: "/images/playground.jpg?height=200&width=300",
    date: "2025-09-10",
    category: "Sports",
  },
]

type NewsSectionProps = {
  filter?: string
}

export function NewsSection({ filter = "All" }: NewsSectionProps) {
  const filteredNews =
    filter === "All"
      ? news
      : news.filter((item) => item.category?.toLowerCase() === filter.toLowerCase())

  return (
    <section className="py-20">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Latest News</h2>
            <p className="text-muted-foreground">Stay updated with the latest happenings at our school</p>
          </div>
          <Button asChild>
            <Link href="/news">View All News</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((article) => (
            <Card key={article.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                </div>
                <CardTitle className="line-clamp-2">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3 mb-4">{article.excerpt}</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/news/${article.id}`}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
