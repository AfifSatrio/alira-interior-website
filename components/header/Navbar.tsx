"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Logo from "./Logo"
import NavbarMenu from "./NavbarMenu"
import MobileMenu from "./MobileMenu"

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
    <div className={`fixed grid lg:grid-cols-[1.5fr_2fr_1.5fr] grid-cols-2 items-center text-center w-full px-10 lg:py-5 py-4 z-50 transition-all bg-white ${isScrolled ? "lg:bg-white lg:shadow-md" : "lg:bg-transparent"}`}>
        <Logo isScrolled={isScrolled} />
        <NavbarMenu isScrolled={isScrolled} pathname={pathname}/>
        <MobileMenu isScrolled={isScrolled} pathname={pathname}/>
    </div>
  )
}

export default Navbar