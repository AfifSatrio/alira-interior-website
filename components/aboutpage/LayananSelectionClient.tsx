"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { urlFor } from "@/lib/sanity.image"

export interface ServiceItem {
  _id: string
  item: string
  image: any
}

const layananOptions: Record<string, string> = {
  "kantor-corporate": "Kantor dan Corporate Space",
  "apartemen-hunian": "Apartemen dan Hunian",
  "toko-retail": "Toko dan Retail",
  "mall-commercial": "Mall dan Commercial Area",
  "hotel-hospitality": "Hotel dan Hospitality",
  "sekolah-pendidikan": "Sekolah dan Instansi Pendidikan",
  "hospital-kesehatan": "Hospital dan Fasilitas Kesehatan",
  "rumah-villa": "Rumah dan Villa",
  "cafe-coffee": "Cafe dan Coffee Shop",
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.97, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

const LayananSelectionClient = ({ services }: { services: ServiceItem[] }) => {
  const [selected, setSelected] = useState<ServiceItem>(services[0])

  if (!services || services.length === 0) return null

  return (
    <motion.div
      className="flex flex-col lg:flex-row lg:items-stretch gap-0 font-poppins"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >

      <motion.div className="lg:w-2/5 flex flex-col justify-between divide-y divide-gray-100">
        {services.map((service, index) => {
          const isActive = selected._id === service._id
          return (
            <motion.button
              key={service._id}
              variants={itemVariants}
              onClick={() => setSelected(service)}
              className={`group flex items-center justify-between text-left px-2 py-4 transition-colors duration-200 cursor-pointer ${
                isActive ? "text-alira" : "text-gray-500 hover:text-gray-800"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className={`text-[11px] font-medium tracking-widest transition-colors duration-200 ${isActive ? "text-alira" : "text-gray-300"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={`text-sm transition-all duration-200 ${isActive ? "font-semibold" : "font-light"}`}>
                  {layananOptions[service.item] ?? service.item}
                </span>
              </div>
              <motion.div
                initial={false}
                animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="w-6 h-0.5 bg-alira origin-right"
              />
            </motion.button>
          )
        })}
      </motion.div>

      <motion.div
        className="lg:w-3/5 lg:pl-10 mt-8 lg:mt-0"
        variants={imageVariants}
      >
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#F0EAE2] top-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected._id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="absolute inset-0"
            >
              {selected.image ? (
                <Image
                  src={urlFor(selected.image).width(1200).height(675).format("webp").url()}
                  alt={layananOptions[selected.item] ?? selected.item}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-sm text-alira/40">{layananOptions[selected.item] ?? selected.item}</span>
                </div>
              )}
              <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/50 to-transparent p-5">
                <span className="text-white text-sm font-medium font-poppins">
                  {layananOptions[selected.item] ?? selected.item}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default LayananSelectionClient