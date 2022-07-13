import {
  Heading,
  Center,
  Text,
  Box,
  Image,
  VStack,
  Avatar,
  Icon,
  Flex,
  ButtonGroup,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";
import Static2 from "../componets/static2";
import ContactRecipe from "../componets/contactRecipe";
import Footer from "../componets/footer";
const BlogPost = () => {
  return (
    <>
      <Box maxW={1024} mx={"auto"}>
        <Heading mt={10} textAlign={"center"}>
          Full Guide to Becoming a Professional Chef
        </Heading>
        <Center>
          <Box mt={10} display={"flex"}>
            <Avatar name="Ryan Florence" src="#" />
            <Text ml={3} fontSize={"lg"} mt={5}>
              John Smith
            </Text>
            <Icon mt={2} w={20} h={10} as={TbMinusVertical} />
            <Text fontSize={"lg"} mt={5}>
              13 july 2022
            </Text>
          </Box>
        </Center>
        <Text mt={8} textAlign={"center"}>
          We have created a list of easy sandwich recipes you can make for
          breakfast. But the highlight of these recipes is that <br />
          they come with a desi twist
        </Text>
        <Image
          w={1024}
          h="523px"
          mt={10}
          borderLeftRadius={"3xl"}
          borderRightRadius={"3xl"}
          src={
            "https://download-accl.zoho.com/webdownload?x-service=CLIQ&event-id=0e17e076835b478c3ae33ddb3d3408e2747ab2ea3c5e4633bad3f7f2db64c5fa58c26ecf524036c1f2687b771fa45cb630c3be46bfb02102270cb6649fbeaa22&x-cli-msg=%7B%22thumbnail%22%3Atrue%7D"
          }
        />
      </Box>
      <Flex mt={10} maxW={1024} mx={"auto"}>
        <Box w={800}>
          <Box>
            <Heading fontSize={"1xl"}>
              How did you start out in the food industry?
            </Heading>
            <Text mt={2} color={"gray.400"} fontSize={"md"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </Text>
          </Box>
          <Box mt={10}>
            <Heading fontSize={"1xl"}>
              How did you start out in the food industry?
            </Heading>
            <Text mt={2} color={"gray.400"} fontSize={"md"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </Text>
          </Box>
          <Box>
            <Heading mt={10} fontSize={"1xl"}>
              Do you cook at home on your days off
            </Heading>
            <Image
              mt={3}
              src={
                "https://download-accl.zoho.com/webdownload?x-service=CLIQ&event-id=0e17e076835b478c3ae33ddb3d3408e2b5a4deee01ab8b91e60ba1783e8063ebac639052e45f9e4910cdd373508671d130c3be46bfb02102270cb6649fbeaa22&x-cli-msg=%7B%22thumbnail%22%3Atrue%7D"
              }
            />
          </Box>
          <Box>
            <Text mt={10} fontSize={"3xl"} bg={"lightgray"}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </Text>
          </Box>
          <Box>
            <Heading mt={10} fontSize={"1xl"}>
              What is the biggest misconception that people have about being
              about a professional Chef
            </Heading>
            <Text mt={2} color={"gray.400"} fontSize={"md"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </Text>
          </Box>
        </Box>
        <Box w={200} mt={10}>
          <Heading>Share This On</Heading>
          <ButtonGroup>
            <VStack>
              <Button mt="10">{<FaFacebook  color="blue"/>}</Button>
              <Spacer />
              <Button mt="10">{<FaTwitter color="blue"/>}</Button>
              <Spacer />
              <Button my="10">{<FaInstagram color="red" />}</Button>
            </VStack>
          </ButtonGroup>
        </Box>
      </Flex>
      <Static2 />
      <ContactRecipe/>
      <Footer/>
    </>
  );
};

export default BlogPost;
