import BlogContentClient from "./BlogContentClient"
import { sanityClient } from "@/lib/sanity.client"
import { blogquery } from "@/lib/queries"

const BlogContent = async () => {
  const blogs = await sanityClient.fetch(blogquery)

  return <BlogContentClient blogs={blogs} />
}

export default BlogContent