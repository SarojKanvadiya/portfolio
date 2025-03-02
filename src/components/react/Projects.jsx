import { VStack, Text, Heading, Grid } from '@chakra-ui/react'
import React from 'react'

const Projects = () => {
    return (
        <VStack>
            <Text fontSize={{ base: "10px", md: "12px" }}>Browse My Recent</Text>
            <Heading fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}>Projects</Heading>
            <Grid></Grid>
        </VStack>
    )
}

export default Projects
