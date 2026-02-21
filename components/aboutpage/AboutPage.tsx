"use client"

import { motion } from "framer-motion"

const AboutPage = () => {
  return (
    <div className="relative bg-[url('/bg/bg-1.webp')] w-full h-[40vh] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-50 mt-15 font-dm-serif text-5xl flex items-center justify-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white text-center">Tentang Kami
            </motion.h1>
        </div>
    </div>
  )
}

export default AboutPage