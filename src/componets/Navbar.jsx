import "./index.css";
import {
  Box,
  Flex,
  Text,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  HStack,
  Container,
  Button,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <Container maxW={1150} mx="auto">
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
              <a href="#" title="Logo" className="logo">
                foodieland{" "}
              </a>
            </Text>
          </Flex>
          <HStack marginRight="200px" fontWeight="bold" spacing="30px">
            <Link className="common" to="/">
              Home
            </Link>
            <Link className="common" to="/recipes/:receipeId">
              Recipes
            </Link>
            <Link className="common" to="/blog">
              Blog
            </Link>
            <Link className="common" to="/contact">
              Contact
            </Link>
            <Link className="common" to="/about">
              About us
            </Link>
          </HStack>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <HStack mr="50px">
              <Button>
                <a href="https://www.instagram.com/foodieland555/">
                  {<FaFacebook className="facebook" title="facebook" />}
                </a>
              </Button>
              <Button>
                <a href="https://www.instagram.com/foodieland555/">
                  {<FaInstagram className="instagram" title="instagram" />}
                </a>
              </Button>
              <Button>
                <a href="https://www.instagram.com/foodieland555/">
                  {<FaTwitter className="twitter" title="twitter" />}
                </a>
              </Button>
            </HStack>
          </Stack>
        </Flex>
      </Box>
    </Container>
  );
}
export default Navbar;
