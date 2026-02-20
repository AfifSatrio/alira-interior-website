import Link from "next/link"
import BlogCard from "./BlogCard"


const BlogSection = () => {
  return (
    <div className="bg-primary w-full py-20 flex flex-col items-center">
      <h1 className="text-4xl max-w-6xl text-center font-bold font-poppins">Temukan Inspirasi di Balik Setiap Ruang</h1>
      <BlogCard />
      <Link className="mt-8 px-10 py-3 bg-white text-black rounded-full font-poppins font-bold hover:bg-black hover:text-white transition duration-300 cursor-pointer" href={"/blog"}>
        Lihat Artikel Lain
      </Link>
    </div>
  )
}

export default BlogSection