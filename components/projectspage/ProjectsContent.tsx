"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { urlFor } from "@/lib/sanity.image"

interface Project {
  _id: string
  title: string
  coverImage: any
}

const ProjectsContent = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="mx-auto w-full pt-14 pb-24">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center text-3xl lg:text-4xl font-bold mx-6"
      >
        Kumpulan Proyek Alira Interior
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        viewport={{ once: true }}
        className="text-center text-sm lg:text-base max-w-3xl mx-auto mt-6 px-6"
      >
        Di Alira Interior, setiap proyek adalah cerminan komitmen kami terhadap kualitas, ketelitian, dan daya tahan jangka panjang.
      </motion.p>

      {/* Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 px-6 lg:px-16"
      >
        {projects.map((project) => (
          <motion.div
            key={project._id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="relative aspect-4/3 w-full overflow-hidden rounded-lg group cursor-pointer"
          >
            {/* Image */}
            <Image
              src={urlFor(project.coverImage)
                .width(800)
                .height(600)
                .fit("crop")
                .format("webp")
                .url()}
              alt={project.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />

            {/* Overlay */}
            <motion.div
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/50 flex items-center justify-center"
            >
              <motion.h3
                variants={{
                  rest: { y: 20, opacity: 0 },
                  hover: { y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
                className="text-white text-lg font-semibold text-center px-4"
              >
                {project.title}
              </motion.h3>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default ProjectsContent