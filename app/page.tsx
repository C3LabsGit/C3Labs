import type { Metadata } from "next"
import HomePage from "./HomePage"

export const metadata: Metadata = {
  title: "C3 Labs - Creative Code Collective",
  description: "Innovating at the intersection of technology and creativity",
  openGraph: {
    title: "C3 Labs - Creative Code Collective",
    description: "Innovating at the intersection of technology and creativity",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-02-20%2006.34.01%20-%20A%20sleek%20and%20minimalistic%20logo%20featuring%20the%20number%20'3'%20from%20the%20given%20design,%20with%20a%20lowercase%20'c'%20seamlessly%20integrated%20into%20it.%20The%20'c'%20should%20be%20cl-9679HnN6UFzAX3nyFkWFMzh6KvzCsW.webp",
        width: 1200,
        height: 1200,
        alt: "C3 Labs Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "C3 Labs - Creative Code Collective",
    description: "Innovating at the intersection of technology and creativity",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-02-20%2006.34.01%20-%20A%20sleek%20and%20minimalistic%20logo%20featuring%20the%20number%20'3'%20from%20the%20given%20design,%20with%20a%20lowercase%20'c'%20seamlessly%20integrated%20into%20it.%20The%20'c'%20should%20be%20cl-9679HnN6UFzAX3nyFkWFMzh6KvzCsW.webp",
    ],
  },
}

export default function Page() {
  return <HomePage />
}
