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
  Thead,
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
              <Link className="common" to="/">
                Home
              </Link>
              <Link className="common" to="/recipes/:receipeId">
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
          <Flex mb={5}>
            <Box ml="400px">
            <Text>@2022 Flow base Powered by <b className="red">webflow</b></Text>
            </Box>
            <Spacer />
            <HStack spacing={6} >
              <FaFacebook className="facebook"/>
              <FaInstagram  className="instagram"/>
              <FaTwitter className="twitter" />
            </HStack>
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
