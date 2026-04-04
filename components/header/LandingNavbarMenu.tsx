import { landingNavMenu } from "@/constants"

const LandingNavbarMenu = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <nav className={`lg:block hidden relative z-10 py-3 w-full ${isScrolled ? "bg-transparent" : "bg-white/10 backdrop-blur-xl rounded-full border border-white/30"}`}>
      {landingNavMenu.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className={`font-poppins md:px-8 px-2 transition-all ${
            isScrolled ? "text-black" : "text-white font-light"
          }`}
        >
          {item.name}
        </a>
      ))}
    </nav>
  )
}

export default LandingNavbarMenu
