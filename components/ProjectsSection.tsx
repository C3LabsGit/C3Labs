"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsSection() {
  const projects = [
    {
      name: "Game On",
      description:
        "Game On is an all-in-one sports and activity platform designed to bring together individuals, communities, and professionals in a single, easy-to-use space. By combining event organization, social engagement, and professional services into one app, Game On aims to streamline event management, foster community & discovery, empower professionals & businesses, and enhance user experience.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GO%20MS%203%20transp@4x-ehOlmDoEmoevVSEQGKOW52KjP3pHWy.png",
      link: "https://game-on-signup.replit.app/",
      features: [
        "Streamline Event Management",
        "Foster Community & Discovery",
        "Empower Professionals & Businesses",
        "Enhance User Experience",
      ],
    },
    {
      name: "Convenience",
      description:
        "Convenience is an AI-powered marketplace and operations suite designed to help convenience stores thrive in the digital age. Our platform streamlines operations, enhances customer experience, and provides powerful tools for modern retail management. By integrating with popular delivery platforms and providing comprehensive analytics, Convenience empowers store owners to compete effectively in today's market.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FBF38134-95DE-427B-B2B8-123492FF3761.PNG-e6EN3Bd1wbCce2QfIMYAMvFeTJJvNq.png",
      link: "https://v0-convenience.vercel.app/",
      features: [
        "AI-powered marketplace and operations management",
        "Seamless integrations with major delivery platforms",
        "SEO-optimized microsites for enhanced online presence",
        "Unified checkout and payment processing",
        "Centralized order management system",
        "Advanced analytics and marketing tools",
        "Smart inventory and staffing insights",
      ],
    },
  ]

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-100 via-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Projects
        </motion.h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3">
                  <div className="relative aspect-square">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      fill
                      className="rounded-lg object-contain"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-3xl font-bold text-gray-800">{project.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {project.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="text-gray-700 flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-6">
                    <Link
                      href={project.link}
                      className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
