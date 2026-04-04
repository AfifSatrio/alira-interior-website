import type { Metadata } from "next";
import { DM_Serif_Display, Poppins } from "next/font/google";
import "./globals.css";
import { sanityClient } from "@/lib/sanity.client";
import { seoSettingsQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity.image";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const dm_serif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export async function generateMetadata(): Promise<Metadata> {
  const seoSettings = await sanityClient.fetch(seoSettingsQuery)
  const favicon = seoSettings?.seoImage ? urlFor(seoSettings.seoImage).width(64).height(64).url() : undefined
  const ogImage = seoSettings?.seoImage ? urlFor(seoSettings.seoImage).width(1200).height(630).url() : undefined

  return {
    title: {
      template: `%s`,
      default: seoSettings?.seoTitle ?? 'Website',
    },
    description: seoSettings?.seoDesc,
    icons: {
      icon: favicon
    },
    openGraph: {
      title: seoSettings?.seoTitle,
      description: seoSettings?.seoDesc,
      images: ogImage ? [ogImage] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: seoSettings?.seoTitle,
      description: seoSettings?.seoDesc,
      images: ogImage ? [ogImage] : [],
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="https://www.alirainterior.com/favicon.ico" />
      </head>
      <body className={`${dm_serif.variable} ${poppins.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
