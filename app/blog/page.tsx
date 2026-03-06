import type { Metadata } from "next"

import BlogContent from "@/components/blogpage/BlogContent"
import BlogPageHeader from "@/components/blogpage/BlogPageHeader"
import ClosingStatement from "@/components/aboutpage/ClosingStatement"

export const metadata: Metadata = {
  title: 'Blog - Alira Interior'
}

const page = () => {
  return (
    <div>
        <BlogPageHeader />
        <BlogContent />
        <ClosingStatement />
    </div>
  )
}

export default page