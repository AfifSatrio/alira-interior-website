import BlogHeader from '@/components/blog-content/BlogHeader'
import BlogContent from '@/components/blog-content/BlogContent'
import { sanityClient } from '@/lib/sanity.client'
import { detailBlogQuery } from '@/lib/queries'
import { notFound } from 'next/navigation'
import BlogSection from '@/components/blog-section/BlogSection'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const blog = await sanityClient.fetch(detailBlogQuery, {
    slug,
  })

  if (!blog) return notFound()

  return <div>
    <BlogHeader blog={blog} />
    <BlogContent blog={blog} />
    <BlogSection />
  </div>
}