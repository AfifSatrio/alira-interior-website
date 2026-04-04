import type { Metadata } from "next"
import { sanityClient } from "@/lib/sanity.client"
import { highlightPortfolioQuery, siteSettingsQuery } from "@/lib/queries"
import LandingNavbar from "@/components/header/LandingNavbar"
import Footer from "@/components/footer/Footer"
import WhatsappFloat from "@/components/WhatsappFloat"
import Hero from "@/components/hero-section/Hero"
import Jasa from "@/components/jasa-section/Jasa"
import VisiMisiSection from "@/components/aboutpage/VisiMisiSection"
import AboutPageContent from "@/components/aboutpage/AboutPageContent"
import ProjectSection from "@/components/project-section/ProjectSection"
import ValueSection from "@/components/value-section/ValueSection"
import ProcessSection from "@/components/process-section/ProcessSection"
import ClientSection from "@/components/client-section/ClientSection"
import TestimonialSection from "@/components/testimonial-section/TestimonialSection"
import ClosingStatement from "@/components/aboutpage/ClosingStatement"

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default async function LandingPage() {
  const projects = await sanityClient.fetch(highlightPortfolioQuery)
  const settings = await sanityClient.fetch(siteSettingsQuery)

  return (
    <>
      <LandingNavbar />

      <section id="hero">
        <Hero projects={projects} settings={settings} hideCta />
      </section>

      <section id="tentang">
        <AboutPageContent />
        <VisiMisiSection />
      </section>

      <section id="layanan">
        <Jasa hideCta />
      </section>

      <section id="portofolio">
        <ProjectSection hideCta />
      </section>

      <section id="keunggulan">
        <ValueSection />
      </section>

      <section id="proses">
        <ProcessSection />
      </section>

      <section id="klien">
        <ClientSection />
      </section>

      <section id="testimoni">
        <TestimonialSection />
      </section>

      <section id="kontak">
        <ClosingStatement />
      </section>

      <Footer settings={settings} />
      <WhatsappFloat phone={"6282326931783"} />
    </>
  )
}
