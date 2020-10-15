import { Flex, useColorMode } from "@chakra-ui/core";

const Container = (props) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.100", dark: "gray.600" };

  const color = { light: "black", dark: "white" };
  return (
    <Flex
      direction="column"
      mx="auto"
      minH="100vh"
      h="auto"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      width="100%"
      {...props}
    />
  );
};

export default Container;
