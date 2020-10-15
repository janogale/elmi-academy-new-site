import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/core";

const Section = ({ content, title, img, btnText = "" }) => {
  return (
    <Box as="section" width="100%">
      <Flex
        mx="auto"
        pt={4}
        maxWidth="1140px"
        justify="space-around"
        align="center"
        direction={{ base: "column", md: "row" }}
      >
        <Box
          px={{ base: "1rem", md: "none" }}
          pb="2rem"
          maxWidth={{ md: "32rem" }}
        >
          <Stack spacing={12}>
            <Heading as="h1">{title}</Heading>
            <Text fontSize="xl">{content}</Text>
            {btnText && (
              <Button size="lg" width="12rem" mx="auto">
                {btnText}
              </Button>
            )}
          </Stack>
        </Box>
        <Box order={{ base: -1, md: 3 }} mb={6} justifySelf="center">
          <Image
            maxWidth="100%"
            objectFit="cover"
            src={img}
            alt="Elmi Academy learn coding"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Section;
