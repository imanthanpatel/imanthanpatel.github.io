"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="bg-gray-900 py-20">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-4 translate-y-4"></div>
            <div className="relative h-full w-full overflow-hidden rounded-lg bg-gray-800">
              <Image src="/placeholder.svg?height=400&width=400" alt="Manthan" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Full Stack Developer & Problem Solver</h3>
            <p className="text-gray-300">
              I'm a passionate Full Stack Developer with expertise in building responsive and performant web
              applications. With a strong foundation in both frontend and backend technologies, I enjoy creating
              seamless user experiences that solve real-world problems.
            </p>
            <p className="text-gray-300">
              My journey in software development began with a curiosity about how digital products work, which evolved
              into a deep passion for crafting elegant solutions. I'm constantly learning and adapting to new
              technologies to stay at the forefront of web development.
            </p>
            <div className="grid grid-cols-2 gap-4 text-gray-300">
              <div>
                <p className="font-medium">Name:</p>
                <p>Manthan Patel</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p>manthan002408@gmail.com</p>
              </div>
              <div>
                <p className="font-medium">From:</p>
                <p>India</p>
              </div>
              <div>
                <p className="font-medium">Freelance:</p>
                <p>Available</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
