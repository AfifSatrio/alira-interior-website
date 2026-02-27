import { urlFor } from "@/lib/sanity.image"
import Image from "next/image"

interface Blog {
  title: string
  mainImage: any
}

const BlogHeader = ({ blog }: { blog: Blog }) => {
  return (
    <div className="relative w-full lg:h-[40vh] h-[30vh] overflow-hidden">
      
      {blog?.mainImage && (
        <Image
          src={urlFor(blog.mainImage)
            .width(1920)
            .quality(80)
            .format("webp")
            .url()}
          alt={blog.title}
          fill
          priority
          className="object-cover"
        />
      )}

      <div className="absolute inset-0 bg-black/50" />
    </div>
  )
}

export default BlogHeader