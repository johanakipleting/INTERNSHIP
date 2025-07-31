import { type NextRequest, NextResponse } from "next/server"
import { UTApi } from "uploadthing/server"

const utapi = new UTApi()

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    const response = await utapi.uploadFiles(file)

    if (response.error) {
      return NextResponse.json({ error: "Upload failed" }, { status: 500 })
    }

    return NextResponse.json({
      url: response.data.url,
      key: response.data.key,
    })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Upload failed" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const key = searchParams.get("key")

    if (!key) {
      return NextResponse.json({ error: "No file key provided" }, { status: 400 })
    }

    await utapi.deleteFiles(key)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Delete error:", error)
    return NextResponse.json({ error: "Delete failed" }, { status: 500 })
  }
}
