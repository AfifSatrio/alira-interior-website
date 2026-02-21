import Link from "next/link"
import ProyekPreview from "./ProyekPreview"

const Hero = () => {
  return (
    <div className="relative bg-[url('/bg/bg-1.webp')] h-screen w-full bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
            <div className="mt-15 lg:max-w-275 max-w-180 px-5 space-y-8">
                <h1 className="lg:text-[56px] text-4xl leading-[1.2] text-white font-dm-serif">
                    Presisi dalam Detail, Kekuatan dalam Konstruksi, dan Keindahan dalam Desain.
                </h1>
                <p className="lg:text-lg text-sm text-white/90 font-poppins">
                    Alira Interior menawarkan jasa kebutuhan interior, renovasi dan rehabilitasi interior, serta jasa desain interior dengan profesional, presisi, dan terjamin.
                </p>
            </div>
            <ProyekPreview />
            <Link className="mt-8 lg:px-10 px-8 lg:py-3 py-2 bg-white text-black rounded-full text-sm lg:text-base font-poppins font-bold hover:bg-black hover:text-white transition duration-300 cursor-pointer" href={"/portfolio"}>
                Lihat Semua Proyek
            </Link>
        </div>
    </div>
  )
}

export default Hero