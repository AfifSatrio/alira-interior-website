"use client"

import { valueIcons } from "@/constants"
import Image from "next/image"
import { easeInOut, motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeInOut,
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const ValueSection = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mx-auto max-w-6xl my-24 px-6"
    >
      {/* Heading */}
      <motion.h1
        variants={itemVariants}
        className="font-poppins font-bold lg:text-4xl text-3xl text-center mb-16"
      >
        Keunggulan Yang Membedakan Kami
      </motion.h1>

      {/* Grid */}
      <div className="grid md:grid-cols-5 grid-cols-1 gap-10">
        {valueIcons.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-5 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={item.icon}
                alt={item.alt}
                width={75}
                height={75}
                className="md:scale-100 scale-95"
              />
            </motion.div>

            <span className="font-semibold text-sm lg:text-base max-w-50">
              {item.desc}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default ValueSection