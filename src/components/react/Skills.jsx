import { VStack, Heading, Flex, Box, Image, Text, HStack } from '@chakra-ui/react'
import img1 from '../../images/html.png'
import React from 'react'

const Skills = () => {
  return (
    <VStack id='skills'>
        <Heading fontSize={{base:"2xl",sm:"3xl", md:"4xl"}}>SKills</Heading>
        <Flex wrap="wrap" gap={1} m={6} justifyContent={"center"} display={{base:"none", md:"flex"}} >
            <Flex w={{base:"200px", md:"250px"}} bg={"teal.100"} p={{base:1,md:2}} m={{base:1,md:2}} borderRadius={"5px"} align={"center"}>
                <Image ml={5}  src={img1} alt='html-logo' w={{base:"30px", sm:"40px"}}/>
                <Text pl={4} fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>HTML</Text>
            </Flex>
            <Flex w={{base:"200px", md:"250px"}} bg={"teal.100"} p={{base:1,md:2}} m={{base:1,md:2}} borderRadius={"5px"} align={"center"}>
                <Image ml={5} src='./images/css.png' alt='css-logo'w={{base:"30px", sm:"40px"}}/>
                <Text pl={4}  fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>CSS</Text>
            </Flex>
            <Flex w={{base:"200px", md:"250px"}} bg={"teal.100"} p={{base:1,md:2}} m={{base:1,md:2}} borderRadius={"5px"} align={"center"}>
                <Image ml={5} src='./images/js.png' alt='js-logo' w={{base:"30px", sm:"35px"}}/>
                <Text pl={4}  fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>JavaScript</Text>
            </Flex>
            <Flex w={{base:"200px", md:"250px"}} bg={"teal.100"} p={{base:1,md:2}} m={{base:1,md:2}} borderRadius={"5px"} align={"center"}>
                <Image ml={5} src='./images/nodejs.png' alt='nodejs-logo'w={{base:"40px", sm:"50px"}}/>
                <Text pl={4}  fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>Node JS</Text>
            </Flex>
            <Flex w={{base:"200px", md:"250px"}} bg={"teal.100"} p={{base:1,md:2}} m={{base:1,md:2}} borderRadius={"5px"} align={"center"}>
                <Image ml={4} src='./images/react.png' alt='react-logo' w={{base:"40px", sm:"50px"}}/>
                <Text pl={2} fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>React</Text>
            </Flex>
            <Flex w={{base:"200px", md:"250px"}} bg={"teal.100"} p={{base:1,md:2}} m={{base:1,md:2}} borderRadius={"5px"} align={"center"}>
                <Image ml={5} src='./images/redux.png' alt='redux-logo' w={{base:"30px", sm:"35px"}}/>
                <Text pl={4}  fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>Redux</Text>
            </Flex>
            <Flex w={{base:"200px", md:"250px"}} bg={"teal.100"} p={{base:1,md:2}} m={{base:1,md:2}} borderRadius={"5px"} align={"center"}>
                <Image ml={5} src='./images/chakra.png' alt='chakra-logo' w={{base:"25px", sm:"35px"}}/>
                <Text pl={4}  fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>Chakra UI</Text>
            </Flex>
            <Flex w={{base:"200px", md:"250px"}} bg={"teal.100"} p={{base:1,md:2}} m={{base:1,md:2}} borderRadius={"5px"} align={"center"}>
                <Image ml={5} src='./images/github.png' alt='github-logo'w={{base:"25px", sm:"30px"}}/>
                <Text pl={4}  fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>GitHub</Text>
            </Flex>
            <Flex w={{base:"200px", md:"250px"}} bg={"teal.100"} p={{base:1,md:2}} m={{base:1,md:2}} borderRadius={"5px"} align={"center"}>
                <Image ml={5}  src='./images/visual.png' alt='visual-logo' w={{base:"25px", sm:"35px"}}/>
                <Text pl={4} fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>Visual Studio</Text>
            </Flex>
        </Flex>

        <Flex wrap={"wrap"} justify={"center"} display={{base:"flex",md:"none"}} gap={5} p={5}>
          <Image src='portfolio\src\assets\html.png' w={{base:"50px", sm:"70px"}}/>
          <Image src='portfolio\src\assets\css.png' w={{base:"50px", sm:"70px"}}/>
          <Image src='portfolio\src\assets\js.png' w={{base:"45px", sm:"60px"}} fit={"contain"}/>
          <Image src='portfolio\src\assets\nodejs.png' w={{base:"60px", sm:"70px"}} fit={"contain"}/>
          <Image src='portfolio\src\assets\react.png' w={{base:"50px", sm:"70px"}}/>
          <Image src='portfolio\src\assets\redux.png' w={{base:"40px", sm:"60px"}} fit={"contain"}/>
          <Image src='portfolio\src\assets\chakra.png' w={{base:"50px", sm:"70px"}}/>
          <Image src='portfolio\src\assets\github.png' w={{base:"40px", sm:"60px"}} fit={"contain"}/>
          <Image src='portfolio\src\assets\visual.png' w={{base:"40px", sm:"60px"}} fit={"contain"}/>
          
        </Flex>
    </VStack>
  )
}

export default Skills
