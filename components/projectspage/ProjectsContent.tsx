import { portfolioQuery } from '@/lib/queries'
import { sanityClient } from '@/lib/sanity.client'
import ProjectsContentClient from './ProjectsContentClient'

const ProjectsContent = async () => {
  const projects = await sanityClient.fetch(portfolioQuery)
  return <ProjectsContentClient projects={projects}/>
}

export default ProjectsContent