"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"
import Image from "next/image"
import { Clock } from "lucide-react"
import Link from "next/link"
import { easeInOut, motion } from "framer-motion"

import { format } from "date-fns"
import { id } from "date-fns/locale"
import { PortableText, type PortableTextComponents } from "@portabletext/react"
import type { ReactNode } from "react"

interface Blog {
  id: string
  title: string
  slug: string
  content: unknown
  mainImage: string
  publishedAt: Date
}

const previewComponents: PortableTextComponents = {
  block: {
    normal: ({ children }: { children?: ReactNode }) => <span>{children} </span>,
    h1: ({ children }: { children?: ReactNode }) => <span>{children} </span>,
    h2: ({ children }: { children?: ReactNode }) => <span>{children} </span>,
    h3: ({ children }: { children?: ReactNode }) => <span>{children} </span>,
    h4: ({ children }: { children?: ReactNode }) => <span>{children} </span>,
    h5: ({ children }: { children?: ReactNode }) => <span>{children} </span>,
    h6: ({ children }: { children?: ReactNode }) => <span>{children} </span>,
    blockquote: ({ children }: { children?: ReactNode }) => <span>{children} </span>,
  },
  marks: {
    underline: ({ children }: { children?: ReactNode }) => <span>{children}</span>,
    "font-small": ({ children }: { children?: ReactNode }) => <span>{children}</span>,
    "font-large": ({ children }: { children?: ReactNode }) => <span>{children}</span>,
  },
  list: {
    bullet: ({ children }: { children?: ReactNode }) => <span>{children}</span>,
    number: ({ children }: { children?: ReactNode }) => <span>{children}</span>,
  },
  listItem: {
    bullet: ({ children }: { children?: ReactNode }) => <span>{children} </span>,
    number: ({ children }: { children?: ReactNode }) => <span>{children} </span>,
  },
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeInOut,
    },
  },
}

const BlogCard = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-14 mx-6 grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {blogs.map((blog) => (
        <motion.div
          key={blog.id}
          variants={itemVariants}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="relative w-full bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            <div className="relative w-full h-52 overflow-hidden rounded-t-xl">
                <Image
                    src={blog.mainImage}
                    alt={blog.title}
                    fill
                    className="object-cover"
                />
            </div>

            <CardHeader className="space-y-3">
              <CardTitle className="text-lg font-semibold line-clamp-2">
                {blog.title}
              </CardTitle>

              <CardDescription className="flex items-center text-sm text-gray-500">
                <Clock className="mr-2 w-4 h-4" />
                {format(new Date(blog.publishedAt), "dd MMM yyyy", {
                  locale: id
                })}
              </CardDescription>

              <CardDescription className="line-clamp-2 text-gray-600 text-sm">
                <PortableText value={blog.content} components={previewComponents} />
              </CardDescription>

              <CardDescription>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-sm text-black hover:text-alira hover:underline transition-all font-poppins"
                >
                  Baca Selengkapnya
                </Link>
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default BlogCard
