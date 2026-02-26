import ProjectPage from "@/components/projectspage/ProjectPage"
import ProjectsContent from "@/components/projectspage/ProjectsContent"
import { portfolioQuery } from "@/lib/queries"
import { sanityClient } from "@/lib/sanity.client"

const page = async () => {
  const projects = await sanityClient.fetch(portfolioQuery)
  return (
    <div>
        <ProjectPage />
        <ProjectsContent projects={projects}/>
    </div>
  )
}

export default page