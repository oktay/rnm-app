import { Box, Container, Text, Link, Image, Stack } from "@chakra-ui/react";

function Header() {
  const externals = [
    {
      label: "Github",
      url: "https://github.com/oktay/rnm-app/",
    },
    {
      label: "API",
      url: "https://rickandmortyapi.com/",
    },
    {
      label: "Chakra UI",
      url: "https://chakra-ui.com/",
    },
  ];

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
      <Container
        maxWidth="1140px"
        py="4"
        display="flex"
        justifyContent={{base: 'center', md: 'space-between'}}
        alignItems="center"
      >
        <Text fontSize="xl" fontWeight="medium">
          <Link
            href="/"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            _hover={{ textDecoration: "none" }}
          >
            <Image src="./logo.png" boxSize="64px" />
            <Box ml="5">
              <Text lineHeight="1">Rick and Morty</Text>
              <Text lineHeight="1" color="gray.500">
                Characters
              </Text>
            </Box>
          </Link>
        </Text>
        <Stack as="nav" direction="row" spacing="4" display={{base: 'none', md: 'flex'}}>
          <Link href="/" _hover={{ textDecoration: "none", opacity: "0.8" }}>
            Home
          </Link>
          {externals.map((ext) => (
            <Link
              href={ext.url}
              color="gray.500"
              target="_blank"
              _hover={{ textDecoration: "none", opacity: "0.8" }}
            >
              {ext.label}
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default Header;
