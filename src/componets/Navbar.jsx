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
export default function Navbar() {
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
        <HStack marginRight="400px" fontWeight="bold" spacing='50px'>
          <Text>Home</Text>
          <Text>Recipes</Text>
          <Text>Blog</Text>
          <Text>Contact</Text>
          <Text>About us</Text>
        </HStack>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <HStack>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </HStack>
        </Stack>
      </Flex>
    </Box>
  );
}

