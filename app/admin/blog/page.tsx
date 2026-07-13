import prisma from "@/lib/prisma"
import BlogManager from "./BlogManager"

export default async function BlogPage() {
  const blogs = await prisma.blog.findMany({
    orderBy: { publishedAt: 'desc' }
  })

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Blog Management</h1>
      <BlogManager blogs={blogs} />
    </div>
  )
}
