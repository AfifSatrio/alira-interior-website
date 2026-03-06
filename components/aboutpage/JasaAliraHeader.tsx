"use client"

import { motion } from "framer-motion"

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
})

const JasaAliraHeader = () => {
  return (
    <>
      <motion.h1
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center font-poppins text-3xl md:text-4xl font-semibold"
      >
        Menghadirkan Solusi Interior, Bukan Sekedar Membangun Ruang
      </motion.h1>

      <motion.p
        variants={fadeUp(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center font-poppins text-sm mt-5"
      >
        Kami Menghadirkan Solusi Interior secara Menyeluruh, Bukan Sekadar
        Membangun Ruang, tetapi Menciptakan Pengalaman dan Identitas di Dalamnya.
      </motion.p>

      <motion.h2
        variants={fadeUp(0.25)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-xl mr-10 font-poppins font-semibold mt-20 text-left"
      >
        Kami Melayani Berbagai Kebutuhan Interior untuk
      </motion.h2>
    </>
  )
}

export default JasaAliraHeader