import {
  Heading,
  Text,
  Box,
  Grid,
  GridItem,
  Image,
  Avatar,
  Flex,
  HStack,
  Icon,
  VStack,
  Button,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import { FiPrinter, FiShare2 } from "react-icons/fi";
import { RiTimerFill } from "react-icons/ri";
import { TbToolsKitchen2 } from "react-icons/tb";
import RecipeDirection from "./recipeDirection";
import RecipeIngrediant from "./RecipeIngredient";
import Static2 from "../Home/static2";
import Footer from "../Home/footer";
import ContactRecipe from "../Contact/contactRecipe";
function Recipes() {
  const [recipe, setRecipe] = useState([]);
  const api = "https://foodielandnod.herokuapp.com/api/v1/getAllRecipes";

  useEffect(() => {
    const loadPost = async () => {
      const response = await axios.get(api);
      setRecipe(response.data);
    };

    loadPost();
  }, []);
  return (
    <>
      <Box mt={20} maxW={1088} mx={"auto"}>
        {recipe.slice(1, 2).map((item) => (
          <>
            <Heading>{item.recipeId.title}</Heading>
            <Flex mt={5}>
              <Box w={700}>
                <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                  <GridItem>
                    <HStack>
                      <Avatar
                        name="Ryan Florence"
                        src="https://bit.ly/ryan-florence"
                      />
                      <Text
                        fontSize={13}
                        fontWeight={"semibold"}
                        textAlign={"center"}
                      >
                        {item.recipeId.userId.firstName} <br />
                        {item.recipeId.updatedAt}
                      </Text>
                    </HStack>
                  </GridItem>
                  <GridItem>
                    <HStack ml={5} mt={1}>
                      <Icon as={RiTimerFill} />
                      <Text fontSize={13} fontWeight={"semibold"}>
                        Prep Time
                        <br />
                        {item.recipeId.prepTime}
                      </Text>
                    </HStack>
                  </GridItem>
                  <GridItem>
                    <HStack ml={1} mt={1}>
                      <Icon as={RiTimerFill} />
                      <Text fontSize={13} fontWeight={"semibold"}>
                        Cook Time
                        <br />
                        {item.recipeId.cookTime}
                      </Text>
                    </HStack>
                  </GridItem>
                  <GridItem>
                    <HStack mt={1}>
                      <Icon as={TbToolsKitchen2} />
                      <Text fontSize={13} fontWeight={"semibold"}>
                      {item.recipeId.categoryId.categoryName}
                      </Text>
                    </HStack>
                  </GridItem>
                </Grid>
                <Box mt={5}>
                  <Image
                    w={650}
                    h={460}
                    src={
                      "https://foodielandnod.herokuapp.com/" +
                      item.recipeId.image
                    }
                  />
                </Box>
              </Box>
              <Box>
                <VStack>
                  <Flex>
                    <Button>
                      <Icon as={FiPrinter} />
                      Print
                    </Button>
                    <Button ml={2}>
                      <Icon as={FiShare2} />
                      Share
                    </Button>
                  </Flex>
                  <Flex>
                    <Box
                      mt={7}
                      w={324}
                      borderLeftRadius={5}
                      borderRightRadius={5}
                      ml={5}
                      bg="#e6ffff"
                    >
                      <VStack mt={2}>
                        <Heading size={"md"}>Nutrition Information</Heading>
                        <Grid templateRow="repeat(5, 1fr)" gap={6}>
                          <GridItem mt={4}>
                            <HStack
                              w="275px"
                              h="10"
                              justifyContent={"space-between"}
                            >
                              <Text>Calories</Text> <Text>219.9 kcal</Text>
                            </HStack>
                          </GridItem>
                          <GridItem>
                            <HStack
                              w="275px"
                              h="10"
                              justifyContent={"space-between"}
                            >
                              <Text>Total Fat</Text>
                              <Text>10.7 g</Text>
                            </HStack>
                          </GridItem>
                          <GridItem>
                            <HStack
                              w="275px"
                              h="10"
                              justifyContent={"space-between"}
                            >
                              <Text>Protein</Text>
                              <Text>7.9 g</Text>
                            </HStack>
                          </GridItem>
                          <GridItem>
                            <HStack
                              w="275px"
                              h="10"
                              justifyContent={"space-between"}
                            >
                              <Text>Carbohydrate</Text>
                              <Text>22.5 g</Text>
                            </HStack>
                          </GridItem>
                          <GridItem>
                            <HStack
                              w="275px"
                              h="10"
                              justifyContent={"space-between"}
                            >
                              <Text>Cholestral</Text>
                              <Text>37.4 g</Text>
                            </HStack>
                          </GridItem>
                        </Grid>
                        <Box>
                          <Text mt={8} textAlign={"center"}>
                          {item.recipeId.description}
                          </Text>
                        </Box>
                      </VStack>
                    </Box>
                  </Flex>
                </VStack>
              </Box>
            </Flex>
            <Flex mt={20}>
              <Text>
              {item.recipeId.description}
              </Text>
            </Flex>
          </>
        ))}
      </Box>
      <RecipeIngrediant />
      <RecipeDirection />
      <Static2 />
      <ContactRecipe />
      <Footer />
    </>
  );
}

export default Recipes;
