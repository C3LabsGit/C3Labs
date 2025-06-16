"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function MissionStatement() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      id="mission"
      className="pt-32 pb-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-radial from-blue-200 via-transparent to-transparent opacity-20"></div>
      <motion.div
        ref={ref}
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 className="text-4xl font-bold text-center text-gray-800 mb-8" variants={itemVariants}>
          Our Mission
        </motion.h2>
        <motion.p className="text-lg text-gray-600 leading-relaxed mb-6" variants={itemVariants}>
          The mission of Creative Code Collective Labs is to use technology to innovate and establish creative ways for
          individuals to express their art, ideas, and businesses while building community.
        </motion.p>
        <motion.p className="text-lg text-gray-600 leading-relaxed mb-6" variants={itemVariants}>
          With the low barrier of entry to use software as a service and the growing technological climate, people are
          online more than ever. However, we believe that technology is being underutilized, and individuals are being
          stripped of their true value.
        </motion.p>
        <motion.p className="text-lg text-gray-600 leading-relaxed mb-6" variants={itemVariants}>
          Our goal is to establish platforms and playgrounds where people can let their ideas roam free. We believe that
          those who establish a following or presence on the web should see that value directly, without big
          conglomerates masking that value with promises of short-term gain.
        </motion.p>
        <motion.p className="text-lg text-gray-600 leading-relaxed" variants={itemVariants}>
          Through our initiatives, people will be able to establish and generate revenue on their own terms, unleashing
          their full potential in the digital landscape.
        </motion.p>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
