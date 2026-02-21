"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import BlogCard from "./BlogCard"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const BlogSection = () => {
  return (
    <section className="bg-alira w-full py-24 flex flex-col items-center px-6">
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full flex flex-col items-center"
      >
        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="lg:text-4xl text-3xl max-w-4xl text-center font-bold font-poppins"
        >
          Temukan Inspirasi di Balik Setiap Ruang
        </motion.h1>

        {/* Blog Cards */}
        <motion.div
          variants={itemVariants}
          className="w-full"
        >
          <BlogCard />
        </motion.div>

        {/* Button */}
        <motion.div
          variants={itemVariants}
          className="mt-10"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={"/portfolio"}
              className="lg:px-10 px-8 lg:py-3 py-2 bg-white text-black rounded-full text-sm lg:text-base font-poppins font-bold hover:bg-black hover:text-white transition duration-300 inline-block"
            >
              Lihat Artikel Lain
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

    </section>
  )
}

export default BlogSection