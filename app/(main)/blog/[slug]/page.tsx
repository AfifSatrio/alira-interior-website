import type { Metadata } from 'next'
import BlogHeader from '@/components/blog-content/BlogHeader'
import BlogContent from '@/components/blog-content/BlogContent'
import prisma from '@/lib/prisma'
import { notFound } from 'next/navigation'
import BlogSection from '@/components/blog-section/BlogSection'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  const blog = await prisma.blog.findUnique({ where: { slug } })

  if (!blog) return {}

  const ogImage = blog.mainImage || undefined

  return {
    title: blog.title,
    description: "Read this blog post on Alira Interior",
    openGraph: {
      title: blog.title,
      description: "Read this blog post on Alira Interior",
      images: ogImage ? [ogImage] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: "Read this blog post on Alira Interior",
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

  const blog = await prisma.blog.findUnique({ where: { slug } })

  if (!blog) return notFound()

  return (
    <div>
      <BlogHeader blog={blog} />
      <BlogContent blog={blog} />
      <BlogSection />
    </div>
  )
}
