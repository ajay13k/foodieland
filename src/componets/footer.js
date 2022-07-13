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
              <Text>Recipes</Text>
              <Text>Blog</Text>
              <Text>Contact</Text>
              <Text>About Us</Text>
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
