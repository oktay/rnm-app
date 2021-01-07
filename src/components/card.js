import { Stack, Box, Heading, Text, Button } from "@chakra-ui/react";
import Avatar from "./avatar";

function Card({ char, setDetail, onOpen, ...props }) {
  return (
    <Stack
      spacing="4"
      padding="5"
      boxShadow="xl"
      minHeight="280px"
      borderRadius="7px"
      {...props}
    >
      <Box mt="6" textAlign="center">
        <Avatar src={char.image} status={char.status} />
        <Heading as="h4" fontWeight="semibold" fontSize="md" mt="4">
          {char.name}
        </Heading>
      </Box>
      <Text fontSize="sm" color="gray.700" mb="auto" textAlign="center">
        {char.gender}, {char.species}, {char.location.name}
      </Text>
      <Button
        mt="auto"
        colorScheme="gray"
        color="gray.600"
        fontSize="sm"
        onClick={() => {
          setDetail(char);
          onOpen();
        }}
      >
        Detail
      </Button>
    </Stack>
  );
}

export default Card;
