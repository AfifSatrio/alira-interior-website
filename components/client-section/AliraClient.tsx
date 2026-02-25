"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { urlFor } from "@/lib/sanity.image"

interface Clients {
  _id: string
  clientName: string
  clientLogo: any
}

const AliraClient = ({ clients }: { clients: Clients[] }) => {
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
          <div key={`${client._id}-${index}`} className="shrink-0 px-12 flex items-center justify-center">
            <Image
              src={urlFor(client.clientLogo).width(200).format("webp").url()}
              alt={client.clientName}
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