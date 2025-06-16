"use client"

import type React from "react"
import { Mail, Instagram } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const email = "info@c3labs.co"
  const instagramUrl = "https://www.instagram.com/c3labs/?__d=1%2F"

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      window.location.href = `mailto:${email}`
    } catch (error) {
      navigator.clipboard.writeText(email)
      toast({
        title: "Email copied to clipboard",
        description: "The email address has been copied to your clipboard.",
      })
    }
  }

  return (
    <footer className="bg-white text-gray-900 py-8 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} Creative Code Collective Labs. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={handleEmailClick}
              className="flex items-center space-x-2 hover:text-gray-600 transition-colors bg-transparent border-none cursor-pointer"
            >
              <Mail size={20} />
              <span>{email}</span>
            </button>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-gray-600 transition-colors"
            >
              <Instagram size={20} />
              <span>@c3labs</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
