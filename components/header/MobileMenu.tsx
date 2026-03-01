"use client"

import { AnimatePresence, motion, Variants } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { navbarMenu } from "@/constants"
import Link from "next/link"

const menuVariants: Variants = {
  closed: {
    clipPath: "inset(0% 0% 100% 0%)",
    opacity: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
  open: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
}

const iconVariants = {
  initial: { rotate: -90, opacity: 0, scale: 0.5 },
  animate: {
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" as const },
  },
  exit: {
    rotate: 90,
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.15, ease: "easeIn" as const },
  },
}

const MobileMenu = ({ pathname }: { isScrolled: boolean; pathname: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col items-end justify-center lg:hidden w-full">
      {/* Toggle button — icon swap dengan animasi */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer relative w-7 h-7 flex items-center justify-center"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute"
            >
              <X size={26} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute"
            >
              <Menu size={26} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-full right-0 bg-white shadow-lg overflow-hidden z-20 w-full"
          >
            {navbarMenu.map((item, index) => {
              const isActive = pathname === item.href

              return (
                <div key={index}>
                  <Link
                    href={item.href}
                    className={`font-poppins flex flex-col items-center py-3 shadow-xs transition-colors ${
                      isActive ? "text-alira font-bold underline" : "text-black font-light"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileMenu