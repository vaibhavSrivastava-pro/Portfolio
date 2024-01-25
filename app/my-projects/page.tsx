"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import { motion } from 'framer-motion'
import ExperienceCard from '@/components/ExperienceCard'


const Page = () => {
  return (
    <div
    style={{backgroundImage: "url(/Mountains.jpg)"}}
     className='w-screen h-screen flex items-center justify-center bg-center bg-cover overflow-auto'>
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className='grid grid-cols-1 gap-5 max-w-[100%] max-h-[80%] '>
          <div className="flex justify-center">
        <h1 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 mb-4 border-b-4 border-gradient'>Work Experience</h1>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='grid grid-cols-1 gap-5 max-w-[100%] max-h-[100%] '>
          <ExperienceCard
            company='VisaKwik'
            role='Full Stack Developer'
            duration='Nov 2023 - Present'
            technologies='Next.js, Flask, SQL, Typescript, Python'
          /> 
        </motion.div>
        <div className="flex justify-center">
        <h2 className='flex justify-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 mb-4 border-b-4 border-gradient'>Projects</h2>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 4 }}
          className='grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[100%] max-h-[80%] '>
        {Projects.map((project, index) => (
          <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
              link={project.link}
          />
        ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Page