import { blogExamples } from "@/constants"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"
import Image from "next/image"
import { Clock } from "lucide-react"
import Link from "next/link"

const BlogCard = () => {
  return (
    <div className="mt-20 flex flex-row justify-center gap-10">
        {blogExamples.slice(0,3).map((blog) => (
            <Card className="relative mx-auto w-full max-w-sm pt-0 bg-white border-0" key={blog.id}>
                <div className="absolute inset-0 z-30 aspect-video"/>
                <Image src={blog.image} alt={blog.alt} width={400} height={192} className="relative z-20 aspect-video w-full object-cover rounded-t-xl" />
                <CardHeader>
                    <CardTitle>
                        {blog.title}
                    </CardTitle>
                    <CardDescription className="flex items-center">
                        <Clock className="inline mr-2 w-4 h-4" />
                        {blog.datetime}
                    </CardDescription>
                    <CardDescription className="line-clamp-2">
                        {blog.desc}
                    </CardDescription>
                    <CardDescription>
                        <Link className="text-sm text-black mt-2 hover:text-primary hover:underline cursor-pointer transition-all font-poppins" href={"/blog+id"}>Baca Selengkapnya</Link>
                    </CardDescription>
                </CardHeader>
            </Card>
        ))}
    </div>
  )
}

export default BlogCard