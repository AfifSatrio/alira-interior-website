"use client"

import { portfolioHighlight } from "@/constants"
import Image from "next/image"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const ProyekPreview = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 flex flex-wrap justify-center gap-3 mt-10 bg-white/20 px-4 py-2 rounded-md backdrop-blur-xl border border-white/30"
    >
      {/* Desktop */}
      {portfolioHighlight.map((project, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="hidden lg:block"
          whileHover={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={project.image}
            alt={project.name}
            width={80}
            height={40}
            className="rounded-md cursor-pointer"
            loading="lazy"
          />
        </motion.div>
      ))}

      {/* Mobile */}
      {portfolioHighlight.slice(0, 3).map((project, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="lg:hidden"
          whileHover={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={project.image}
            alt={project.name}
            width={80}
            height={40}
            className="rounded-md cursor-pointer"
            loading="lazy"
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ProyekPreview