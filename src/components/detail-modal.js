import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Heading,
  Box,
  Grid,
  Text,
} from "@chakra-ui/react";
import Avatar from "./avatar";

function DetailModal({ detail, isOpen, onCLose }) {
  return (
    <Modal isOpen={isOpen} onClose={onCLose}>
      <ModalOverlay />
      <ModalContent maxWidth="675px">
        <ModalHeader fontWeight="medium">Detail</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" alignItems="center" justifyContent="center" padding={{base: '4', md: '12'}} flexDir={{base: 'column', lg: 'row'}}>
          <Avatar src={detail.image} status={detail.status} boxSize={{base: '128px', lg: '250px'}} fontSize={{base: '32px', lg: '80px'}} />
          <Box ml={{lg: '12'}} mt={{ base: '8', lg: '0' }} maxWidth={{ base: '100%', lg: '60%' }} textAlign={{base: 'center', lg: 'left'}}>
            <Heading as="h2" fontWeight="medium">{detail.name}</Heading>
            <Grid templateColumns="auto 1fr" columnGap="4" mt={{ base: '4', lg: '8' }} textAlign="left">
              <Text fontWeight="medium">Status:</Text> <Text>{detail.status}</Text>
              <Text fontWeight="medium">Species:</Text> <Text>{detail.species}</Text>
              <Text fontWeight="medium">Gender:</Text> <Text>{detail.gender}</Text>
              <Text fontWeight="medium">Location:</Text> <Text>{detail.location.name}</Text>
              <Text fontWeight="medium">Origin:</Text> <Text>{detail.origin.name}</Text>
            </Grid>
          </Box>
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Button colorScheme="gray" onClick={onCLose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DetailModal;
