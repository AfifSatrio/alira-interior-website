"use client"

import Image from "next/image"
import { motion, easeInOut } from "framer-motion"
import { urlFor } from "@/lib/sanity.image"

interface Project {
  _id: string
  title: string
  coverImage: any
}

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeInOut,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const ProyekPreview = ({ projects }: { projects: Project[] }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 flex flex-wrap justify-center gap-3 mt-10 bg-white/20 px-4 py-2 rounded-md backdrop-blur-xl border border-white/30"
    >
      {/* Desktop */}
      {projects.map((project) => (
        <motion.div
          key={project._id}
          variants={itemVariants}
          className="hidden lg:block"
          whileHover={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={urlFor(project.coverImage).width(200).height(120).fit("crop").url()}
            alt={project.title}
            width={80}
            height={40}
            className="rounded-md cursor-pointer object-cover"
            unoptimized
          />
        </motion.div>
      ))}

      {/* Mobile */}
      {projects.slice(0, 3).map((project) => (
        <motion.div
          key={project._id}
          variants={itemVariants}
          className="lg:hidden"
          whileHover={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={urlFor(project.coverImage).width(200).height(120).fit("crop").url()}
            alt={project.title}
            width={80}
            height={40}
            className="rounded-md cursor-pointer object-cover"
            unoptimized
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ProyekPreview