import Link from "next/link"
import ProjectHighlight from "./ProjectHighlight"

const ProjectSection = () => {
  return (
    <div className="mx-auto py-10 bg-primary">
      <div className="text-center flex flex-col gap-4 mx-auto max-w-275">
        <h1 className="text-4xl font-poppins font-black text-center px-80 leading-normal">Kumpulan Proyek Alira Interior</h1>
        <span className="block text-lg font-poppins font-light">Tidak hanya membangun interior baru, kami juga berpengalaman dalam rehabilitasi dan renovasi interior untuk meningkatkan fungsi, tampilan, serta nilai ruang yang sudah ada.</span>
      </div>
      <ProjectHighlight />
      <div className="w-full flex justify-center">
        <Link className="px-10 py-3 bg-white text-black rounded-full font-poppins font-bold hover:bg-black hover:text-white transition duration-300 cursor-pointer" href={"/portfolio"}>
              Lihat Semua Proyek
        </Link>
      </div>
    </div>
  )
}

export default ProjectSection