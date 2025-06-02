"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown, Download, Send } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-primary font-medium">Hello, I'm</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">Manthan Patel</h1>
          <h3 className="text-xl md:text-2xl text-gray-300">Frontend Developer</h3>
          <p className="max-w-2xl mx-auto text-gray-400">
            Building elegant solutions to complex problems with clean, efficient code. Passionate about creating
            impactful digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              <Link href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-gray-600 text-white hover:bg-gray-800 px-6"
            >
              <Link href="#contact">
                <Send className="mr-2 h-4 w-4" /> Hire Me
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        >
          <Link href="#about">
            <ArrowDown className="animate-bounce h-6 w-6 text-gray-400" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
