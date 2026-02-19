import { navbarMenu } from "@/constants"
import Link from "next/link"

const NavbarMenu = ({ isScrolled, pathname }: { isScrolled: boolean; pathname: string }) => {
  return (
    <nav className={`relative z-10 py-3 w-full ${isScrolled ? "bg-transparent" : "bg-white/10 backdrop-blur-xl rounded-full border border-white/30"}`}>
      {navbarMenu.map((item, index) => {
        const isActive = pathname === item.href

        return (
          <Link key={index} href={item.href} className={`font-poppins px-8 transition-all ${ isScrolled ? isActive ? "text-primary font-bold underline" : "text-black" : isActive ? "text-white font-bold" : "text-white font-light" }`}>
            {item.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default NavbarMenu