"use client"

import Link from "next/link"
import { easeInOut, motion } from "framer-motion"
import ProjectHighlight from "./ProjectHighlight"

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
      ease: easeInOut,
    },
  },
}

const ProjectSection = () => {
  return (
    <section className="mx-auto py-24 bg-alira">
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        {/* Heading */}
        <div className="text-center flex flex-col gap-4 mx-auto max-w-5xl px-6">
          
          <motion.h1
            variants={itemVariants}
            className="lg:text-4xl text-3xl font-poppins font-black leading-normal"
          >
            Kumpulan Proyek Alira Interior
          </motion.h1>

          <motion.span
            variants={itemVariants}
            className="block lg:text-lg text-sm font-poppins font-light"
          >
            Tidak hanya membangun interior baru, kami juga berpengalaman dalam
            rehabilitasi dan renovasi interior untuk meningkatkan fungsi,
            tampilan, serta nilai ruang yang sudah ada.
          </motion.span>

        </div>

        {/* Project Highlight */}
        <motion.div
          variants={itemVariants}
          className="mt-14"
        >
          <ProjectHighlight />
        </motion.div>

        {/* Button */}
        <motion.div
          variants={itemVariants}
          className="w-full flex justify-center mt-10"
        >
          <Link
            href={"/portfolio"}
            className="lg:px-10 px-8 lg:py-3 py-2 bg-white text-black rounded-full text-sm lg:text-base font-poppins font-bold hover:bg-black hover:text-white transition duration-300"
          >
            Lihat Semua Proyek
          </Link>
        </motion.div>

      </motion.div>

    </section>
  )
}

export default ProjectSection