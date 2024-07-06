import React from 'react'
import Image from 'next/image'
import { px } from 'framer-motion'

const About = () => {
  return (
    <section className='pt-28' id='about'>
        <div>
            <h1 className='heading'>About <span className='text-purple'>Me</span></h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 sm:py-20 sm:px-40 sm:gap-[400px] sm:text-left'>
              <div className='sm:min-w-[640px]'>
              <p className='py-4'>My name is Facundo Frasca, I am a third-year Systems Engineering student and a Freelance Frontend Developer, currently training to become <span className='text-purple'>Fullstack</span>. </p>
              <p className='py-4'>I have experience developing websites with <span className='text-purple'>attractive</span> and <span className='text-purple'>elegant</span> user interfaces, having successfully completed several projects for clients with proactive communication from the development phase to the deployment phase.</p>
              <p className='py-4 pb-10'>My goal is to grow in the <span className='text-purple'>IT</span> world, I am a fast learner and proactive when it comes to teamwork, looking to gain experience and learn more about the beautiful <span className='text-purple'>world of programming</span>.</p>

              </div>  
              <div className=''>
                <Image src="/assets/foto.jpg" alt="" width={320} height={320} className='w-80 border-gray-800 border-[8px] sm:rotate-6 rounded-2xl'/>
              </div>     
            </div>
        </div>
    </section>
  )
}

export default About