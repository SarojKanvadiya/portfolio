import { VStack, Heading, Flex, Image, Text} from '@chakra-ui/react'
import img1 from '../../images/html.png'
import img2 from '../../images/css.png'
import img3 from '../../images/js.png'
import img4 from '../../images/nodejs.png'
import img5 from '../../images/react.png'
import img6 from '../../images/redux.png'
import img7 from '../../images/chakra.png'
import img8 from '../../images/github.png'
import img9 from '../../images/visual.png'

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
                <Image ml={5} src={img2} alt='css-logo'w={{base:"30px", sm:"40px"}}/>
                <Text pl={4}  fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>CSS</Text>
            </Flex>
            <Flex w={{base:"200px", md:"250px"}} bg={"teal.100"} p={{base:1,md:2}} m={{base:1,md:2}} borderRadius={"5px"} align={"center"}>
                <Image ml={5} src={img3} alt='js-logo' w={{base:"30px", sm:"35px"}}/>
                <Text pl={4}  fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>JavaScript</Text>
            </Flex>
            <Flex w={{base:"200px", md:"250px"}} bg={"teal.100"} p={{base:1,md:2}} m={{base:1,md:2}} borderRadius={"5px"} align={"center"}>
                <Image ml={5} src={img4} alt='nodejs-logo'w={{base:"40px", sm:"50px"}}/>
                <Text pl={4}  fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>Node JS</Text>
            </Flex>
            <Flex w={{base:"200px", md:"250px"}} bg={"teal.100"} p={{base:1,md:2}} m={{base:1,md:2}} borderRadius={"5px"} align={"center"}>
                <Image ml={4} src={img5} alt='react-logo' w={{base:"40px", sm:"50px"}}/>
                <Text pl={2} fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>React</Text>
            </Flex>
            <Flex w={{base:"200px", md:"250px"}} bg={"teal.100"} p={{base:1,md:2}} m={{base:1,md:2}} borderRadius={"5px"} align={"center"}>
                <Image ml={5} src={img6} alt='redux-logo' w={{base:"30px", sm:"35px"}}/>
                <Text pl={4}  fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>Redux</Text>
            </Flex>
            <Flex w={{base:"200px", md:"250px"}} bg={"teal.100"} p={{base:1,md:2}} m={{base:1,md:2}} borderRadius={"5px"} align={"center"}>
                <Image ml={5} src={img7} alt='chakra-logo' w={{base:"25px", sm:"35px"}}/>
                <Text pl={4}  fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>Chakra UI</Text>
            </Flex>
            <Flex w={{base:"200px", md:"250px"}} bg={"teal.100"} p={{base:1,md:2}} m={{base:1,md:2}} borderRadius={"5px"} align={"center"}>
                <Image ml={5} src={img8} alt='github-logo'w={{base:"25px", sm:"30px"}}/>
                <Text pl={4}  fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>GitHub</Text>
            </Flex>
            <Flex w={{base:"200px", md:"250px"}} bg={"teal.100"} p={{base:1,md:2}} m={{base:1,md:2}} borderRadius={"5px"} align={"center"}>
                <Image ml={5}  src={img9} alt='visual-logo' w={{base:"25px", sm:"35px"}}/>
                <Text pl={4} fontWeight={"bold"} fontSize={{base:"15px" , sm:"18px"}}>Visual Studio</Text>
            </Flex>
        </Flex>

        <Flex wrap={"wrap"} justify={"center"} display={{base:"flex",md:"none"}} gap={5} p={5}>
          <Image src={img1} w={{base:"50px", sm:"70px"}}/>
          <Image src={img2} w={{base:"50px", sm:"70px"}}/>
          <Image src={img3} w={{base:"45px", sm:"60px"}} fit={"contain"}/>
          <Image src={img4} w={{base:"60px", sm:"70px"}} fit={"contain"}/>
          <Image src={img5} w={{base:"50px", sm:"70px"}}/>
          <Image src={img6} w={{base:"40px", sm:"60px"}} fit={"contain"}/>
          <Image src={img7} w={{base:"50px", sm:"70px"}}/>
          <Image src={img8} w={{base:"40px", sm:"60px"}} fit={"contain"}/>
          <Image src={img9} w={{base:"40px", sm:"60px"}} fit={"contain"}/>
        </Flex>
    </VStack>
  )
}

export default Skills
