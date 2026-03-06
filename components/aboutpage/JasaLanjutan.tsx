"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ShieldCheck } from "lucide-react"

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

const cards = [
  {
    title: "Renovasi & Rehabilitasi Interior",
    desc: "Kami menangani pembaruan ruang secara menyeluruh — dari perbaikan struktural hingga finishing estetika, dengan hasil yang fungsional dan tahan lama.",
    image: "/bg/bg-3.webp",
  },
  {
    title: "Jasa Desain Interior",
    desc: "Dari concept to execution. Kami mendampingi klien sejak perencanaan konsep, pengembangan desain, pemilihan material, produksi, instalasi, hingga finishing akhir.",
    image: "/bg/bg-4.webp",
  },
]

const JasaLanjutan = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-5 font-poppins -mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            variants={fadeUp(i * 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative rounded-2xl overflow-hidden bg-gray-100 aspect-4/3"
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col gap-2">
              <h3 className="text-white font-semibold text-base md:text-lg leading-snug">
                {card.title}
              </h3>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed font-light">
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-6 flex flex-col sm:flex-row items-center gap-6 bg-[#F9F6F1] border border-[#E8E0D5] rounded-2xl px-8 py-6"
      >
        {/* Badge / Seal */}
        <div className="shrink-0 flex flex-col items-center justify-center w-20 h-20 rounded-full border-2 border-alira bg-white shadow-sm">
          <ShieldCheck size={24} className="text-alira mb-0.5" />
          <span className="text-[9px] font-bold text-alira tracking-widest uppercase leading-tight text-center">
            1 Tahun
          </span>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <h4 className="font-semibold text-[#2C1F0E] text-base">
            Garansi Pengerjaan 1 Tahun
          </h4>
          <p className="text-sm text-gray-500 leading-relaxed font-light">
            Sebagai bentuk tanggung jawab kami, setiap proyek dilengkapi garansi pengerjaan selama 1 tahun — bukti bahwa kami tidak hanya fokus pada estetika, tetapi juga pada kekuatan konstruksi dan ketahanan jangka panjang.
          </p>
        </div>
      </motion.div>

    </section>
  )
}

export default JasaLanjutan