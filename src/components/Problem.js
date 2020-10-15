import { Box, Flex, Image, Heading, Divider } from "@chakra-ui/core";
export default function Problem() {
  return (
    <Box bg="gray.300" py={8}>
      <Heading textAlign="center" mb={8}>
        Current Problem
      </Heading>
      <Divider mb={8} />
      <Flex
        justify="space-around"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Boxed img="images/gap2.png" text="Skills Gap" />
        <Boxed img="images/market demand.png" text="Market Demand" />
        <Boxed img="images/jobless.png" text="Unemployment" />
      </Flex>
    </Box>
  );
}

function Boxed({ img, text }) {
  return (
    <Flex flexDirection="column" align="center" mb={12}>
      <Image maxWidth={250} maxHeight={120} src={img} mb="4" alt={text} />
      <Heading as="h5" fontSize="1.2rem">
        {text}
      </Heading>
    </Flex>
  );
}
