"use client"

import { motion, easeInOut } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeInOut,
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const Jasa = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="my-24 mx-auto max-w-6xl"
    >
      {/* Heading Section */}
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-10">
        <motion.h1
          variants={itemVariants}
          className="lg:text-4xl text-3xl font-poppins font-black lg:ml-20 mx-10 lg:mx-0"
        >
          Merancang Pengalaman, Bukan Sekadar Ruang
        </motion.h1>

        <motion.span
          variants={itemVariants}
          className="block lg:text-lg text-sm font-poppins font-light lg:mx-20 mx-10"
        >
          Kami menghadirkan solusi interior secara menyeluruh, bukan sekadar
          membangun ruang, tetapi menciptakan pengalaman dan identitas di dalamnya.
        </motion.span>
      </div>

      {/* Image Section */}
      <div className="grid md:grid-cols-[2fr_1fr] grid-cols-1 gap-8 mt-14 mx-10">

        {/* Large Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="relative bg-[url('/bg/bg-1.webp')] md:h-130 h-80 w-full rounded-md bg-cover bg-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/40 rounded-md" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute bg-white/10 backdrop-blur-xl rounded-md p-6 mx-5 bottom-5 flex flex-col gap-2 border border-white/30"
          >
            <span className="text-white font-bold text-sm md:text-base">
              Kebutuhan Interior
            </span>
            <p className="text-white font-light leading-5 text-xs md:text-base">
              Melayani berbagai kebutuhan interior untuk kantor, apartemen,
              toko, mall, institusi pendidikan, rumah sakit, rumah, villa,
              cafe, dan berbagai kebutuhan lainnya.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side Cards */}
        <div className="grid grid-cols-1 gap-6">
          
          {["Renovasi dan Rehabilitasi Interior", "Jasa Desain Interior"].map(
            (title, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative bg-[url('/bg/bg-1.webp')] h-62 rounded-md bg-cover bg-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/40 rounded-md" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="absolute bg-white/10 backdrop-blur-xl rounded-md py-4 px-6 mx-5 bottom-5 flex flex-col gap-2 w-fit border border-white/30"
                >
                  <span className="text-white font-bold text-center text-sm">
                    {title}
                  </span>
                </motion.div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </motion.section>
  )
}

export default Jasa