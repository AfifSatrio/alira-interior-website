"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import BlogCard from "../blog-section/BlogCard"
import BlogCard1 from "./BlogCard1"
import BlogCard2 from "./BlogCard2"

const BlogContent = () => {
  return (
    <div className="w-full mt-16 mx-auto px-4 sm:px-6 lg:px-10 mb-10">

      {/* Top Grid */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true }}
      >
        <BlogCard1 />
        <BlogCard2 />
      </motion.div>

      {/* Middle Section */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true }}
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold text-center mb-10">
          Eksplor Artikel Kami
        </h1>

        <BlogCard />
      </motion.div>

      {/* Button Center */}
      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href={"/portfolio"}
            className="px-8 sm:px-10 py-2 sm:py-3 bg-black text-white rounded-full text-sm sm:text-base font-poppins font-bold hover:bg-white hover:text-black hover:border hover:border-black transition duration-300 inline-block"
          >
            Lihat Artikel Lain
          </Link>
        </motion.div>
      </motion.div>

    </div>
  )
}

export default BlogContent