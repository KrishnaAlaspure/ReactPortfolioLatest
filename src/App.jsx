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
      <div className='bg-black h-auto w-full overflow-hidden'>
        <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
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
