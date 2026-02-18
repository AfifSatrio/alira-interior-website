import { navbarMenu } from "@/constants"
import Link from "next/link"

const NavbarMenu = () => {
  return (
    <nav className="relative z-10 py-3 w-full bg-white/10 backdrop-blur-xl rounded-full border border-white/30">
      {navbarMenu.map((item, index) => (
        <Link key={index} href={item.href} className="text-white font-poppins font-light rounded-full mx-8">
          {item.name}
        </Link>
      ))}
    </nav>
  )
}

export default NavbarMenu