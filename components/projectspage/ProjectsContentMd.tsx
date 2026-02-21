"use client"

import { portfolioHighlight } from "@/constants"
import Image from "next/image"
import { motion } from "framer-motion"

const ProjectsContentMd = () => {
  return (
    <div className="mx-auto w-full pt-10 pb-20 block lg:hidden">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true }}
        className="text-center text-3xl font-bold mx-10"
      >
        Kumpulan Proyek Alira Interior
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true }}
        className="text-center text-sm mx-10 mt-5"
      >
        Di Alira Interior, setiap proyek adalah cerminan komitmen kami terhadap kualitas, ketelitian, dan daya tahan jangka panjang. Tidak hanya membangun interior baru, kami juga berpengalaman dalam rehabilitasi dan renovasi interior untuk meningkatkan fungsi, tampilan, serta nilai ruang yang sudah ada.
      </motion.p>

      {/* Grid Images */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="grid md:grid-cols-3 grid-cols-1 gap-2 mt-10 mx-10"
      >
        {portfolioHighlight.map((index) => (
          <motion.div
            key={index.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                },
              },
            }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src={index.image}
              alt={index.name}
              width={250}
              height={150}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

    </div>
  )
}

export default ProjectsContentMd