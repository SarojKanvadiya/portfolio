import { VStack, Text, Heading, Grid, GridItem, Image, Center, Link, Button } from '@chakra-ui/react'
import { FaGlobe, FaGithub } from "react-icons/fa";
import React from 'react'

const Projects = () => {
    return (
        <VStack id='projects'>
            <Text fontSize={{ base: "10px", md: "12px" }}>Browse My Recent</Text>
            <Heading fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} mb={{base:0, md:4}}  mt={{base:-2, sm:-1,md:0}}>Projects</Heading>
            <Grid templateColumns={{base:"1fr", lg:"2fr 1fr"}} w={"90%"} m={5}>
                <GridItem m={"auto"}>
                    <Image src='src\assets\home.png' display={{base:"none", md:"flex"}}/>
                    <Image src='src\assets\home2.png' w={{base:"250px", sm:"350px"}} display={{base:"flex", md:"none"}}/>
                </GridItem>
                <GridItem m={"auto"}>
                    <Text m={5} textAlign={{base:"center", md:"justify"}} fontSize={{base:"14px",sm:"15px"}}> 
                    Care Pharmacy is a web-based platform that allows users to browse, search, and purchase medicines online. Its intuitive user interface and essential e-commerce features ensure a seamless shopping experience.
                    </Text>
                    <Center>
                       <Link href='https://sarojkanvadiya.github.io/Care-Pharmacy-Project/' target='_blank'><Button colorPalette={"teal"} size={"sm"} mr={{base:0, sm:2, md:5}}><FaGlobe /><Text display={{base:"none", sm:"flex"}}>Live</Text></Button>
                       </Link> 
                       <Link href='https://github.com/SarojKanvadiya/Care-Pharmacy-Project' target='_blank'><Button colorPalette={"teal"} size={"sm"} ml={5}><FaGithub /><Text display={{base:"none", sm:"flex"}}>GitHub</Text></Button>
                       </Link> 
                    </Center>
                </GridItem>
            </Grid>
        </VStack>
    )
}

export default Projects
