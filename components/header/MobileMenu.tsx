"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { navbarMenu } from "@/constants"
import Link from "next/link"

const MobileMenu = ({ pathname }: {isScrolled: boolean; pathname: string}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col items-end justify-center lg:hidden w-full">
      <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {isOpen ? <X size={26}/> : <Menu size={26}/>}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`absolute top-full right-0 bg-white shadow-lg overflow-hidden z-20 transition-all w-full`}
            >
              {navbarMenu.map((item, index) => {
                const isActive = pathname === item.href

                return (
                  <Link key={index} href={item.href} className={`font-poppins transition-all flex flex-col items-center py-3 shadow-xs ${ isActive ? "text-alira font-bold underline" : "text-black font-light"}`} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                )
              })}
          </motion.div>
          )}
        </AnimatePresence>
    </div>
  )
}

export default MobileMenu