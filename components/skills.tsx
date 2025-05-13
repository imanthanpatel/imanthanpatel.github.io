"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Layout, Server, Terminal, Wrench } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="h-8 w-8 text-primary" />,
      items: [
        { name: "React", proficiency: 90 },
        { name: "Next.js", proficiency: 85 },
        { name: "TypeScript", proficiency: 80 },
        { name: "Tailwind CSS", proficiency: 95 },
      ],
    },
    {
      category: "Backend",
      icon: <Server className="h-8 w-8 text-primary" />,
      items: [
        { name: "Node.js", proficiency: 85 },
        { name: "Express", proficiency: 80 },
        { name: "Python", proficiency: 75 },
        { name: "Django", proficiency: 70 },
      ],
    },
    {
      category: "Database",
      icon: <Database className="h-8 w-8 text-primary" />,
      items: [
        { name: "MongoDB", proficiency: 85 },
        { name: "PostgreSQL", proficiency: 80 },
        { name: "Firebase", proficiency: 75 },
        { name: "Redis", proficiency: 65 },
      ],
    },
    {
      category: "Tools & Others",
      icon: <Wrench className="h-8 w-8 text-primary" />,
      items: [
        { name: "Git", proficiency: 90 },
        { name: "Docker", proficiency: 75 },
        { name: "AWS", proficiency: 70 },
        { name: "CI/CD", proficiency: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="bg-gray-800 py-20">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world. Here's an overview of my technical
            skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-6">
                {skillGroup.icon}
                <h3 className="text-xl font-bold ml-3">{skillGroup.category}</h3>
              </div>

              <div className="space-y-5">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: `${skill.proficiency}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center"
        >
          {[
            { name: "HTML5", icon: <Globe className="h-8 w-8 mx-auto" /> },
            { name: "CSS3", icon: <Layout className="h-8 w-8 mx-auto" /> },
            { name: "JavaScript", icon: <Code className="h-8 w-8 mx-auto" /> },
            { name: "Git", icon: <Terminal className="h-8 w-8 mx-auto" /> },
            { name: "REST API", icon: <Server className="h-8 w-8 mx-auto" /> },
            { name: "GraphQL", icon: <Database className="h-8 w-8 mx-auto" /> },
          ].map((item) => (
            <div
              key={item.name}
              className="bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-primary/20 transition-shadow"
            >
              {item.icon}
              <p className="mt-2 text-gray-300">{item.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
