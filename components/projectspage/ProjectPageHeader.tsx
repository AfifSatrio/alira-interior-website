"use client"

import { motion } from "framer-motion"

const ProjectPageHeader = () => {
  return (
    <div className="relative bg-[url('/bg/bg-1.webp')] w-full md:h-[40vh] h-[30vh] bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative h-50 mt-35 flex flex-col space-y-3">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white text-center font-dm-serif lg:text-5xl text-3xl">
          Proyek Alira Interior
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-center font-poppins text-xs mx-10 md:text-sm "
          >
          Setiap proyek adalah cerminan komitmen kami terhadap kualitas, ketelitian, dan daya tahan jangka panjang.
        </motion.p>
      </div>
    </div>
  )
}

export default ProjectPageHeader