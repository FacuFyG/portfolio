import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Contact = () => {
  return (
   <section id='contact' className='py-36 '>
    <div className='flex flex-col items-center gap-10 text-center py-6 px-4 sm:py-10 sm:px-20 rounded-2xl bg-black-200'>
        <h1 className='heading'>Ready to take  <span className='text-purple'>your</span> digital presence to the next level?</h1>
        <p className='text-white-200 text-xl'>Reach me out and discuss about how i can help you reach your goals</p>
        <a href="mailto:facundofyg111@hotmail.com" className='hover:scale-105 duration-300'>
          <MagicButton title="Contact Me" Icon={FaLocationArrow}/>
        </a>
    </div>

   </section>
  )
}

export default Contact