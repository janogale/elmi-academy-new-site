import { Flex, Box } from "@chakra-ui/core";

const Main = (props) => (
  <Box as="main" width="100%">
    <Box mx="auto" maxWidth="1140px" pt="4rem" {...props} />
  </Box>
);

export default Main;
