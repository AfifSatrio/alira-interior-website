"use client"

import { blogExamples } from "@/constants"
import { Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const BlogCard2 = () => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center lg:items-stretch gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
    >
      {blogExamples.slice(0, 3).map((index) => (
        <motion.div
          key={index.id}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                ease: [0.4, 0, 0.2, 1],
              },
            },
          }}
          whileHover={{ y: -4 }}
        >
          <Link
            href={`/blog/${index.id}`}
            className="flex w-150 h-[16vh] rounded-2xl shadow-md overflow-hidden group transition-all duration-300"
          >
            {/* Image Side */}
            <div className="relative w-50 h-full">
              <Image
                src={index.image}
                alt={index.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content Side */}
            <div className="flex flex-col space-y-2 py-3 px-5 font-poppins w-full bg-white">
              <h1 className="font-bold line-clamp-1">
                {index.title}
              </h1>

              <span className="flex flex-row text-sm items-center text-gray-600">
                <Clock className="mr-2 h-4 w-4" />
                {index.datetime}
              </span>

              <span className="mt-auto text-sm text-black hover:text-alira hover:underline transition-all font-poppins">
                Baca Selengkapnya
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default BlogCard2