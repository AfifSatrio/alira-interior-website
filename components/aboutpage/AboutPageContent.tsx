"use client"

import Image from "next/image"
import { easeInOut, motion } from "framer-motion"
import Counter from "./Counter"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeInOut,
    },
  },
}

const AboutPageContent = () => {
  return (
    <section className="w-full pt-20">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Image (Desktop Only) */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:block shrink-0"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <Image
              src="/bg/bg-2.webp"
              alt="bg-2"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </motion.div>

          {/* Content Side */}
          <div className="flex flex-col w-full">

            {/* Main Card */}
            <motion.div
              variants={itemVariants}
              className="relative bg-white shadow-xl px-10 py-10 lg:-ml-30 rounded-lg max-w-xl"
            >
              <h1 className="text-3xl lg:text-4xl font-bold font-poppins leading-snug mb-6">
                Setiap Ruang Memiliki Cerita, Kami Merancangnya dengan Makna
              </h1>

              <p className="font-poppins leading-relaxed text-sm lg:text-base text-gray-700">
                Sejak berdiri pada tahun 2003, Alira Interior tumbuh sebagai
                perusahaan interior yang konsisten mengutamakan kualitas,
                ketelitian, dan integritas dalam setiap proyek. Lebih dari dua
                dekade perjalanan kami bukan sekadar angka pengalaman, tetapi
                bukti komitmen dalam menghadirkan ruang yang fungsional,
                estetis, dan bernilai jangka panjang.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
                variants={itemVariants}
                className="flex justify-center lg:justify-start gap-12 mt-12"
                >
                <div className="flex flex-col items-center lg:items-start">
                    <h2 className="text-3xl lg:text-4xl font-black font-poppins">
                    <Counter target={20} />
                    </h2>
                    <span className="font-poppins font-medium text-sm lg:text-base">
                    Tahun Pengalaman
                    </span>
                </div>

                <div className="flex flex-col items-center lg:items-start">
                    <h2 className="text-3xl lg:text-4xl font-black font-poppins">
                    <Counter target={50} />
                    </h2>
                    <span className="font-poppins font-medium text-sm lg:text-base">
                    Proyek Selesai
                    </span>
                </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutPageContent