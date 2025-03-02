import { VStack } from '@chakra-ui/react'
import React from 'react'
import Navbar from './components/react/Navbar'
import Home from './components/react/Home'
import About from './components/react/About'
import Skills from './components/react/Skills'

const App = () => {
  return (
    <VStack>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
    </VStack>
  )
}

export default App
