import React from "react";
import {
  Box,
  Link as ChakraLink,
  Heading,
  Flex,
  Text,
  Button,
  Icon,
  Image,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
} from "@chakra-ui/core";
import { DarkModeSwitch } from "./DarkModeSwitch";

const MenuItems = ({ children, href = "/" }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    <ChakraLink href={href}>{children}</ChakraLink>
  </Text>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => setShow(!show);

  return (
    <Box as="header" width="100%">
      <Flex
        as="nav"
        position="relative"
        align="center"
        justify="space-between"
        wrap="wrap"
        mx="auto"
        maxWidth="1140px"
        px={["2rem", "2rem", "1rem"]}
        py="1.5rem"
        {...props}
      >
        <Flex align="center" mr={5}>
          <Image
            border="1"
            w={{ base: "3rem", md: "4rem" }}
            src="images/logo.jpg"
            alt="Elmi Academy Logo"
            mr={1}
          />
          <Heading as="h1" fontSize={{ base: "sm", md: "2xl" }}>
            Elmi Academy
          </Heading>
        </Flex>

        <Box
          display={{ base: "block", md: "none" }}
          mr={{ base: "2rem", md: "4rem" }}
        >
          <Icon name="drag-handle" onClick={onOpen} />
        </Box>
        {/* Drawer Menu for Mobiles */}
        <DrawerMenu isOpen={isOpen} onClose={onClose} />
        <Flex
          justifySelf="end"
          justify="flex-end"
          mr="2.5rem"
          flexGrow={1}
          display={{ base: show ? "block" : "none", md: "flex" }}
        >
          <MenuItems>Home</MenuItems>
          <MenuItems href="/courses">Courses</MenuItems>
          <MenuItems href="/about">About</MenuItems>
          <MenuItems href="/articles">Articles</MenuItems>
        </Flex>
        <Box pos="absolute" right="1.5rem">
          <DarkModeSwitch />
        </Box>
      </Flex>
    </Box>
  );
};

function DrawerMenu({ isOpen, onClose }) {
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Elmi Academy</DrawerHeader>

          <DrawerBody>
            <MenuItems>Home</MenuItems>
            <Divider />
            <MenuItems href="/courses">Courses</MenuItems>
            <Divider />
            <MenuItems href="/about">About</MenuItems>
            <Divider />
            <MenuItems href="/articles">Articles</MenuItems>
            <Divider />
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
