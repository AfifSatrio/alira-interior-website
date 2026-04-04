import Navbar from "@/components/header/Navbar"
import Footer from "@/components/footer/Footer"
import WhatsappFloat from "@/components/WhatsappFloat"
import Hero from "@/components/hero-section/Hero"
import Jasa from "@/components/jasa-section/Jasa"
import ProcessSection from "@/components/process-section/ProcessSection"
import ProjectSection from "@/components/project-section/ProjectSection"
import ValueSection from "@/components/value-section/ValueSection"
import ClientSection from "@/components/client-section/ClientSection"
import BlogSection from "@/components/blog-section/BlogSection"
import { sanityClient } from "@/lib/sanity.client"
import { highlightPortfolioQuery, siteSettingsQuery } from "@/lib/queries"
import ClosingStatement from "@/components/aboutpage/ClosingStatement"
import TestimonialSection from "@/components/testimonial-section/TestimonialSection"

export default async function HomePage() {
  const projects = await sanityClient.fetch(highlightPortfolioQuery)
  const settings = await sanityClient.fetch(siteSettingsQuery)

  return (
    <>
      <Navbar />
      <Hero projects={projects} settings={settings} />
      <Jasa />
      <ProjectSection />
      <ValueSection />
      <ProcessSection />
      <ClientSection />
      <TestimonialSection />
      <BlogSection />
      <ClosingStatement />
      <Footer settings={settings} />
      <WhatsappFloat phone={"6282326931783"} />
    </>
  )
}
