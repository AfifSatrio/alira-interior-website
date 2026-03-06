"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export interface ServiceItem {
  _id: string
  item: string
  image: any
  order: number
}

const LayananDropDown = ({
  services,
  selected,
  setSelected,
}: {
  services: ServiceItem[]
  selected: ServiceItem
  setSelected: (item: ServiceItem) => void
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (item: ServiceItem) => {
    setSelected(item)
    setIsOpen(false)
  }

  return (
    <div className="w-1/2 font-poppins">
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-sm text-gray-700 hover:text-alira transition-colors duration-300 cursor-pointer"
      >
        <span>{selected.item}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-alira" : ""}`}
        />
      </button>

      {/* Divider */}
      <div className="mt-2 h-px w-full bg-gray-200" />

      {/* Dropdown */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="overflow-hidden"
          >
            {services.map((jasa) => (
              <li
                key={jasa._id}
                onClick={() => handleSelect(jasa)}
                className={`flex items-center gap-2.5 py-2 text-xs border-b border-gray-100 last:border-0 cursor-pointer transition-colors duration-200 ${
                  selected._id === jasa._id
                    ? "text-alira font-medium"
                    : "text-gray-500 hover:text-alira"
                }`}
              >
                <span className={`w-1 h-1 rounded-full shrink-0 ${selected._id === jasa._id ? "bg-alira" : "bg-gray-300"}`} />
                {jasa.item}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LayananDropDown