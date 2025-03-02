// import { Button, Container, Flex, Link,Heading, HStack } from '@chakra-ui/react'
// import { FaFileArrowDown } from "react-icons/fa6";
// import { TfiMenuAlt } from "react-icons/tfi";
// import { CgCloseR } from "react-icons/cg";
// import React, { useState } from 'react'

// const Navbar = () => {
//     const [menu, setMenu] = useState(true)
//     const [close, setClose] = useState(true)
//     console.log(menu,"menu",close,"close")
//     return (
//         <>
//             <Flex bg={"teal.800"} w={"100%"} justify={"space-between"} p={2} color={"white"} align={"center"}>
//                 <Heading size={{ base: "2xl", md: "3xl" }} display={{ base: "none" }}>Saroj Kanvadiya</Heading>
//                 <Heading size={"2xl"} ml={6}>Saroj</Heading>
//                 <Flex w={"50%"} justify={"space-between"} fontSize={"18px"} display={{ base: "none" }}>
//                 <Link color={"white"}>Home</Link>
//                 <Link color={"white"}>About</Link>
//                 <Link color={"white"}>Skills</Link>
//                 <Link color={"white"}>Projects</Link>
//                 <Link color={"white"}>Statistics</Link>
//                 <Link color={"white"}>Contact</Link>
//                 <Button ml={10} variant={"outline"} color={"white"}><FaFileArrowDown /> Resume</Button>
//             </Flex>

//             <Flex justify={{base:"space-between", sm:"space-around"}} fontSize={"18px"} align={"center"} mr={5}>

//                 <Button variant={"outline"} color={"white"} size={"sm"} display={{base:"none"}}><FaFileArrowDown /> Resume</Button>

//                 <Button variant={"outline"} color={"white"} onClick={()=>setMenu(!menu)}>
//                 <TfiMenuAlt size="30px" />
//                 </Button>
//             </Flex>
//             </Flex>
//          <Container  w="100%" bg={"red"} m={-2} display={menu?"flex":"none"}>
//          <Flex  w="100%"  p={2} display={close?"flex":"none"} >
//               <Flex direction={"column"} align={"center"} w="100%" > <Link color={"white"}>Home</Link>      
//                    <Link color={"white"}>About</Link>      
//                    <Link color={"white"}>Skills</Link>      
//                    <Link color={"white"}>Projects</Link>      
//                    <Link color={"white"}>Statistics</Link>      
//                    <Link color={"white"}>Contact</Link>
//                    <Button variant={"outline"} color={"white"} size={"sm"} p={2} m={2}><FaFileArrowDown /> Resume</Button>
//               </Flex>
//                    <CgCloseR size={"25px"} color='white' onClick={()=>setClose(!close)}/>
//                </Flex>
//          </Container>
            

//         </>
//     )
// }

// export default Navbar
