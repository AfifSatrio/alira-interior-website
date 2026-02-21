"use client"

import AliraClient from "./AliraClient"
import { motion } from "framer-motion"

const ClientSection = () => {
  return (
    <div className="mx-auto flex flex-col border-t-2 border-t-alira pt-10 py-20 justify-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:px-80 px-10 font-black lg:text-4xl text-3xl font-poppins text-center"
        >
          Dipercaya Oleh Mereka Yang Menghargai Kualitas
        </motion.h1>
      <AliraClient />
    </div>
  )
}

export default ClientSection