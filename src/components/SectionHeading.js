import { Box, Flex, Stack, Heading, Text } from "@chakra-ui/core";

const SectionHeading = ({ content, title, subTitle = "" }) => {
  return (
    <Box as="section" width="100%">
      <Flex
        mx="auto"
        py={12}
        maxWidth={{ md: "60%" }}
        align="center"
        direction="column"
      >
        <Stack spacing={4} textAlign="center">
          <Heading fontSize="2.5rem">{title}</Heading>
          {subTitle && (
            <Heading color="gray.400" as="h5" fontSize="1.5rem">
              {subTitle}
            </Heading>
          )}
          <Text fontSize="xl">{content}</Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default SectionHeading;
