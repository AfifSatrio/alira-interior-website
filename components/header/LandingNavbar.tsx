"use client"

import { useState, useEffect } from "react"
import Logo from "./Logo"
import LandingNavbarMenu from "./LandingNavbarMenu"
import LandingMobileMenu from "./LandingMobileMenu"

const LandingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

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
      <LandingNavbarMenu isScrolled={isScrolled} />
      <LandingMobileMenu />
    </div>
  )
}

export default LandingNavbar
