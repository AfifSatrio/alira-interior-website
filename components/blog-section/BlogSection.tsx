import BlogSectionClient from "./BlogSectionClient"
import prisma from "@/lib/prisma"

const BlogSection = async () => {
  const blogs = await prisma.blog.findMany({
    where: { featured: true },
    orderBy: { publishedAt: 'desc' },
    take: 3
  })

  return <BlogSectionClient blogs={blogs} />
}

export default BlogSection