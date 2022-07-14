import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  Divider,
  Spacer,
  Center,
  Container,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <Container mt="20px" maxW={1124} mx="auto">
        <Flex mb={10}>
          <Box>
            <Heading>Foodieland</Heading>
            <Text>Lorem ipsum dolor sit, amet consectetur adipisicing</Text>
          </Box>
          <Spacer />
          <Box mt={8} justifyContent="space-between">
            <HStack>
              <Link className="active" to="/">
                Home
              </Link>
              <Link className="common" to="/recipes">
                Recipes
              </Link>
              <Link className="common" to="/blog">
                Blog
              </Link>
              <Link className="common" to="/blogPost">
                Blog Post
              </Link>
              <Link className="common" to="/contact">
                Contact
              </Link>
              <Link className="common" to="/about">
                About us
              </Link>
            </HStack>
          </Box>
        </Flex>
        <Divider borderColor="black.400" marginBottom="30px" />
        <Box>
          <Flex>
            <Text>@2022 Flow base Powered by webflow</Text>
            <Spacer />
            <HStack spacing={4}>
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
            </HStack>
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
