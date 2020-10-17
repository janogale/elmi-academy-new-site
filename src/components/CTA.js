import { Link as ChakraLink, Button, Box } from "@chakra-ui/core";

const CTA = () => (
  <Box py={2}>
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
  </Box>
);

export default CTA;
