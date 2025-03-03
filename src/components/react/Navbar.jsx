import { Button, Container, Flex, Link, Heading,   MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger, } from '@chakra-ui/react'
import { FaFileArrowDown } from "react-icons/fa6";
import { TfiMenuAlt } from "react-icons/tfi";
import { CgCloseR } from "react-icons/cg";
import React, { useState } from 'react'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const [close, setClose] = useState(true)
    console.log(menu, "menu", close, "close")
    return (
        <>
            <Flex bg={"teal"} w={"100%"} justify={"space-between"} p={2} color={"white"} align={"center"} className='navbar'>
                <Heading size={{ base: "2xl", md: "3xl" }} display={{ base: "none", sm: "flex" }} ml={20}>Saroj Kanvadiya</Heading>
                <Heading size={"2xl"} ml={6} display={{ sm: "none" }}>Saroj</Heading>
                <Flex w={"50%"} justify={"space-between"} fontSize={"18px"} display={{ base: "none", md: "flex" }}>
                    <Link href='#home' color={"white"}>Home</Link>
                    <Link href='#about' color={"white"}>About</Link>
                    <Link href='#skills' color={"white"}>Skills</Link>
                    <Link href='#projects' color={"white"}>Projects</Link>
                    <Link href='#statistics' color={"white"}>Statistics</Link>
                    <Link href='#contact' color={"white"}>Contact</Link>
                    <Link href='src\assets\SarojKanvadiya-FrontendDeveloper(React)-WWwB.pdf' download={'SarojKanvadiya-FrontendDeveloper(React)'}>
                        <Button ml={10} variant={"outline"} color={"white"}><FaFileArrowDown /> Resume</Button>
                    </Link>
                </Flex>

                {/* <Flex justify={{ base: "space-between", sm: "space-around" }} fontSize={"18px"} align={"center"} mr={5} display={{ base: "flex", md: "none" }}>

                    <Link href='src\assets\SarojKanvadiya-FrontendDeveloper(React)-WWwB.pdf' download={'SarojKanvadiya-FrontendDeveloper(React)'} display={{ base: "none" }}>
                        <Button variant={"outline"} color={"white"} size={"sm"} ><FaFileArrowDown /> Resume</Button>
                    </Link>

                    <Button variant={"outline"} color={"white"} onClick={() => setMenu(!menu)}>
                        <TfiMenuAlt size="30px" />
                    </Button>
                </Flex> */}
                 <Flex display={{ base: "flex", md: "none" }}>
                 <MenuRoot>
                <MenuTrigger asChild>
                <Button variant={"outline"} color={"white"} onClick={() => setMenu(!menu)}>
                        <TfiMenuAlt size="30px" />Menu
                    </Button>
                </MenuTrigger>
                <MenuContent>
                    <MenuItem asChild value="home">
                        <a href="#home">Home</a>
                    </MenuItem>
                    <MenuItem asChild value="about">
                        <a href="#about">About</a>
                    </MenuItem>
                    <MenuItem asChild value="skills">
                        <a href="#skills"> Skills</a>
                    </MenuItem> 
                    <MenuItem asChild value="projects">
                        <a  href="#projects">Projects</a>
                    </MenuItem>
                     <MenuItem asChild value="statistics">
                        <a href="#statistics">Statistics</a>
                    </MenuItem>
                     <MenuItem asChild value="contact">
                        <a href="#contact">Contact</a>
                    </MenuItem>
                     <MenuItem asChild value="contact">
                     <Link href='src\assets\SarojKanvadiya-FrontendDeveloper(React)-WWwB.pdf' download={'SarojKanvadiya-FrontendDeveloper(React)'}>
                        <Button variant={"outline"} color={'teal'} size={"sm"} ><FaFileArrowDown /> Resume</Button>
                    </Link>
                    </MenuItem>

                </MenuContent>
            </MenuRoot>   
                 </Flex>

            </Flex>
            {/* <Container w="100%" bg={"red"} m={-2} display={menu ? "flex" : "none"} className='nav navbar '>
                <Flex w="100%" p={2} display={close ? "flex" : "none"} >
                    <Flex direction={"column"} align={"center"} w="100%" > <Link href='#home' color={"white"}>Home</Link>
                        <Link href='#about' color={"white"}>About</Link>
                        <Link href='#skills' color={"white"}>Skills</Link>
                        <Link href='#projects' color={"white"}>Projects</Link>
                        <Link href='#statistics' color={"white"}>Statistics</Link>
                        <Link href='#contact' color={"white"}>Contact</Link>
                        <Link href='src\assets\SarojKanvadiya-FrontendDeveloper(React)-WWwB.pdf' download={'SarojKanvadiya-FrontendDeveloper(React)'}>
                            <Button variant={"outline"} color={"white"} size={"sm"} p={2} m={2}><FaFileArrowDown /> Resume</Button></Link>
                    </Flex>
                    <CgCloseR size={"25px"} color='white' onClick={() => setClose(!close)} />
                </Flex>
            </Container> */}

           
        </>
    )
}

export default Navbar
