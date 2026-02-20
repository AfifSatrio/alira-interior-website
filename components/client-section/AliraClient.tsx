"use client"

import { clients } from "@/constants"
import Image from "next/image"
import { motion } from "framer-motion"

const AliraClient = () => {
  const duplicatedClients = [...clients, ...clients]

  return (
    <div className="w-full overflow-hidden mt-15">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
      >
        {duplicatedClients.map((client, index) => (
          <div key={index} className="shrink-0 px-12 flex items-center justify-center">
            <Image
              src={client.logo}
              alt={client.alt}
              width={100}
              height={50}
              className="object-contain transition duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AliraClient