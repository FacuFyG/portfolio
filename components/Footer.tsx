import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='flex flex-row justify-between pt-10 pb-20 w-[90vw]'>
        <div>
            <h2>2024 Facundo Frasca</h2>
        </div>
        <div className='flex flex-row gap-4'>
            <a href="https://www.instagram.com/facu_frasca/" className='hover:text-purple duration-200 hover:scale-110' target='_blank'>
                    <FaInstagram size={40}/>
            </a>
            <a href="https://github.com/FacuFyG" className='hover:text-purple duration-200 hover:scale-110' target='_blank'>
                    <FaGithub size={40}/>
            </a>
            <a href="https://www.linkedin.com/in/facundo-gustavo-frasca-317054216/" className='hover:text-purple duration-200 hover:scale-110' target='_blank'>
                    <FaLinkedin size={40}/>
            </a>
        </div>
    </footer>
  )
}

export default Footer