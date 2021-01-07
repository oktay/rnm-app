import { StarIcon } from "@chakra-ui/icons";
import { Box, Container, Text, Link } from "@chakra-ui/react";

function Header() {
  return (
    <Box as="header" position="absolute" top="0" width="100%">
      <Container maxWidth="960px" py="4" >
         <Text fontSize="xl" fontWeight="semibold" color="white"><Link href="/" display="flex" alignItems="center" _hover={{ textDecoration: 'none' }}><StarIcon boxSize="24px" color="white" mr="4" /> Rick and Morty App</Link></Text>
      </Container>
    </Box>
  )
}

export default Header