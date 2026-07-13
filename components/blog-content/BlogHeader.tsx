import Image from "next/image"

interface Blog {
  title: string
  publishedAt: Date
  mainImage: any
}

const BlogHeader = ({ blog }: { blog: Blog }) => {
  return (
    <div className="relative w-full lg:h-[40vh] h-[30vh] overflow-hidden">
      
      {blog?.mainImage && (
        <Image
          src={blog.mainImage}
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