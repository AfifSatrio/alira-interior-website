import Link from "next/link"
import { sanityClient } from "@/lib/sanity.client"
import { highlightPortfolioQuery } from "@/lib/queries"
import ProjectHighlight from "./ProjectHighlight"

export const revalidate = 60

const ProjectSection = async ({ hideCta }: { hideCta?: boolean } = {}) => {
  const projects = await sanityClient.fetch(highlightPortfolioQuery)

  return (
    <section className="mx-auto py-24 bg-alira">
      <div className="text-center flex flex-col gap-4 mx-auto max-w-5xl px-6">
        <h1 className="lg:text-4xl text-3xl font-poppins font-black leading-normal">
          Kumpulan Proyek Alira Interior
        </h1>

        <span className="block lg:text-lg text-sm font-poppins font-light">
          Tidak hanya membangun interior baru, kami juga berpengalaman dalam
          rehabilitasi dan renovasi interior untuk meningkatkan fungsi,
          tampilan, serta nilai ruang yang sudah ada.
        </span>
      </div>

      <div className="mt-14">
        <ProjectHighlight projects={projects} />
      </div>

      {!hideCta && (
        <div className="w-full flex justify-center mt-10">
          <Link
            href={"/projects"}
            className="lg:px-10 px-8 lg:py-3 py-2 bg-white text-black rounded-full text-sm lg:text-base font-poppins font-bold hover:bg-black hover:text-white transition duration-300"
          >
            Lihat Semua Proyek
          </Link>
        </div>
      )}
    </section>
  )
}

export default ProjectSection