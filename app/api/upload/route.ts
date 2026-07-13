import { NextResponse } from "next/server"
import { writeFile } from "fs/promises"
import { join } from "path"
import { auth } from "@/auth"

export async function POST(request: Request) {
  const session = await auth()
  
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const data = await request.formData()
    const file: File | null = data.get("file") as unknown as File

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Generate unique filename
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9)
    const originalName = file.name.replace(/[^a-zA-Z0-9.-]/g, "")
    const filename = `${uniqueSuffix}-${originalName}`
    
    // Save to public/uploads
    const uploadDir = join(process.cwd(), "public", "uploads")
    const filePath = join(uploadDir, filename)
    
    await writeFile(filePath, buffer)
    
    // Return relative URL
    return NextResponse.json({ url: `/uploads/${filename}` })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Upload failed" }, { status: 500 })
  }
}
