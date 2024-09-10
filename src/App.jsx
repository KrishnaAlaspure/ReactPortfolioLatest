import { useState } from 'react'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import ContactMe from './Components/ContactMe'
import Footer from './Components/Footer'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import { Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>   
      <div className='bg-black h-auto w-full'>
        <NavBar />
        <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <ContactMe/>
      <Footer/>
      </div>
    </>
  )
}

export default App
