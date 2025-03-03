import { VStack, Text, Heading, Flex, Link, Grid,GridItem } from '@chakra-ui/react'
import { FaGithub,  FaLinkedinIn,  FaEnvelope,FaPhoneAlt  } from "react-icons/fa";
import React from 'react'

const Contact = () => {
  return (
    <VStack>
      <Text fontSize={{ base: "10px", md: "12px" }}>Get In Touch</Text>
      <Heading fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} mt={{ base: -2, sm: -1, md: 0 }}>Contact Me</Heading>
      <Grid templateColumns={{base:"1fr", md:"1fr 1fr"}} gap={{base:2,md:3, lg:5}} mt={6} justifyContent={"center"} alignItems={"center"}>
        <GridItem  bg={'teal.100'} pt={2} fontSize={{base:13, sm:15}} borderRadius={7} alignItems={"center"} justifyContent={"center"} w={{base:"250px", sm:"300px", md:"350px", lg:"400px"}}>
          <Link href='https://github.com/SarojKanvadiya' target='_blank'  ml={{base:2, sm:5}}>
          <FaGithub size={"25px"}/>
          <Text ml={{base:2, sm:4}} fontWeight={"bold"}>SarojKanvadiya</Text>
          </Link>
        </GridItem>
        <GridItem bg={'teal.100'} pt={2} fontSize={{base:13, sm:15}} borderRadius={7} alignItems={"center"} justifyContent={"center"}  w={{base:"250px", sm:"300px",md:"350px", lg:"400px"}}>
          <Link href='https://www.linkedin.com/in/saroj-kanvadiya-5692a116b/' target='_blank' ml={{base:2, sm:5}}>
          < FaLinkedinIn size={"25px"}/>
          <Text ml={{base:2, sm:4}} fontWeight={"bold"}>saroj-kanvadiya-5692a116b</Text>
          </Link>
        </GridItem>
        <GridItem bg={'teal.100'} pt={2} fontSize={{base:13, sm:15}} borderRadius={7} alignItems={"center"} justifyContent={"center"}  w={{base:"250px" , sm:"300px", md:"350px", lg:"400px"}}>
          <Link href='mailto:sarojkanvadiya@gmail.com' target='_blank' ml={{base:2, sm:5}}>
          < FaEnvelope size={"25px"}/>
          <Text ml={{base:2, sm:4}} fontWeight={"bold"}>sarojkanvadiya@gmail.com</Text>
          </Link>
        </GridItem>
        <GridItem bg={'teal.100'} pt={2} fontSize={{base:13, sm:15}} borderRadius={7} alignItems={"center"} justifyContent={"center"}  w={{base:"250px", sm:"300px", md:"350px", lg:"400px"}}>
          <Link href='tel:9829819405' target='_blank' ml={{base:2, sm:5}}>
          <FaPhoneAlt size={"25px"}/>
          <Text ml={{base:2, sm:4}} fontWeight={"bold"}>+91 9829819405</Text>
          </Link>
        </GridItem>
      </Grid>
    </VStack>
  )
}

export default Contact
