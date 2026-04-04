"use client"

import { testimonials } from "@/constants"
import { motion } from "framer-motion"
import Image from "next/image"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

const lineVariant = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

const starVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.35,
      ease: "backOut",
    },
  }),
}

const TestimonialSection = () => {
  return (
    <section className="mx-auto max-w-6xl my-24 px-6">
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <motion.p
          variants={headingVariants}
          className="font-poppins text-sm uppercase tracking-[0.25em] text-alira mb-3"
        >
          Kepercayaan Klien Kami
        </motion.p>
        <motion.h2
          variants={headingVariants}
          className="font-poppins font-bold lg:text-4xl text-3xl"
        >
          Apa Kata Mereka
        </motion.h2>
        <motion.div
          variants={lineVariant}
          className="mx-auto mt-5 h-px w-14 bg-alira origin-center"
        />
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {testimonials.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(210,171,103,0.15)" }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="relative bg-white border border-gray-100 rounded-2xl p-7 shadow-sm flex flex-col gap-5 cursor-default overflow-hidden"
          >
            {/* Accent bar on top */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-alira/60 via-alira to-alira/20 origin-left"
            />

            {/* Watermark quote */}
            <span className="absolute top-4 right-5 text-7xl leading-none text-alira/8 font-serif select-none pointer-events-none">
              "
            </span>

            {/* Stars */}
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.svg
                  key={i}
                  custom={i}
                  variants={starVariants}
                  className="w-4 h-4 text-alira fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.951 2.778c-.785.57-1.84-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                </motion.svg>
              ))}
            </div>

            {/* Quote text */}
            <p className="font-poppins text-sm text-gray-600 leading-relaxed flex-1">
              "{item.quote}"
            </p>

            {/* Divider */}
            <div className="h-px w-full bg-gray-100" />

            {/* Author */}
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-alira/30 shrink-0"
              >
                <Image
                  src={item.avatar}
                  alt={`Foto ${item.name}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div>
                <p className="font-poppins font-semibold text-sm text-gray-800">
                  {item.name}
                </p>
                <p className="font-poppins text-xs text-gray-500">
                  {item.role} · {item.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default TestimonialSection
