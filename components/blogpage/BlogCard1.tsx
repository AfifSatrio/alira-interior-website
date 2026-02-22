import { blogExamples } from "@/constants"
import { Clock } from "lucide-react"
import Link from "next/link"

const BlogCard1 = () => {
  return (
    <div className="flex lg:justify-end justify-center">
      {blogExamples.slice(0, 1).map((index) => (
        <Link
          key={index.id}
          href={`/blog/${index.id}`}
          className="relative flex h-[52.5vh] rounded-xl items-end w-150 py-5 bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `url(${index.image})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 text-left space-y-2 font-poppins px-5 text-white">
            <h1 className="text-lg font-bold">{index.title}</h1>

            <span className="flex flex-row items-center text-sm line-clamp-2">
              <Clock className="mr-2 h-4 w-4" />
              {index.datetime}
            </span>

            <p className="text-sm max-w-xl">
              {index.desc}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default BlogCard1