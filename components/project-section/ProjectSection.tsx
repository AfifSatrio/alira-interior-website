import Link from "next/link"
import ProjectHighlight from "./ProjectHighlight"

const ProjectSection = () => {
  return (
    <div className="mx-auto py-10 bg-alira">
      <div className="text-center flex flex-col gap-4 mx-auto max-w-275">
        <h1 className="lg:text-4xl text-3xl font-poppins font-black text-center lg:px-80 px-20 leading-normal">Kumpulan Proyek Alira Interior</h1>
        <span className="block lg:text-lg text-sm font-poppins font-light mx-10">Tidak hanya membangun interior baru, kami juga berpengalaman dalam rehabilitasi dan renovasi interior untuk meningkatkan fungsi, tampilan, serta nilai ruang yang sudah ada.</span>
      </div>
      <ProjectHighlight />
      <div className="w-full flex justify-center">
        <Link className="mt-8 lg:px-10 px-8 lg:py-3 py-2 bg-white text-black rounded-full text-sm lg:text-base font-poppins font-bold hover:bg-black hover:text-white transition duration-300 cursor-pointer" href={"/portfolio"}>
                Lihat Semua Proyek
        </Link>
      </div>
    </div>
  )
}

export default ProjectSection