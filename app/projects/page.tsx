import type { Metadata } from "next"
import ProjectPageHeader from "@/components/projectspage/ProjectPageHeader"
import ProjectsContent from "@/components/projectspage/ProjectsContent"

export const metadata: Metadata = {
  title: 'Proyek - Alira Interior'
}

const page = () => {
  return (
    <div>
        <ProjectPageHeader />
        <ProjectsContent />
    </div>
  )
}

export default page