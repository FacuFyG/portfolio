import React from 'react'
import { Button } from './MovingBorders'
import { workExperience } from '@/data'

const WorkExperience = () => {
  return (
    <section className='pt-36 pb-44' id='Experience'>
        <div className='pb-20'>
            <h1 className='heading'>My <span className='text-purple'>Work Experience</span></h1>
        </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {workExperience.map((card)=>(
                    <Button key={card.id} className='' borderRadius='1.75rem' duration={Math.floor(Math.random() * 10000) + 10000}>
                    <div className='flex flex-row py-10 gap-4 px-4'>
                        <img src={card.thumbnail} alt={card.thumbnail} className=''/>
                        <div>
                            <h1 className='text-start text-xl font-bold md:text-2xl'>{card.title}</h1>
                            <p className='text-start text-white-100 mt-3 font-semibold'>{card.desc}</p>
                        </div>
                    </div>
                </Button>
                ))}
                
            </div>
        
    </section>
  )
}

export default WorkExperience