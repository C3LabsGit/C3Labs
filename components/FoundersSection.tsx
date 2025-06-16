"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ImageOff } from "lucide-react"

export default function FoundersSection() {
  const [expandedFounder, setExpandedFounder] = useState<string | null>(null)
  const [imageError, setImageError] = useState<Record<string, boolean>>({})

  const founders = [
    {
      name: 'Chukwuemeka "Chuks" Iroegbu, MBA',
      role: "Co-Founder & CEO",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1061%202.jpg-6tqBRqaJrLJv0Ca9jS11tnhYtGynhc.jpeg",
      shortBio:
        "Chuks Iroegbu is a seasoned IT specialist and cybersecurity professional with extensive experience in enterprise resource planning (ERP), security operations, and data analytics.",
      fullBio:
        "Education: MBA (CSU Monterey Bay), B.S. Economics (NIU), A.A. (CCSF). Athletics: Played at CCSF; earned a Division I scholarship to NIU. Chuks Iroegbu is a seasoned IT specialist and cybersecurity professional with extensive experience in enterprise resource planning (ERP), security operations, and data analytics. With a proven track record in both the public and private sectors, he has played a key role in optimizing financial systems, deploying enterprise security solutions, and streamlining IT operations. At the State of California Fi$Cal, Chuks has been instrumental in managing ERP PeopleSoft financial modules, resolving complex technical issues, and ensuring seamless financial operations for state departments. His expertise spans accounts payable, purchasing, general ledger, and labor distribution, with a strong focus on process automation and functional testing. During his tenure at Deepwatch, Chuks specialized in enterprise security operations, leveraging Splunk Enterprise to monitor and analyze security threats. He successfully onboarded multiple clients, developed custom security alerts and dashboards, and provided 24/7 operational support to safeguard enterprise systems. With certifications in Splunk Enterprise Deployment & Administration, Chuks continues to drive efficiency, security, and innovation in IT operations.",
    },
    {
      name: "Uchenna Iroegbu",
      role: "Co-Founder & COO",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ucheadshot-EDiPKSbwP7yuoc5nu8mFWk92sAwSoK.jpeg",
      shortBio:
        "Uchenna 'U.C.' Iroegbu is a professional basketball player, business development consultant, and co-founder of C3 Labs with international experience across multiple leagues.",
      fullBio:
        "Pro career: Stockton Kings (G League), CP La Roda (LEB Plata), Rivers Hoopers (BAL), College Park Skyhawks (G League '21–22), SLAC (BAL '23), Al-Shamal (QBL & WASL), Nairobi City Thunder (KBF & BAL '24–25). Uchenna 'U.C.' Iroegbu is a professional basketball player, business development consultant, and co-founder of C3 Labs. Currently playing for Nairobi City Thunder in the Kenyan KBF Premier League, he has competed internationally in the NBA G League, Basketball Africa League (BAL), and West Asia Super League (WASL). As a dynamic point guard, Uchenna has represented Nigeria's national team and played collegiately at Stony Brook University. His professional career has taken him across the U.S., Spain, Nigeria, Qatar, Guinea, and Kenya, earning a reputation as a skilled playmaker and leader. Off the court, Uchenna applies his strategic mindset and leadership skills to business development. With a Bachelor's degree in Business Administration and Management from Stony Brook University, he has helped companies identify growth opportunities, optimize operations, and scale effectively. At C3 Labs, he oversees operations and business development, ensuring seamless project execution and resource optimization.",
    },
  ]

  const toggleBio = (name: string) => {
    setExpandedFounder(expandedFounder === name ? null : name)
  }

  const handleImageError = (name: string) => {
    setImageError((prev) => ({ ...prev, [name]: true }))
  }

  return (
    <section id="founders" className="py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Our Team
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl shadow-2xl p-8"
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 bg-gradient-to-b from-gray-700 to-gray-900 p-1 relative">
                  {imageError[founder.name] ? (
                    <div className="w-full h-full flex items-center justify-center bg-gray-800">
                      <ImageOff className="w-12 h-12 text-gray-400" />
                    </div>
                  ) : (
                    <Image
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      width={200}
                      height={200}
                      className="rounded-full object-cover"
                      onError={() => handleImageError(founder.name)}
                    />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{founder.name}</h3>
                <p className="text-gray-400 mb-6">{founder.role}</p>
                <div className="text-gray-300 text-center leading-relaxed mb-4">
                  {expandedFounder === founder.name ? founder.fullBio : founder.shortBio}
                </div>
                <Button onClick={() => toggleBio(founder.name)} variant="outline" className="mt-4">
                  {expandedFounder === founder.name ? "Show Less" : "Learn More"}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
