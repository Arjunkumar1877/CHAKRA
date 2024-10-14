import { Box, Button, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
    return (
<Flex p="10px" as='nav' alignItems="center" gap="10px">
  <Heading as='h1'>
    Dojo tasks
  </Heading>
  <Spacer />

  <HStack spacing="20px" >
  <Box bg="gray.200" p="10px">
    M
  </Box>
  <Text>arjun.tech@gmail</Text>
  <Button colorScheme='purple'>Logout</Button>
  </HStack>
</Flex>
        // <Flex justify="space-between" bg="gray.200" wrap="wrap" gap="2">
    //     <Box w="150px" h="50px" bg="red">1</Box>
    //     <Box w="150px" h="50px" flexGrow='3' bg="blue">2</Box>
    //     <Box w="150px" h="50px" flexGrow="1" bg="green">3</Box>
    //     <Box w="150px" h="50px" flexGrow="2" bg="yellow">4</Box>
    // </Flex>
  )
}

export default Navbar