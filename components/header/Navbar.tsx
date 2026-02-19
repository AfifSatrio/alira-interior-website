"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Logo from "./Logo"
import NavbarMenu from "./NavbarMenu"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
  
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`fixed grid grid-cols-[1.5fr_2fr_1.5fr] items-center text-center w-full px-10 py-6 z-50 transition-all ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
        <Logo isScrolled={isScrolled} />
        <NavbarMenu isScrolled={isScrolled} pathname={pathname} />
    </div>
  )
}

export default Navbar