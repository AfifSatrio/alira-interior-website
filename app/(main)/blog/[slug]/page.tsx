import type { Metadata } from 'next'
import BlogHeader from '@/components/blog-content/BlogHeader'
import BlogContent from '@/components/blog-content/BlogContent'
import { sanityClient } from '@/lib/sanity.client'
import { detailBlogQuery } from '@/lib/queries'
import { notFound } from 'next/navigation'
import BlogSection from '@/components/blog-section/BlogSection'
import { urlFor } from '@/lib/sanity.image'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  const blog = await sanityClient.fetch(detailBlogQuery, { slug })

  if (!blog) return {}

  const ogImage = blog?.mainImage
    ? urlFor(blog.mainImage).width(1200).height(630).url()
    : undefined

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: ogImage ? [ogImage] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: ogImage ? [ogImage] : [],
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const blog = await sanityClient.fetch(detailBlogQuery, { slug })

  if (!blog) return notFound()

  return (
    <div>
      <BlogHeader blog={blog} />
      <BlogContent blog={blog} />
      <BlogSection />
    </div>
  )
}
