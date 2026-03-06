"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
}

const lineVariant = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

const ClosingStatement = () => {
  return (
    <section className="relative w-full bg-[#Ffffff] py-20 px-6 overflow-hidden border border-t-alira">

      {/* Background texture — subtle diagonal lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="diag" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="40" stroke="#CEAB93" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag)" />
      </svg>

      {/* Large watermark quote mark */}
      <span
        className="absolute top-8 left-8 text-[12rem] leading-none text-alira/5 select-none font-serif pointer-events-none"
        aria-hidden
      >
        "
      </span>

      <div className="relative max-w-4xl mx-auto text-center">

        {/* Top ornamental line */}
        <motion.div
          variants={lineVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-10 h-px w-14 bg-alira origin-center"
        />

        {/* Main headline — split for emphasis */}
        <motion.h2
          custom={0.25}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-poppins text-3xl md:text-5xl font-bold text-[#2C1F0E] leading-tight tracking-tight mb-10"
        >
          Membangun Ruang,{" "}
          <span className="text-alira">Menguatkan Identitas.</span>
        </motion.h2>

        {/* Divider dot */}
        <motion.div
          custom={0.35}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="h-px w-10 bg-alira/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-alira" />
          <div className="h-px w-10 bg-alira/30" />
        </motion.div>

        {/* Body text — split into two paragraphs for breathing room */}
        <motion.p
          custom={0.45}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-poppins text-sm md:text-base text-gray-600 leading-loose mb-6 max-w-2xl mx-auto"
        >
          Kami percaya bahwa ruang yang dirancang dengan baik akan menciptakan
          pengalaman yang bermakna bagi setiap penggunanya. Alira Interior hadir
          untuk menghadirkan ruang yang bukan hanya terlihat baik, tetapi
          bekerja dengan sempurna.
        </motion.p>

        <motion.p
          custom={0.55}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-poppins text-sm md:text-base text-gray-600 leading-loose mb-14 max-w-2xl mx-auto"
        >
          Karena bagi kami, ruang yang dirancang dengan tepat akan menjadi
          fondasi kesuksesan aktivitas di dalamnya. Jika Anda mencari partner
          interior yang berpengalaman, terpercaya, dan berkelas —&nbsp;
          <span className="text-alira font-medium">
            Alira Interior siap menjadi solusi terbaik untuk Anda.
          </span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          custom={0.65}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            href="https://wa.me/6282326931783"
            className="inline-flex items-center gap-3 border border-alira rounded-md bg-alira text-black text-[11px] tracking-[0.25em] uppercase font-poppins px-10 py-4 hover:bg-white hover:text-alira transition-all duration-300"
          >
            Ajukan Konsultasi Gratis
          </Link>
        </motion.div>

        {/* Bottom ornamental line */}
        <motion.div
          variants={lineVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 h-px w-14 bg-alira/30 origin-center"
        />
      </div>
    </section>
  )
}

export default ClosingStatement