"use client"

import { PortableText, type PortableTextComponents } from "@portabletext/react"
import { format } from "date-fns"
import { id } from "date-fns/locale"
import type { ReactNode } from "react"

interface Blog {
  title: string
  content: unknown
  publishedAt: Date
  author?: string
}

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h1: ({ children }) => (
      <h1 className="text-4xl font-semibold">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg font-semibold">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-base font-semibold uppercase tracking-wide">
        {children}
      </h6>
    ),
    blockquote: ({ children }) => (
      <blockquote>{children}</blockquote>
    ),
  },
  marks: {
    underline: ({ children }: { children?: ReactNode }) => <u>{children}</u>,
    "font-small": ({ children }: { children?: ReactNode }) => <span className="text-sm">{children}</span>,
    "font-large": ({ children }: { children?: ReactNode }) => <span className="text-xl">{children}</span>,
  },
  list: {
    bullet: ({ children }: { children?: ReactNode }) => <ul className="list-disc pl-6">{children}</ul>,
    number: ({ children }: { children?: ReactNode }) => <ol className="list-decimal pl-6">{children}</ol>,
  },
}

const BlogContent = ({ blog }: { blog: Blog }) => {
  return (
    <div className="w-full px-6 lg:px-0">
        <div className="max-w-4xl mx-auto relative -mt-12 z-10 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white shadow-xl rounded-2xl p-6 items-center">
                <div className="flex flex-col text-center">
                    <p className="text-black/40 text-xs uppercase tracking-wide">
                        Author
                    </p>
                    <p className="font-semibold mt-1">
                        {blog.author ?? "Admin"}
                    </p>
                </div>
                <div className="flex flex-col text-center">
                    <p className="text-black/40 text-xs uppercase tracking-wide">
                        Published At
                    </p>
                    <p className="font-semibold mt-1">
                        {format(new Date(blog.publishedAt), "dd MMMM yyyy", {
                        locale: id,
                        })}
                    </p>
                </div>
                <div className="flex justify-center gap-2 mt-2 lg:mt-0">
                    <a href={`https://wa.me/?text=${encodeURIComponent(blog.title + " " + window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-full hover:bg-green-100 transition hover:scale-110"
                    >
                        <i className="ri-whatsapp-fill text-xl text-green-600"></i>
                    </a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-full hover:bg-blue-100 transition hover:scale-110"
                    >
                        <i className="ri-facebook-fill text-xl text-blue-600"></i>
                    </a>
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-full hover:bg-black/10 transition hover:scale-110"
                    >
                        <i className="ri-twitter-x-fill text-xl"></i>
                    </a>
                    <button onClick={() => navigator.share?.({ title: blog.title, url: window.location.href, })}
                        className="px-3 py-2 rounded-full hover:bg-black/5 transition hover:scale-110 cursor-pointer"
                    >
                        <i className="ri-share-forward-fill text-xl"></i>
                    </button>
                </div>
            </div>
        </div>

      <div className="max-w-4xl mx-auto mt-16 space-y-8 pb-20 font-poppins">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-tight text-center">
          {blog.title}
        </h1>
        <div className="prose prose-neutral max-w-none text-base leading-relaxed">
          <PortableText value={blog.content} components={portableTextComponents} />
        </div>
      </div>
    </div>
  )
}

export default BlogContent
