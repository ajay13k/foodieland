import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Heading,
  GridItem,
  Grid,
  Image,
  Text,
  HStack,
  Box,
  Button,
  Container,
} from "@chakra-ui/react";
import { BsFillAlarmFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
function Recipe_app() {
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
      <Container maxW={1150} mx="auto">
        <Text align="center" marginTop="150px">
          <Heading>Simple and tasty recipes</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet
            consectetur{" "}
          </Text>
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} m={10}>
          {recipe.slice(1, 7).map((image,key) => (
            <GridItem w="100%" h="10px" key={image._id} marginBottom="300px">
              <Box
                id ={key}
                bg="#EBF8FF"
                borderRadius={30}
                as="article"
                width="300px"
                height="270px"
              >
                <Image
                  w="300px"
                  height="200px"
                  src={
                    "https://foodielandnod.herokuapp.com/" +
                    image.recipeId.image
                  }
                />
                <HStack ml={10} justifyItems={"space-between"}>
                  <Button borderRadius="10px" bgColor="#EDFDFD">
                    <BsFillAlarmFill />
                    30 Minutes
                  </Button>
                  <Button borderRadius="10px" bgColor="#EDFDFD">
                    <ImSpoonKnife />
                    Chicken
                  </Button>
                </HStack>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Recipe_app;