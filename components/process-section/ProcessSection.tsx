"use client"

import { processSteps } from "@/constants"
import { useState } from "react"
import Image from "next/image"

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(processSteps[0].id)

  const selectedData = processSteps.find((index) => index.id === activeStep)

  return (
    <div className="mx-auto max-w-6xl pb-20 pt-10">
        <h1 className="grid grid-cols-2 text-4xl font-black font-poppins leading-tight">Perjalanan Eksklusif Menuju Ruang yang Sempurna</h1>
        <div className="grid grid-cols-6 gap-4 mt-10">
          {processSteps.map((index) => (
            <div key={index.id} className="flex flex-row gap-4 items-center">
              <button className={`w-fit px-4 py-2 cursor-pointer transition-all ${activeStep === index.id ? "bg-black text-white" : "text-black bg-alira"}`} onClick={() => setActiveStep(index.id)}>
                {index.id}
              </button>
              <div className="bg-alira w-full h-0.5"/>
            </div>
          ))}
        </div>
      <div className="pt-10 flex flex-row gap-10">
        <Image src={selectedData?.image} alt={selectedData?.title} width={500} height={300} className="rounded-lg mb-6" />
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold font-poppins mb-4">
            {selectedData?.title}
          </h3>
          <p className="text-gray-600 leading-relaxed font-poppins">
            {selectedData?.desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProcessSection