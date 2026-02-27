"use client"

import { motion } from "framer-motion"
import BlogCard from "../blog-section/BlogCard"

const BlogContentClient = ({ blogs }: { blogs: any[] }) => {
  return (
    <div className="w-full mt-16 mx-auto px-4 sm:px-6 lg:px-10 mb-10">

      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <BlogCard blogs={blogs} />
      </motion.div>
    </div>
  )
}

export default BlogContentClient