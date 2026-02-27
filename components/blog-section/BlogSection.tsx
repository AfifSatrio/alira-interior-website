import BlogSectionClient from "./BlogSectionClient"
import { sanityClient } from "@/lib/sanity.client"
import { featuredBlogquery } from "@/lib/queries"

const BlogSection = async () => {
  const blogs = await sanityClient.fetch(featuredBlogquery)

  return <BlogSectionClient blogs={blogs} />
}

export default BlogSection