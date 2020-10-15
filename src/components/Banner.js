import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Image,
  Button,
  useColorMode,
} from "@chakra-ui/core";

const Banner = () => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "linear-gradient(90deg,#530d55,#6d27ad)",
    dark: "linear-gradient(90deg,#200621,#463556)",
  };
  const txtColor = {
    light: "gray.50",
    dark: "gray.200",
  };
  return (
    <Box
      as="main"
      width="100%"
      background={bgColor[colorMode]}
      color={txtColor[colorMode]}
    >
      <Flex
        mx="auto"
        pt={4}
        maxWidth="1140px"
        justify="space-around"
        align="center"
        direction={{ base: "column", md: "row" }}
      >
        <Box px={{ base: "1rem", md: "none" }} pb="2rem">
          <Stack spacing={12}>
            <Heading as="h1">
              Elmi Academy is a World class IT Training Center in Hargeisa,
              Somaliland.
            </Heading>
            <Text fontSize="xl">
              Elmi Academy helps Student in East Africa to get well paid Tech
              Jobs, freelancing, anywhere in the world
            </Text>
            <Button
              color="gray.500"
              bg={txtColor[colorMode]}
              size="lg"
              width="12rem"
              mx="auto"
            >
              Learn More
            </Button>
          </Stack>
        </Box>
        <Box order={{ base: -1, md: 3 }} mb={6} justifySelf="center">
          <Image
            maxWidth="80%"
            objectFit="cover"
            src="images/code1.png"
            alt="Elmi Academy learn coding"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Banner;
