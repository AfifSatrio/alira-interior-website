import { portfolioHighlight } from "@/constants"
import Image from "next/image"

const ProjectsContentMd = () => {
  return (
    <div className="mx-auto w-full pt-10 pb-20 block lg:hidden">
        <h1 className="text-center text-3xl font-bold mx-10">
            Kumpulan Proyek Alira Interior
        </h1>
        <p className="text-center text-sm mx-10 mt-5">
            Di Alira Interior, setiap proyek adalah cerminan komitmen kami terhadap kualitas, ketelitian, dan daya tahan jangka panjang. Tidak hanya membangun interior baru, kami juga berpengalaman dalam rehabilitasi dan renovasi interior untuk meningkatkan fungsi, tampilan, serta nilai ruang yang sudah ada.
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-2 mt-10 mx-10">
            {portfolioHighlight.map((index) => (
                <Image src={index.image} alt={index.name} width={250} height={150} key={index.id} className="w-full h-auto object-cover"/>
            ))}
        </div>
    </div>
  )
}

export default ProjectsContentMd