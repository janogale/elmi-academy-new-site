import { Box, useColorMode } from "@chakra-ui/core";

const Container = (props) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.100", dark: "#0e141b" };

  const color = { light: "black", dark: "white" };
  return (
    <Box
      direction="column"
      position="relative"
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
