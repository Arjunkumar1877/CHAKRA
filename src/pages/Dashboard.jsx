import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {
  const boxStyles = {
   p: '10px',
   bg: "purple.400",
   color: "white",
   m: "10px",
   textAlign: "center",
   filter: "blur(1px)",
   ":hover": {
    color: "black",
    bg: "blue.300"
   }
  }
  return (
    <Container as="section" maxW='4xl' py='20px'>
      <Heading my="30px" p="10px">
        Chakra UI
      </Heading>
      <Text ml="30px" color="blue.200" fontWeight="bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quidem quaerat corporis nihil provident deserunt culpa sit vero dolorem amet! Amet earum necessitatibus adipisci. Corporis expedita esse doloribus aliquid? Unde, ab quaerat corporis neque ad voluptas iste repellat repellendus, sint eligendi corrupti error laborum nesciunt aperiam. Atque excepturi veritatis iste quis, quasi distinctio, ipsa sed expedita corporis delectus aliquid deleniti, dicta maiores. Labore expedita corrupti quisquam suscipit!</Text>
       <Box my='30px' p='20px' bg='orange' color='white'>
        <Text>This is a box component</Text>
       </Box>

       <Box sx={boxStyles}>
        Hello, Arjun 
       </Box>
    </Container>
  )
}
