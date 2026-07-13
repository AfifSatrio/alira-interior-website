import BlogContentClient from "./BlogContentClient"
import prisma from "@/lib/prisma"

const BlogContent = async () => {
  const blogs = await prisma.blog.findMany({
    orderBy: { publishedAt: 'desc' }
  })

  return <BlogContentClient blogs={blogs} />
}

export default BlogContent