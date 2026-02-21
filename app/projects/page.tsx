import ProjectPage from "@/components/projectspage/ProjectPage"
import ProjectsContent from "@/components/projectspage/ProjectsContent"
import ProjectsContentMd from "@/components/projectspage/ProjectsContentMd"

const page = () => {
  return (
    <div>
        <ProjectPage />
        <ProjectsContent />
        <ProjectsContentMd />
    </div>
  )
}

export default page