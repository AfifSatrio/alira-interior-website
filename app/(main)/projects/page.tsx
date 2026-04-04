import type { Metadata } from "next"
import ProjectPageHeader from "@/components/projectspage/ProjectPageHeader"
import ProjectsContent from "@/components/projectspage/ProjectsContent"
import ClosingStatement from "@/components/aboutpage/ClosingStatement"

export const metadata: Metadata = {
  title: 'Proyek - Alira Interior'
}

const page = () => {
  return (
    <div>
        <ProjectPageHeader />
        <ProjectsContent />
        <ClosingStatement />
    </div>
  )
}

export default page
