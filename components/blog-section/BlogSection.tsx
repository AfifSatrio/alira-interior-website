import Link from "next/link"
import BlogCard from "./BlogCard"


const BlogSection = () => {
  return (
    <div className="bg-alira w-full py-20 flex flex-col items-center">
      <h1 className="lg:text-4xl text-3xl max-w-6xl text-center font-bold font-poppins mx-10 md:mx-0">Temukan Inspirasi di Balik Setiap Ruang</h1>
      <BlogCard />
      <Link className="mt-8 lg:px-10 px-8 lg:py-3 py-2 bg-white text-black rounded-full text-sm lg:text-base font-poppins font-bold hover:bg-black hover:text-white transition duration-300 cursor-pointer" href={"/portfolio"}>
        Lihat Artikel Lain
      </Link>
    </div>
  )
}

export default BlogSection