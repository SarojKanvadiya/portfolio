import {  Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Flex bg={"teal"} w={"100%"} justify={"center"} align={"center"} color={"white"} mt={{base:3,sm:4}}>
      <Text fontWeight={600} fontSize={{base:15,md:18}} m={3}>Thank you for visiting my Portfolio</Text>
    </Flex>
  )
}

export default Footer
