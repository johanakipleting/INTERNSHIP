import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Event from "@/lib/models/Event"

export async function GET(request: NextRequest) {
  try {
    await dbConnect()

    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const status = searchParams.get("status")
    const category = searchParams.get("category")
    const upcoming = searchParams.get("upcoming")

    const query: any = {}
    if (status) query.status = status
    if (category) query.category = category
    if (upcoming === "true") {
      query.startDate = { $gte: new Date() }
    }

    const skip = (page - 1) * limit

    const events = await Event.find(query)
      .populate("author", "name email")
      .sort({ startDate: 1 })
      .skip(skip)
      .limit(limit)

    const total = await Event.countDocuments(query)

    return NextResponse.json({
      events,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching events:", error)
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect()

    const body = await request.json()
    const {
      title,
      description,
      category,
      startDate,
      endDate,
      startTime,
      endTime,
      location,
      status,
      featuredImage,
      maxAttendees,
      registrationRequired,
      author,
    } = body

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")

    const event = new Event({
      title,
      slug,
      description,
      category,
      startDate,
      endDate,
      startTime,
      endTime,
      location,
      status,
      featuredImage,
      maxAttendees,
      registrationRequired,
      author,
    })

    await event.save()
    await event.populate("author", "name email")

    return NextResponse.json(event, { status: 201 })
  } catch (error) {
    console.error("Error creating event:", error)
    return NextResponse.json({ error: "Failed to create event" }, { status: 500 })
  }
}
