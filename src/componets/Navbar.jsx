import "./index.css";
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
            <a href="#" title="Logo" className="logo">foodieland </a>
          </Text>
        </Flex>
        <HStack marginRight="300px" fontWeight="bold" spacing='50px'>
              <Link className="active" to="/">Home</Link>
              <Link className="common"to="/recipes">Recipes</Link>
              <Link className="common"to="/blog">Blog</Link>
              <Link className="common"to="/contact">Contact</Link>
              <Link className="common"to="/about">About us</Link>
          </HStack>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <HStack mr="50px">
            <FaFacebook  className="facebook" title="facebook"/>
            <FaInstagram className="instagram" title="instagram"/>
            <FaTwitter className="twitter" title="twitter"/>
          </HStack>
        </Stack>
      </Flex>
    </Box>
  );
}
export default Navbar;
