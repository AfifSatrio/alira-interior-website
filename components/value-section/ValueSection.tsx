import { valueIcons } from "@/constants"
import Image from "next/image"

const ValueSection = () => {
  return (
    <div className="mx-auto max-w-6xl my-20">
        <h1 className="font-poppins font-bold lg:text-4xl text-3xl text-center mx-10 md:mx-0">Keunggulan Yang Membedakan Kami</h1>
        <div className="grid md:grid-cols-5 grid-cols-1 gap-8 mt-15">
            {valueIcons.map((index) => (
                <div key={index.id} className="flex flex-col items-center gap-4 mx-10 md:mx-5">
                    <Image src={index.icon} alt={index.alt} width={75} height={75} className="scale-95 md:scale-100"/>
                    <span className="text-center font-semibold text-sm lg:text-base px-20 md:px-0">{index.desc}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ValueSection