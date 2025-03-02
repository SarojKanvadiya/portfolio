import { VStack, Heading, Flex, Box, Image, Text, HStack } from '@chakra-ui/react'
import React from 'react'

const Skills = () => {
  return (
    <VStack>
        <Heading fontSize={{base:"2xl",sm:"3xl"}}>SKills</Heading>
        <Flex p={4} wrap="wrap" gap={1} m={"auto"} border={"2px solid red"} justifyContent={"center"} >
            <HStack w={{base:"250px", sm:"250px"}} bg={"teal.100"} p={2} m={2} borderRadius={"5px"}>
                <Image src='src\assets\html.png' alt='html-logo' w={"40px"}/>
                <Text fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>HTML</Text>
            </HStack>
            <HStack w={{base:"250px", sm:"250px"}} bg={"teal.100"} p={2} m={2} borderRadius={"5px"}>
                <Image src='src\assets\css.png' alt='css-logo' w={"40px"}/>
                <Text fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>CSS</Text>
            </HStack>
            <HStack w={{base:"250px", sm:"250px"}} bg={"teal.100"} p={2} m={2} borderRadius={"5px"}>
                <Image src='src\assets\js.png' alt='js-logo' w={"35px"}/>
                <Text fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>JavaScript</Text>
            </HStack>
            <HStack w={{base:"250px", sm:"250px"}} bg={"teal.100"} p={2} m={2} borderRadius={"5px"}>
                <Image src='src\assets\nodejs.png' alt='nodejs-logo' w={"50px"}/>
                <Text fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>Node JS</Text>
            </HStack>
            <HStack w={{base:"250px", sm:"250px"}} bg={"teal.100"} p={2} m={2} borderRadius={"5px"}>
                <Image src='src\assets\react.png' alt='react-logo' w={"60px"}/>
                <Text fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>React</Text>
            </HStack>
            <HStack w={{base:"250px", sm:"250px"}} bg={"teal.100"} p={2} m={2} borderRadius={"5px"}>
                <Image src='src\assets\redux.png' alt='redux-logo' w={"30px"}/>
                <Text fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>Redux</Text>
            </HStack>
            <HStack w={{base:"250px", sm:"250px"}} bg={"teal.100"} p={2} m={2} borderRadius={"5px"}>
                <Image src='src\assets\chakra.png' alt='chakra-logo' w={"40px"}/>
                <Text fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>Chakra UI</Text>
            </HStack>
            <HStack w={{base:"250px", sm:"250px"}} bg={"teal.100"} p={2} m={2} borderRadius={"5px"}>
                <Image pl={8} src='src\assets\github.png' alt='github-logo' w={"30px"}/>
                <Text fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>GitHub</Text>
            </HStack>
            <HStack w={{base:"250px", sm:"250px"}} bg={"teal.100"} p={2} m={2} borderRadius={"5px"}>
                <Image  src='src\assets\visual.png' alt='visual-logo' w={"35px"}/>
                <Text fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>Visual Studio</Text>
            </HStack>
        </Flex>
    </VStack>
  )
}

export default Skills
