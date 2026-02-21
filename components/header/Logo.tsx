import Image from "next/image"

const Logo = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <div className="flex items-center">
      <Image
        src={"/logo/logo.svg"}
        alt="Logo Alira Interior"
        width={100}
        height={60}
        className="scale-75 lg:hidden"
      />
      <Image
        src={isScrolled ? "/logo/logo.svg" : "/logo/logo-bnw.svg"}
        alt="Logo Alira Interior"
        width={100}
        height={60}
        className="hidden lg:block scale-100 transition-all"
      />
    </div>
  )
}

export default Logo