import { valueIcons } from "@/constants"
import { div } from "framer-motion/client"
import Image from "next/image"

const ValueSection = () => {
  return (
    <div className="mx-auto max-w-6xl my-20">
        <h1 className="font-poppins font-bold text-4xl text-center">Keunggulan Yang Membedakan Kami</h1>
        <div className="grid grid-cols-5 gap-8 mt-15">
            {valueIcons.map((index) => (
                <div key={index.id} className="flex flex-col items-center gap-4">
                    <Image src={index.icon} alt={index.alt} width={75} height={75} />
                    <span className="text-center font-semibold">{index.desc}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ValueSection