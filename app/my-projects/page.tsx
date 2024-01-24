"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-center bg-cover overflow-auto relative'>
      <Image
        src="/mountains.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Background Image"
      />
      <div className='grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]'>
        {Projects.map((project, index) => (
          <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
              link={project.link}
          />
        ))}
      </div>
    </div>
  )
}

export default Page