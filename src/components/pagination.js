import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import {
  Stack,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
} from "@chakra-ui/react";

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

        <Menu fixed margin="0">
          <MenuButton
            colorScheme="gray"
            color="gray.500"
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            {currentPage} / {info.pages}
          </MenuButton>
          <MenuList maxHeight="250px" minWidth="auto" overflowY="scroll">
            {[...Array(info.pages)].map((el, index) => (
              <MenuItemOption
                fontWeight={currentPage === index + 1 && "bold"}
                key={index}
                isChecked={currentPage === index + 1}
                onClick={() =>
                  setQuery(
                    info.next
                      ? info.next.replace(
                          `?page=${currentPage + 1}`,
                          `?page=${index + 1}`
                        )
                      : info.prev.replace(
                          `?page=${currentPage - 1}`,
                          `?page=${index + 1}`
                        )
                  )
                }
              >
                {index + 1}
              </MenuItemOption>
            ))}
          </MenuList>
        </Menu>

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
