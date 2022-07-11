import React from 'react';
import {
    Center,
    Container,
    Heading,
    Box,
    Text,
    Input,
    Button,
    Flex,
    Img,
    HStack,
    Avatar,
    Stack,
  } from "@chakra-ui/react";
const Posts = ({ posts}) => {
  return (
<Container maxW={1080} mx={"auto"}>
      <Box>
        <Center>
          <Box mt={10}>
            <Heading fontSize={"5xl"}>Blog & Article</Heading>
          </Box>
        </Center>
        <Center>
          <Text mt={5} color={"gray.600"} fontSize={"sm"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </Center>
        <Center>
          <Box mt={12}>
            <Input
              placeholder="Search article, news or receipe..."
              size="lg"
              htmlSize={30}
              width="auto"
              borderRadius={15}
            />
            <Button
              borderRadius={15}
              bgColor={"#000"}
              color={"#fff"}
              size={"lg"}
              ml={2}
            >
              Search
            </Button>
          </Box>
        </Center>
      </Box>
      <Flex mt={20}>
        <Box w={750}>
          {posts.map((item) => {
            return (
              <Flex mb={5}>
                <Box w={250}>
                  <Img
                    src="images/food-16.png"
                    w={220}
                    h={200}
                    borderRadius={20}
                  />
                </Box>
                <Box w={400}>
                  <Heading fontSize={"md"}>{item.title}</Heading>
                  <Text
                    fontSize={"sm"}
                    color={"gray.500"}
                    textAlign={"justify"}
                  >
                    {item.description}
                  </Text>
                  <HStack mt={35}>
                    <Avatar
                      name="Ryan Florence"
                      src="https://bit.ly/ryan-florence"
                      size="sm"
                    />
                    <Heading fontSize={"sm"} fontWeight={800}>
                      John Smith
                    </Heading>
                    <Text fontSize={"sm"} color={"gray.500"}>
                      15 March 2022
                    </Text>
                  </HStack>
                </Box>
              </Flex>
            );
          })}
        </Box>
        <Box ml={10}>
          <Heading fontSize={"2xl"}>Tasty Receipes</Heading>
          <Flex>
            <Box>
              <HStack mt={5}>
                <Img
                  w={180}
                  h={120}
                  borderRadius={30}
                  src="images/food-11.png"
                />
                <Stack>
                  <Heading fontSize={"lg"}>
                    Chicken MeatBall With Creamy Cheese
                  </Heading>
                  <Heading fontSize={"sm"} color={"gray.400"}>
                    By Andreas Paul
                  </Heading>
                </Stack>
              </HStack>
              <HStack mt={5}>
                <Img
                  w={180}
                  h={120}
                  borderRadius={30}
                  src="images/food-14.png"
                />
                <Stack>
                  <Heading fontSize={"lg"}>
                    Chicken MeatBall With Creamy Cheese
                  </Heading>
                  <Heading fontSize={"sm"} color={"gray.400"}>
                    By Andreas Paul
                  </Heading>
                </Stack>
              </HStack>
              <HStack mt={5}>
                <Img
                  w={180}
                  h={120}
                  borderRadius={30}
                  src="images/food-14.png"
                />
                <Stack>
                  <Heading fontSize={"lg"}>
                    Chicken MeatBall With Creamy Cheese
                  </Heading>
                  <Heading fontSize={"sm"} color={"gray.400"}>
                    By Andreas Paul
                  </Heading>
                </Stack>
              </HStack>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Posts;