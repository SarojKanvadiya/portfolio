import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <Flex bg={"teal.800"} w={"100%"} justify={"space-around"} p={2} color={"white"} align={"center"}>
        <Heading size={{base:"2xl",md:"3xl"}}>Saroj Kanvadiya</Heading>
        <Navbar/>
    </Flex>
  )
}

export default Header
