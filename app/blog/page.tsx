import type { Metadata } from "next"

import BlogContent from "@/components/blogpage/BlogContent"
import BlogPageHeader from "@/components/blogpage/BlogPageHeader"

export const metadata: Metadata = {
  title: 'Blog - Alira Interior'
}

const page = () => {
  return (
    <div>
        <BlogPageHeader />
        <BlogContent />
    </div>
  )
}

export default page