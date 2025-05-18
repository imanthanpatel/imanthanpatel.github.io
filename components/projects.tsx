"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment integration.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["HTML","CSS","JavaScript"],
      liveLink: "https://iecommerceweb.github.io/",
      githubLink: "https://github.com/iEcommerceweb/iEcommerceweb.github.io",
    },
    {
      title: "Airport Navagation System",
      description:
        "Developed an interactive airport gate navigation system using React.js, providing users with a visual interface to explore airport terminals and gate locations.Implemented dynamic UI components for terminal and gate selection, ensuring responsive design and smooth user experience.Utilized React Router and state management to enable seamless navigation between different sections of the airport.Focused on modular component structure and clean UI/UX design to enhance usability and scalability.",


      image: "/air.png",
      tags: ["React", "Node.js", ],
      liveLink: "https://airport-ui.vercel.app",
      githubLink: "https://github.com/imanthan/airport-ui",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Firebase", "Tailwind CSS", "React Query"],
      liveLink: "https://project2.example.com",
      githubLink: "https://github.com/manthan/project2",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website template for developers to showcase their work and skills.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://project3.example.com",
      githubLink: "https://github.com/manthan/project3",
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "OpenWeather API", "Chart.js"],
      liveLink: "https://project4.example.com",
      githubLink: "https://github.com/manthan/project4",
    },
  ]

  return (
    <section id="projects" className="bg-gray-900 py-20">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project reflects my skills and experience in different
            technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="relative h-60 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-gray-600 hover:bg-gray-700"
                    size="sm"
                  >
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                  <Button asChild className="rounded-full bg-primary hover:bg-primary/90" size="sm">
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
