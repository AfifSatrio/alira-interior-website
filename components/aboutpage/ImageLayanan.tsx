"use client"

import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { urlFor } from "@/lib/sanity.image"
import { ServiceItem } from "./LayananDropDown"

const ImageLayanan = ({ selected }: { selected: ServiceItem }) => {
  return (
    <div className="sticky top-0 w-full h-72 md:h-96 rounded-lg overflow-hidden bg-[#F0EAE2] shrink-0">
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
              src={urlFor(selected.image).width(800).format("webp").url()}
              alt={selected.item}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-poppins text-sm text-alira/60">{selected.item}</span>
            </div>
          )}

          {/* Label overlay */}
          <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/50 to-transparent p-5">
            <span className="font-poppins text-white text-sm font-medium">
              {selected.item}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default ImageLayanan