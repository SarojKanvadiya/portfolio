import { VStack, Text, Heading, Grid, GridItem,Button, Link, Center, Image, Box } from '@chakra-ui/react'
import { FaFileArrowDown } from "react-icons/fa6";
import React from 'react'

const About = () => {
  return (
    <VStack p={5}>
      <Text fontSize={{base:"10px", md:"12px"}}>Get to Know more</Text>
      <Heading fontSize={{base:"2xl",sm:"3xl", md:"4xl"}}>About Me</Heading>
      <Grid  templateColumns={{base:"1fr", md:"1fr 2fr"}} gap={2} m={"auto"} justifyContent={"center"} alignItems={"center"} p={{base:0, sm:5}} >
        <GridItem>
          
           <Center>
           <Image src='src\assets\Pan_card_7[1] (1).jpg' w={{base:"100px", sm:"150px", md:"200px"}} border={"2px solid red"}/>
           </Center>
           
        </GridItem>
        <GridItem>
            <Text p={{base:0, sm:2}} fontSize={{base:"14px", sm:"15px"}}>Dynamic and detail-oriented Front-End Developer skilled in building responsive user interfaces using HTML, CSS, JavaScript, and React. Proficient in leveraging the DOM for interactive designs and experienced with Git for version control. A quick learner committed to delivering clean and efficient code.</Text>
            <Center>
            <Link>
            <Button size={"sm"} colorPalette={"teal"} m={3}><FaFileArrowDown /> Resume</Button>
            </Link>
            </Center>
        </GridItem>
      </Grid>

    </VStack>
  )
}

export default About
