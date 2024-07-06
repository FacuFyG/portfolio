import { projects } from '@/data'
import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/CardContainer'
import Image from 'next/image'
import { FaCode

 } from 'react-icons/fa'
const Projects = () => {
  return (

    <section className='pt-20' id='project'>

    <div className='flex flex-row items-center justify-center gap-4 2xl:pt-24'>
    <FaCode className='heading'/>
      <h1 className='text-center font-bold heading'>Some of my <span className='text-purple'>Projects</span></h1>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8 sm:p-4'>
      {projects.map((project, id) => (
        <CardContainer key={id} className="inter-var max-w-full">
          <CardBody className="bg-gray-50 group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {project.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {project.des}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={project.img}
                height={1000}
                width={1000}
                className="h-60 w-full object-contain rounded-md group-hover/card:shadow-xl grayscale group-hover/card:grayscale-0"
                alt="thumbnail"
              />
            </CardItem>
            <div className='flex space-x-4'>
            {project.icons.map((icon, index) => (
          <img key={index} src={icon} alt={`icon-${index}`} className='w-6 mt-4' />
        ))}
      </div>
            <div className="flex justify-between items-center mt-16">
              <CardItem
                translateZ={20}
                href={project.link}
                target="_blank"
                as='a'
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white bg-black-200 hover:bg-blue-900"
              >
                GitHub
              </CardItem>
              
              <CardItem
                translateZ={20}
                as="a"
                target="_blank"
                href={project.site}
                className="px-4 py-2 rounded-xl text-black text-xs font-bold bg-white hover:bg-gray-600 hover:text-white"
              >
                Sitio
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
    </section>
  )
}

export default Projects

