import { VStack } from '@chakra-ui/react'
import React from 'react'
import Navbar from './components/react/Navbar'
import Home from './components/react/Home'
import About from './components/react/About'
import Skills from './components/react/Skills'
import Projects from './components/react/Projects'
import Statistics from './components/react/Statistics'
import Contact from './components/react/Contact'
import Footer from './components/react/Footer'

const App = () => {
  return (
    <VStack>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Statistics/>
      <Contact/>
      <Footer/>
    </VStack>
  )
}

export default App
