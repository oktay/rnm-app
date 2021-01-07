import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Stack, Button, Flex, Text } from "@chakra-ui/react";

function Pagination({ info, setQuery }) {
  const currentPage = info.next
    ? parseInt(new URLSearchParams(info.next.split("?")[1]).get("page")) - 1
    : info.prev
    ? parseInt(new URLSearchParams(info.prev.split("?")[1]).get("page")) + 1
    : 1;

  return (
    <Flex justifyContent="center" mt="12">
      <Stack spacing="4" direction="row" alignItems="center">
        <Button
          colorScheme="gray"
          leftIcon={<ArrowBackIcon />}
          color="gray.500"
          disabled={!info.prev}
          onClick={() => setQuery(info.prev)}
        >
          Prev
        </Button>
        <Text color="gray.500">
          {currentPage} / {info.pages}
        </Text>
        <Button
          colorScheme="gray"
          rightIcon={<ArrowForwardIcon />}
          color="gray.500"
          disabled={!info.next}
          onClick={() => setQuery(info.next)}
        >
          Next
        </Button>
      </Stack>
    </Flex>
  );
}

export default Pagination;
