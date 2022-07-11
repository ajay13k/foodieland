import {
  Box,
  Flex,
  Text,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <Box>
      <Flex
        minH={"60px"}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("black.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            fontWeight="bold"
            fontStyle="italic"
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "black")}
          >
            Foodieland
          </Text>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <HStack>
            <>
            <Link to="/">Home</Link>
              <Link to="/app">App</Link>
              <Link to="/recipes">Recipes</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About us</Link>
            </>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </HStack>
        </Stack>
      </Flex>
    </Box>
  );
}
export default Navbar;
