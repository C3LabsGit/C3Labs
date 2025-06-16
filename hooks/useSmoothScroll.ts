"use client"

import { useEffect } from "react"

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault()
      const target = e.currentTarget as HTMLAnchorElement
      const href = target.getAttribute("href")

      if (href && href.startsWith("#")) {
        const element = document.querySelector(href)
        if (element) {
          const headerOffset = 80 // Height of your fixed header
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
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
}
