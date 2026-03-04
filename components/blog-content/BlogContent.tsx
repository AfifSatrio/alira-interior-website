"use client"

import { PortableText } from "@portabletext/react"
import { format } from "date-fns"
import { id } from "date-fns/locale"

interface Blog {
  title: string
  content: any
  publishedAt: string
  author?: string
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
          <PortableText value={blog.content} />
        </div>
      </div>
    </div>
  )
}

export default BlogContent