import {
  Box,
  Flex,
  Heading,
  Stack,
  List,
  ListItem,
  ListIcon,
  VStack,
  Divider,
  HStack,
  Image,
  Text,
  Spacer,
  Img,
} from "@chakra-ui/react";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function RecipeIngrediant() {
  const handlEvent = () => {
    Window.scroll(0, 0);
  };
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
    <Box maxW={1024} mx={"auto"}>
      <Flex mt={10}>
        <Box>
          <Stack spacing={5}>
            <Heading fontSize={"4xl"}>Ingredients</Heading>
            <Heading fontSize={"lg"}>For Main Dish</Heading>
            <VStack>
              <List spacing={8}>
                <ListItem as="s" color={"gray.400"}>
                  <ListIcon as={FaCheckCircle} color={"#000"} />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <Divider />
                <ListItem>
                  <ListIcon as={FiCircle} />
                  Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </ListItem>
                <Divider />
                <ListItem>
                  <ListIcon as={FiCircle} />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
                <Divider />
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ListIcon as={FiCircle} />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
                <Divider />
              </List>
            </VStack>
            <Heading mt={10} fontSize={"lg"}>
              For The Sauce
            </Heading>
            <VStack>
              <List spacing={8}>
                <ListItem>
                  <ListIcon as={FiCircle} />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <Divider />
                <ListItem>
                  <ListIcon as={FiCircle} />
                  Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </ListItem>
                <Divider />
                <ListItem>
                  <ListIcon as={FiCircle} />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
                <Divider />
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ListIcon as={FiCircle} />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
                <Divider />
              </List>
            </VStack>
          </Stack>
        </Box>
        <Spacer />
        <Box w={380}>
          <Heading fontSize={"4xl"}>Other Receipe</Heading>
          {recipe.slice(1, 4).map((item) => (
            <>
              <Stack mt={5}>
                <HStack>
                  <Link to={`/recipes/${item._id}`} onClick={handlEvent}>
                    <Image
                      w="300px"
                      height="200px"
                      src={
                        "https://foodielandnod.herokuapp.com/" +
                        item.recipeId.image
                      }
                    />
                  </Link>
                  <Stack>
                    <Heading fontSize={"lg"}>{item.recipeId.title}</Heading>
                    <Heading fontSize={"sm"} color={"gray.400"}>
                      {item.recipeId.userId.firstName}
                    </Heading>
                  </Stack>
                </HStack>
              </Stack>
            </>
          ))}
          <HStack>
            <Img
              mt={20}
              w={"100%"}
              h={300}
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg"
            />
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}

export default RecipeIngrediant;
