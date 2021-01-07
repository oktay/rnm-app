import { Stack, Box, Avatar, SkeletonText, Button } from "@chakra-ui/react";

function Skeletons({...props}) {
  const arr = [...Array(12)]
  return arr.map((item, index) => (
    <Stack spacing="4" padding="5" key={index} boxShadow="xl" minHeight="280px" borderRadius="7px" {...props}>
      <Box mt="6" mb="auto" textAlign="center">
        <Avatar />
        <SkeletonText mt="4" textAlign="center" noOfLines={3} />
      </Box>
      <Button mt="auto" colorScheme="gray" isLoading={true}></Button>
    </Stack>
  ));
}

export default Skeletons;
