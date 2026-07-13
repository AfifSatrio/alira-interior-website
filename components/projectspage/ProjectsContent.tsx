import ProjectsContentClient from './ProjectsContentClient'
import prisma from "@/lib/prisma"

const ProjectsContent = async () => {
  const projects = await prisma.portfolio.findMany({
    orderBy: { createdAt: 'asc' }
  })
  return <ProjectsContentClient projects={projects}/>
}

export default ProjectsContent