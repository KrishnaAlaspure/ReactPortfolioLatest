import React from 'react'
import { Link } from 'react-router-dom'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import ContactMe from './ContactMe'
import About from './About'

const Footer = () => {
  return (
    <footer className=''>
      <div className='flex flex-col mt-10 justify-around items-center '>
      <div className=" flex flex-row md:justify-around  items-center ">
      <ul className=" hidden  md:flex md:flex-row md:gap-8 md:ml-14 md:text-2xl border-b border-neutral-400 text-white">
            <li className="hover:text-neutral-400 cursor-pointer "><Link to={About}>AboutMe</Link></li>
            <li className="hover:text-neutral-400 cursor-pointer"><Link to={Experience}>Experience</Link></li>
            <li className="hover:text-neutral-400 cursor-pointer"><Link to={Projects}>Projects</Link></li>
            <li className="hover:text-neutral-400 cursor-pointer"><Link to={Skills}>Skills</Link></li>
            <li className="hover:text-neutral-400 cursor-pointer"><Link to={ContactMe}>Contact</Link></li>
          </ul>
          
      </div>
      <p className='text-center text-white'>Copyright &#169; May 2024 Krishna Alaspure. All Rights Reserved </p>
      </div>
    </footer>
  )
}

export default Footer
