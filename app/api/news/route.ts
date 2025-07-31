import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import News from "@/lib/models/News"

export async function GET(request: NextRequest) {
  try {
    await dbConnect()

    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const status = searchParams.get("status")
    const category = searchParams.get("category")

    const query: any = {}
    if (status) query.status = status
    if (category) query.category = category

    const skip = (page - 1) * limit

    const news = await News.find(query).populate("author", "name email").sort({ createdAt: -1 }).skip(skip).limit(limit)

    const total = await News.countDocuments(query)

    return NextResponse.json({
      news,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching news:", error)
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect()

    const body = await request.json()
    const { title, excerpt, content, category, status, featuredImage, author } = body

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")

    const news = new News({
      title,
      slug,
      excerpt,
      content,
      category,
      status,
      featuredImage,
      author,
    })

    await news.save()
    await news.populate("author", "name email")

    return NextResponse.json(news, { status: 201 })
  } catch (error) {
    console.error("Error creating news:", error)
    return NextResponse.json({ error: "Failed to create news" }, { status: 500 })
  }
}
