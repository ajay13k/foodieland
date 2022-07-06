import { Box, Flex, Heading, Text, HStack, Divider } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <Flex marginLeft="60px" marginBottom="30px">
        <Box marginTop="60px">
          <Heading>Foodieland</Heading>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing</Text>
        </Box>
        <Box
          marginLeft="500px"
          marginTop="100px"
          justifyContent="space-between"
        >
          <HStack>
            <Text>Recipes</Text>
            <Text>Blog</Text>
            <Text>Contact</Text>
            <Text>About Us</Text>
          </HStack>
        </Box>
      </Flex>
      <Divider borderColor="black.400" marginBottom="30px" />
      <Box marginLeft="380px">
        <HStack>
          <Text>
            @2022 Flow base Powered by webflow
          </Text> 
          <HStack paddingLeft="500px">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          </HStack>
        </HStack>
      </Box>
    </>
  );
};

export default Footer;
