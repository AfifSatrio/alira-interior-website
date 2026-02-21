"use client"

import { processSteps } from "@/constants"
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(processSteps[0].id)

  const selectedData = processSteps.find(
    (step) => step.id === activeStep
  )

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mx-auto max-w-6xl pb-24 pt-16 px-6"
    >
      {/* Heading */}
      <motion.h1
        variants={itemVariants}
        className="lg:text-4xl text-3xl font-black font-poppins leading-tight mb-12"
      >
        Perjalanan Eksklusif Menuju Ruang yang Sempurna
      </motion.h1>

      {/* Step Navigation */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-6 gap-4 mb-12"
      >
        {processSteps.map((step) => (
          <div key={step.id} className="flex items-center gap-4">
            <button
              onClick={() => setActiveStep(step.id)}
              className={`px-4 py-2 transition-all duration-300 cursor-pointer
                ${
                  activeStep === step.id
                    ? "bg-black text-white"
                    : "bg-alira text-black hover:bg-black hover:text-white"
                }
              `}
            >
              {step.id}
            </button>
            <div className="bg-alira w-full h-0.5 hidden md:block" />
          </div>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        {selectedData && (
          <motion.div
            key={selectedData.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col lg:flex-row gap-10 items-start"
          >

            <div className="lg:block hidden shrink-0">
              <Image
                src={selectedData.image}
                alt={selectedData.title}
                width={500}
                height={300}
                className="rounded-lg w-125 h-auto"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="lg:text-2xl text-xl font-bold font-poppins mb-4">
                {selectedData.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-poppins lg:text-base text-sm">
                {selectedData.desc}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

export default ProcessSection