import Image from "next/image";

interface Settings {
    whatsappNumber: string
    email: string
    address: string
}

const Footer = ({ settings }: { settings: Settings }) => {
  return (
    <div className="pt-10 mx-auto w-full flex flex-col bg-white text-black border-t border-alira">
        <div className="grid md:grid-cols-[1fr_2fr_1fr] grid-cols-1 gap-10 mx-15">
            <div className="flex flex-col gap-4 items-center md:items-start">
                <Image src={"/logo/footer-logo.svg"} alt={"footer logo"} width={150} height={100} className="scale-90 lg:scale-100 justify-end"/>
                <div className="flex flex-row gap-2">
                    <a
                        href="https://www.instagram.com/alira.interior?igsh=MXJudW90bDJkcDkzaw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2.5 w-fit"
                        >
                        <span className="w-8 h-8 rounded-full border bg-alira flex items-center justify-center group-hover:border-alira group-hover:bg-alira/10 transition-all duration-300">
                            <i className="ri-instagram-line text-sm text-white group-hover:text-alira transition-colors duration-300" />
                        </span>
                    </a>
                    <a
                        href="https://www.tiktok.com/@alirainterior_07?_r=1&_t=ZS-94R2dTWY4rS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2.5 w-fit"
                        >
                        <span className="w-8 h-8 rounded-full border bg-alira flex items-center justify-center group-hover:border-alira group-hover:bg-alira/10 transition-all duration-300">
                            <i className="ri-tiktok-fill text-sm text-white group-hover:text-alira transition-colors duration-300" />
                        </span>
                    </a>
                </div>
            </div>
            <div className="flex flex-col font-poppins gap-2">
                <h1 className="font-bold text-lg">Punya Pertanyaan?</h1>
                <span className="font-light text-sm">Sampaikan kepada kami atau minta konsultasi seputar desain interior</span>
            </div>
            <div className="flex flex-col font-poppins gap-2">
                <h1 className="font-bold text-lg">
                    Hubungi Kami
                </h1>
                <span className="font-light text-sm">{settings?.whatsappNumber}</span>
                <span className="font-light text-sm">{settings?.email}</span>
                <span className="font-light text-sm">{settings?.address}</span>
            </div>
        </div>
        <span className="font-light md:text-sm font-poppins mt-10 text-center mb-5 text-xs">©2026 Copyright Alira Interior. All rights Reserved.</span>
    </div>
  )
}

export default Footer