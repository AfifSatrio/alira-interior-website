import { portfolioHighlight } from "@/constants"
import Counter from "../aboutpage/Counter"
import Image from "next/image"

const ProjectsContent = () => {
  return (
    <div className="mx-auto w-full lg:block hidden">
        <div className="grid grid-cols-3 mb-20 gap-1 mx-10">
            {portfolioHighlight.slice(0, 1).map((index) => (
                <div className="contents" key={index.id}>
                    <div className="flex flex-col items-end gap-1">
                        <div className="relative border-2 border-alira -z-10 px-8 py-8 -bottom-15 w-50 h-20 left-5"/>
                        <Image src={index.image} alt={index.name} width={300} height={360} className="relative object-cover h-[50vh]" />
                        <Image src={index.image} alt={index.name} width={300} height={360} className="relative object-cover h-[40vh]"/>
                    </div>
                    <div className="flex flex-col justify-end gap-1">
                        <div className="flex flex-col border-r-2 border-alira">
                            <h1 className="ml-10 font-bold text-2xl ">
                                Kumpulan Proyek Alira Interior
                            </h1>
                            <span className="ml-10 mr-5 mt-5 font-poppins text-sm">
                                Di Alira Interior, setiap proyek adalah cerminan komitmen kami terhadap kualitas, ketelitian, dan daya tahan jangka panjang. Tidak hanya membangun interior baru, kami juga berpengalaman dalam rehabilitasi dan renovasi interior untuk meningkatkan fungsi, tampilan, serta nilai ruang yang sudah ada.
                            </span>
                        </div>
                        <Image src={index.image} alt={index.name} width={500} height={100} className="relative object-cover h-60 mt-5"/>
                        <Image src={index.image} alt={index.name} width={500} height={100} className="relative object-cover h-60"/>
                    </div>
                    <div className="flex flex-col justify-end gap-1">
                        <div className="relative border-2 border-alira -z-10 px-8 py-8 -bottom-65 w-20 h-50 left-65"/>
                        <div className="flex flex-col items-center lg:items-start ml-5">
                            <h2 className="text-3xl lg:text-4xl font-black font-poppins">
                                <Counter target={50} />
                            </h2>
                            <span className="font-poppins font-medium text-sm lg:text-base">
                            Proyek Selesai
                            </span>
                        </div>
                        <Image src={index.image} alt={index.name} width={300} height={200} className="relative object-cover h-121 mt-5"/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProjectsContent