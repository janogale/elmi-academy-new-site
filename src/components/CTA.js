import { Link as ChakraLink, Button } from "@chakra-ui/core";

import { Container } from "./Container";

export default CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom="1rem"
    width="100%"
    maxWidth="48rem"
    py={2}
  >
    <ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mx={2}>
      <Button width="100%" variant="outline" variantColor="green">
        chakra-ui
      </Button>
    </ChakraLink>

    <ChakraLink
      isExternal
      href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui"
      flexGrow={3}
      mx={2}
    >
      <Button width="100%" variant="solid" variantColor="green">
        View Repo
      </Button>
    </ChakraLink>
  </Container>
);
