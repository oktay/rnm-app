import { Avatar as ChakraAvatar, AvatarBadge } from "@chakra-ui/react";

function Avatar({ src, status, ...props }) {
  const color =
    status === "Alive"
      ? "green.500"
      : status === "Dead"
      ? "red.500"
      : "gray.500";
  return (
    <ChakraAvatar src={src} {...props}>
      <AvatarBadge boxSize="1.25em" bg={color} />
    </ChakraAvatar>
  );
}

export default Avatar;
