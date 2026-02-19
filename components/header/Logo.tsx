import Image from "next/image"

const Logo = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <div>
      <Image src={ isScrolled ? "/logo/logo.svg" : "/logo/logo-bnw.svg"} alt="Logo Alira Interior" width={80} height={50} />
    </div>
  )
}

export default Logo