"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import ProyekPreview from "./ProyekPreview"
import { urlFor } from "@/lib/sanity.image"
import Image from "next/image"

interface Project {
  _id: string
  title: string
  coverImage: any
}

interface Settings {
  tagline: string
  subtagline: string 
  backgroundImage: any
}

const Hero = ({ projects, settings }: { projects: Project[]; settings:Settings }) => {
  return (
    <div className="relative h-screen w-full bg-cover bg-center overflow-hidden">
      {settings?.backgroundImage && (
        <Image src={urlFor(settings.backgroundImage).width(1920).quality(80).format("webp").url()} alt="Hero Bg" fill priority className="object-cover"/>
      )}
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <div className="mt-15 lg:max-w-275 max-w-180 px-5 space-y-8">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="lg:text-[56px] text-4xl leading-[1.2] text-white font-dm-serif"
          >
            {settings.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="lg:text-lg text-sm text-white/90 font-poppins"
          >
            {settings.subtagline}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <ProyekPreview projects={projects}/>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Link
            className="mt-8 lg:px-10 px-8 lg:py-3 py-2 bg-white text-black rounded-full text-sm lg:text-base font-poppins font-bold hover:bg-black hover:text-white transition duration-300 cursor-pointer inline-block"
            href={"/projects"}
          >
            Lihat Semua Proyek
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero