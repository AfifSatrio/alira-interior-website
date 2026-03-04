"use client"

import { motion } from "framer-motion"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

const lineVariant = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

const misiList = [
  "Memberikan solusi interior yang fungsional dan bernilai estetika tinggi",
  "Menjaga kualitas dan ketepatan waktu pengerjaan",
  "Membangun kemitraan jangka panjang dengan klien",
  "Terus berinovasi dalam desain dan sistem kerja",
]

const VisiMisiSection = () => {
  return (
    <section className="w-full bg-[#F9F6F1] py-24 px-6 overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Section label */}
        <motion.p
          variants={fadeUp}
          className="text-center text-[11px] tracking-[0.35em] uppercase text-[#B8946A] font-poppins mb-3"
        >
          Landasan Kami
        </motion.p>

        {/* Ornamental line */}
        <motion.div
          variants={lineVariant}
          className="mx-auto mb-14 h-px w-12 bg-[#B8946A] origin-center"
        />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:divide-x md:divide-[#E8E0D5]">

          {/* ── VISI ── */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center md:items-start px-0 md:pr-16 pb-14 md:pb-0"
          >
            {/* Eyebrow */}
            <span className="inline-block text-[10px] tracking-[0.4em] uppercase text-[#B8946A] font-poppins mb-4">
              Visi
            </span>

            {/* Big decorative letter */}
            <div className="relative mb-6 self-center md:self-start">
              <span
                className="absolute -top-5 -left-4 text-[7rem] font-bold leading-none text-[#B8946A]/[0.07] select-none font-poppins"
                aria-hidden
              >
                V
              </span>
              <h2 className="relative font-poppins text-2xl lg:text-3xl font-bold text-[#2C1F0E] leading-snug">
                Terpercaya,
                <br />
                Di Atas Segalanya
              </h2>
            </div>

            <p className="font-poppins text-sm text-gray-600 leading-[1.9] text-center md:text-left">
              Menjadi perusahaan interior terpercaya di Indonesia yang dikenal
              karena kualitas, integritas, dan standar pengerjaan yang unggul —
              sehingga setiap klien merasa benar-benar didengar dan dihargai.
            </p>
          </motion.div>

          {/* ── MISI ── */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center md:items-start px-0 md:pl-16 pt-14 md:pt-0 border-t border-[#E8E0D5] md:border-t-0"
          >
            <span className="inline-block text-[10px] tracking-[0.4em] uppercase text-[#B8946A] font-poppins mb-4">
              Misi
            </span>

            <div className="relative mb-6 self-center md:self-start">
              <span
                className="absolute -top-5 -left-4 text-[7rem] font-bold leading-none text-[#B8946A]/[0.07] select-none font-poppins"
                aria-hidden
              >
                M
              </span>
              <h2 className="relative font-poppins text-2xl lg:text-3xl font-bold text-[#2C1F0E] leading-snug">
                Berkomitmen
                <br />
                Sepenuh Hati
              </h2>
            </div>

            <ul className="space-y-4 w-full">
              {misiList.map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-4 font-poppins text-sm text-gray-600 leading-relaxed"
                >
                  {/* Number badge */}
                  <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full border border-[#B8946A]/40 text-[#B8946A] text-[10px] font-bold flex items-center justify-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom ornamental line */}
        <motion.div
          variants={lineVariant}
          className="mx-auto mt-16 h-px w-12 bg-[#B8946A]/40 origin-center"
        />
      </motion.div>
    </section>
  )
}

export default VisiMisiSection