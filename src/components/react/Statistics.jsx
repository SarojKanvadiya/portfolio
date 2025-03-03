import { VStack, Heading, Text, Flex, Image } from '@chakra-ui/react'
import React from 'react'

const Statistics = () => {
  return (
    <VStack w={"100%"} id='statistics'>
      <Text fontSize={{ base: "10px", md: "12px" }} mt={{ base: 0, md: 3 }}>GitHub Stats </Text>
      <Heading fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} mt={{ base: -2, sm: -1, md: 0 }}>Statistics</Heading>

      <Flex w={"90%"} m={6} align={"center"} justify={"center"} gap={5} direction={{base:"column", md:"row"}} >
        <Image w={{sm:"300px"}}src="https://github-readme-stats.vercel.app/api/top-langs?username=sarojkanvadiya&show_icons=true&locale=en&layout=compact" alt="sarojkanvadiya"   />

        <Image align="center" src="https://github-readme-stats.vercel.app/api?username=sarojkanvadiya&show_icons=true&locale=en" alt="sarojkanvadiya" />
      </Flex>
    </VStack>
  )
}

export default Statistics
