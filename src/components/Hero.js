import { Flex, Heading } from "@chakra-ui/core";

export default Hero = ({ title = "Elmi Academy" }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Heading fontSize="4vw">{title}</Heading>
  </Flex>
);
