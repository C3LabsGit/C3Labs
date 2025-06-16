"use client"

import dynamic from "next/dynamic"
import DotPattern from "@/components/ui/dot-pattern"

const HeroSection = dynamic(() => import("@/components/HeroSection"))
const MissionStatement = dynamic(() => import("@/components/MissionStatement"))
const FoundersSection = dynamic(() => import("@/components/FoundersSection"))
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"))
const ContactSection = dynamic(() => import("@/components/ContactSection"))
const Footer = dynamic(() => import("@/components/Footer"))

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <DotPattern />
      <div className="relative">
        <HeroSection />
        <MissionStatement />
        <FoundersSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
