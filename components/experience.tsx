"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"

export default function Experience() {
  const workExperience = [
    // {
    //   title: "Senior Frontend Developer",
    //   company: "Tech Innovations Inc.",
    //   period: "2021 - Present",
    //   description:
    //     "Lead the frontend development team in building responsive and accessible web applications. Implemented modern React patterns and optimized performance.",
    // },
    // {
    //   title: "Full Stack Developer",
    //   company: "Digital Solutions Ltd.",
    //   period: "2019 - 2021",
    //   description:
    //     "Developed full-stack applications using React, Node.js, and MongoDB. Collaborated with designers and product managers to deliver high-quality products.",
    // },
    // {
    //   title: "Junior Web Developer",
    //   company: "WebCraft Agency",
    //   period: "2017 - 2019",
    //   description:
    //     "Built responsive websites and implemented UI designs. Worked with HTML, CSS, JavaScript, and various frontend frameworks.",
    // },
  ]

  const education = [
    {
      degree: "BTech of Computer Science",
      institution: "GSFC University",
      period: "2024 - 2028",
      description: "UnderGraduated ",
    },
    // {
    //   degree: "Bachelor of Computer Applications",
    //   institution: "Digital College",
    //   period: "2012 - 2015",
    //   description: "Focused on programming fundamentals, data structures, and web development basics.",
    // },
  ]

  return (
    <section id="experience" className="bg-gray-800 py-20">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            {/* <div className="relative border-l-2 border-gray-600 pl-8 ml-3 space-y-10">
              {/* {workExperience.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="relative"
                >
                  <div className="absolute -left-11 top-0 h-6 w-6 rounded-full bg-primary border-4 border-gray-800"></div>
                  <div className="bg-gray-900 p-5 rounded-lg shadow-md">
                    <h4 className="text-lg font-bold">{job.title}</h4>
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>{job.company}</span>
                      <span>{job.period}</span>
                    </div>
                    <p className="text-gray-300">{job.description}</p>
                  </div>
                </motion.div>
              ))}
            </div> */} 
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="relative border-l-2 border-gray-600 pl-8 ml-3 space-y-10">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="relative"
                >
                  <div className="absolute -left-11 top-0 h-6 w-6 rounded-full bg-primary border-4 border-gray-800"></div>
                  <div className="bg-gray-900 p-5 rounded-lg shadow-md">
                    <h4 className="text-lg font-bold">{edu.degree}</h4>
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>{edu.institution}</span>
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
