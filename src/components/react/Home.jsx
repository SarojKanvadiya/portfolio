import { Button, Flex, Heading, HStack, Link, Text, VStack } from '@chakra-ui/react'
import { BiSolidContact } from "react-icons/bi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import React from 'react'

const Home = () => {
  return (
    <Flex direction={"column"} bg={"gray.100"} w={"100%"} align={"center"} p={{base:4, sm: 8}} id='home'>
        <Text fontSize={{base:"12px", sm:"15px"}}>Hello, I'm</Text>
        <Heading size={{base:"2xl", sm:"3xl"}}>Saroj Kanvadiya</Heading>
        <Text fontSize={{base:"15px", sm:"20px", md:"30px"}} fontWeight={"bold"}>Fontend Developer</Text>
        <HStack p={4}>
        <Link href='#contact'><Button colorPalette={"teal"} size={"sm"} mr={{base:0, sm:2, md:5}}> <BiSolidContact/><Text display={{base:"none", sm:"flex"}}>Contact Info</Text></Button></Link> <Link href='https://github.com/SarojKanvadiya' target='_blank'><Button colorPalette={"teal"} size={"sm"} mr={{base:0, sm:2, md:5}}><FaGithub size={"25px"}/><Text display={{base:"none", sm:"flex"}}>Git Hub</Text></Button></Link> 
        <Link  href='https://www.linkedin.com/in/saroj-kanvadiya-5692a116b/' target='_blank'><Button colorPalette={"teal"} size={"sm"} mr={{base:0, sm:2, md:5}}>< FaLinkedinIn size={"25px"}/><Text display={{base:"none", sm:"flex"}}>Linked In</Text></Button></Link>
            
        </HStack>
    </Flex>
  )
}

export default Home
