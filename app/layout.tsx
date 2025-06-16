import type React from "react"
import { Toaster } from "sonner"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "C3 Labs - Creative Code Collective | Innovative Software Solutions",
  description:
    "C3 Labs is a creative technology company specializing in innovative software solutions. We build cutting-edge applications, platforms, and digital experiences that empower businesses and individuals.",
  keywords: "C3 Labs, Creative Code Collective, software development, innovative technology, digital solutions",
  openGraph: {
    title: "C3 Labs - Creative Code Collective | Innovative Software Solutions",
    description:
      "Empowering businesses and individuals with cutting-edge software and digital experiences. Explore our innovative solutions at C3 Labs.",
    url: "https://www.c3labs.co", // Replace with your actual domain
    siteName: "C3 Labs",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-02-20%2006.34.01%20-%20A%20sleek%20and%20minimalistic%20logo%20featuring%20the%20number%20'3'%20from%20the%20given%20design,%20with%20a%20lowercase%20'c'%20seamlessly%20integrated%20into%20it.%20The%20'c'%20should%20be%20cl-9679HnN6UFzAX3nyFkWFMzh6KvzCsW.webp",
        width: 1200,
        height: 1200,
        alt: "C3 Labs Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "C3 Labs - Innovative Software Solutions",
    description:
      "Empowering businesses and individuals with cutting-edge software and digital experiences. Explore our innovative solutions at C3 Labs.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-02-20%2006.34.01%20-%20A%20sleek%20and%20minimalistic%20logo%20featuring%20the%20number%20'3'%20from%20the%20given%20design,%20with%20a%20lowercase%20'c'%20seamlessly%20integrated%20into%20it.%20The%20'c'%20should%20be%20cl-9679HnN6UFzAX3nyFkWFMzh6KvzCsW.webp",
    ],
    creator: "@c3labs", // Replace with your actual Twitter handle
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
