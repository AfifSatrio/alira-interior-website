"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#F9F6F1] flex items-center justify-center overflow-hidden px-6">

      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#5C4A32" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <motion.span
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute select-none font-serif text-[22vw] font-bold text-[#5C4A32]/5 leading-none tracking-tighter pointer-events-none"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        404
      </motion.span>

      <div className="relative z-10 text-center max-w-xl">

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-8 h-px w-16 bg-[#B8946A] origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-[#B8946A] text-xs tracking-[0.3em] uppercase mb-5"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Halaman Tidak Ditemukan
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-[#2C1F0E] text-4xl md:text-5xl font-light leading-tight mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Ruang ini <em>belum</em> dirancang
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-[#7A6652] text-sm leading-relaxed mb-10 font-poppins font-light"
        >
          Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          <br />
          Biarkan kami membawa Anda kembali ke ruang yang tepat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-3 border border-[#B8946A] text-[#B8946A] text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#B8946A] hover:text-white transition-all duration-300 font-poppins"
          >
            <ArrowLeft size={14} />
            Kembali ke Beranda
          </Link>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-12 h-px w-16 bg-[#B8946A]/40 origin-right"
        />
      </div>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&display=swap');
      `}</style>
    </main>
  )
}