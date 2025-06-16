"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"

export default function HeroSection() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Mission", href: "#mission" },
    { name: "Founders", href: "#founders" },
    { name: "Projects", href: "#projects" },
    { name: "Contact Us", href: "#contact" },
  ]

  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      e.preventDefault()
      const target = e.currentTarget as HTMLAnchorElement
      const href = target.getAttribute("href")
      if (href && href.startsWith("#")) {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll)
      })
    }
  }, [])

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-2 text-gray-900 font-bold text-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-02-20%2006.34.01%20-%20A%20sleek%20and%20minimalistic%20logo%20featuring%20the%20number%20'3'%20from%20the%20given%20design,%20with%20a%20lowercase%20'c'%20seamlessly%20integrated%20into%20it.%20The%20'c'%20should%20be%20cl-9679HnN6UFzAX3nyFkWFMzh6KvzCsW.webp"
                alt="C3 Labs Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span>Creative Code Collective Labs</span>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={item.href} className="text-gray-600 hover:text-gray-900 transition duration-300">
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 flex h-screen flex-col items-center justify-center px-4 text-center pt-16">
        <motion.h1
          className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Innovate Faster with
          <br />
          <span className="text-gray-400">C3 Labs</span>
        </motion.h1>

        <motion.p
          className="mb-8 max-w-2xl text-lg text-gray-600 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Building the future of technology, one project at a time
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#projects"
            className="inline-block px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300"
          >
            View Our Projects
          </Link>
          <Link
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
