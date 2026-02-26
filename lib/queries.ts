import { groq } from "next-sanity"

export const highlightPortfolioQuery = groq`
  *[_type == "portfolio" && featured == true][0...5]{
    _id,
    title,
    coverImage
  }
`

export const siteSettingsQuery = groq `
  *[_type == "siteSettings" && _id == "siteSettings"][0]{
    tagline, 
    subtagline, 
    backgroundImage, 
    whatsappNumber, 
    email, 
    address
  }
`
export const seoSettingsQuery = groq `
  *[_type == "seoSettings" && _id == "seoSettings"][0]{
    seoTitle,
    seoDesc,
    seoImage
  }
`

export const aliraClients = groq `
  *[_type == "clients"]{
    _id,
    clientName,
    clientLogo
  }
`

export const portfolioQuery = groq `
  *[_type == "portfolio"] | order(_createdAt asc){
    _id,
    title,
    coverImage
  }
`