import { Flex, Box } from "@chakra-ui/core";

const Main = (props) => (
  <Box as="main" width="100%">
    <Box
      spacing="1.5rem"
      mx="auto"
      maxWidth="1140px"
      pt="4rem"
      px="1rem"
      {...props}
    />
  </Box>
);

export default Main;
