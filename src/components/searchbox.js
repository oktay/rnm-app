import { Box, InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

function Searchbox({ setQuery, ...props }) {
  const [value, setValue] = useState("");

  function handleChange(target) {
    setValue(target.value);
    setQuery("https://rickandmortyapi.com/api/character/?name=" + target.value);
  }

  return (
    <Box
      padding="8"
      bg="white"
      borderRadius="7px"
      boxShadow="xl"
      mb="12"
      {...props}
    >
      <InputGroup>
        <Input
          value={value}
          onChange={({ target }) => handleChange(target)}
          placeholder="Evil Morty..."
        />
        <InputLeftElement>
          <SearchIcon color="gray.500" />
        </InputLeftElement>
      </InputGroup>
    </Box>
  );
}

export default Searchbox;
