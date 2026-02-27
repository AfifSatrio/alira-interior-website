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

    <div className="mx-auto w-full pb-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 px-6 lg:px-16"
      >
        {projects.map((project) => (
          <motion.div
            key={project._id}
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.95 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="relative aspect-4/3 w-full overflow-hidden rounded-xl group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
          >
            {/* Image */}
            <motion.div
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.08 },
              }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={urlFor(project.coverImage)
                  .width(800)
                  .height(600)
                  .fit("crop")
                  .format("webp")
                  .url()}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:brightness-75"
                loading="lazy"
              />
            </motion.div>

            {/* Overlay */}
            <motion.div
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center"
            >
              <motion.h3
                variants={{
                  rest: { y: 30, opacity: 0 },
                  hover: { y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.4 }}
                className="text-white text-lg lg:text-xl font-semibold text-center px-6"
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