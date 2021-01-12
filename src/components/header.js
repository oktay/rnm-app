import { Box, Container, Text, Link, Image } from "@chakra-ui/react";

function Header() {
  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      width="full"
      bg="white"
      zIndex="9"
      shadow="xl"
    >
      <Container maxWidth="960px" py="4">
        <Text fontSize="xl" fontWeight="medium">
          <Link
            href="/"
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{ textDecoration: "none" }}
          >
            <Image src="./logo.png" boxSize="64px" />
          </Link>
        </Text>
      </Container>
    </Box>
  );
}

export default Header;
