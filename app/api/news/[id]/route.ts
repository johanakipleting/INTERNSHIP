import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import News from "@/models/News"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect()
    const news = await News.findById(params.id).lean()

    if (!news) {
      return NextResponse.json({ error: "News not found" }, { status: 404 })
    }

    return NextResponse.json(news)
  } catch (error) {
    console.error("Error fetching news:", error)
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect()

    const body = await request.json()
    const news = await News.findByIdAndUpdate(params.id, body, { new: true })

    if (!news) {
      return NextResponse.json({ error: "News not found" }, { status: 404 })
    }

    return NextResponse.json(news)
  } catch (error) {
    console.error("Error updating news:", error)
    return NextResponse.json({ error: "Failed to update news" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect()

    const news = await News.findByIdAndDelete(params.id)

    if (!news) {
      return NextResponse.json({ error: "News not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "News deleted successfully" })
  } catch (error) {
    console.error("Error deleting news:", error)
    return NextResponse.json({ error: "Failed to delete news" }, { status: 500 })
  }
}
