const { Box, Container, Text, Link } = require("@chakra-ui/react");

function Footer() {
  return (
    <Box as="footer" paddingY="4">
      <Container maxWidth="960px">
        <Text fontSize="xs" textAlign="center">
          <Link
            target="_blank"
            href="https://oktaycolakoglu.com"
            color="gray.500"
          >
            Oktay Çolakoğlu
          </Link>
          , Made with{" "}
          <Link
            target="_blank"
            href="https://rickandmortyapi.com/"
            color="gray.500"
          >
            The Rick and Morty API
          </Link>{" "}
          and{" "}
          <Link target="_blank" href="https://chakra-ui.com/" color="gray.500">
            Chakra UI
          </Link>{" "}
          source code shared on{" "}
          <Link
            target="_blank"
            href="https://github.com/oktay/rnm-app"
            color="gray.500"
          >
            Github
          </Link>
        </Text>
      </Container>
    </Box>
  );
}

export default Footer;
