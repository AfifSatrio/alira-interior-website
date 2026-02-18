import Logo from "./Logo"
import NavbarMenu from "./NavbarMenu"

const Navbar = () => {
  return (
    <div className="fixed grid grid-cols-[1.5fr_2fr_1.5fr] items-center text-center w-full px-10 py-10 bg-transparent z-50">
        <Logo />
        <NavbarMenu />
    </div>
  )
}

export default Navbar