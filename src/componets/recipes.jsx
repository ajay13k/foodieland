import React, { useState, useEffect } from "react";
import axios from "axios";
import { Heading, GridItem, Grid, Image, Text } from "@chakra-ui/react";
function Recipes_api() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      const response = await axios.get(
        "http://95.111.202.157:8001/api/v1/getAllRecipes"
      );  
      console.log("ajay", response); 

      setRecipe(response.data);
    };

    loadPost();
  }, []);

  return (
    <>
      <div>
        <Text align="center" marginTop="100px">
          <Heading>Simple and tasty recipes</Heading>
          <Text>Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur </Text>
          <Text>Lorem ipsum dolor sit amet consectetur, </Text>
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} m={10} >
          {recipe.slice(1,10).map((image) => (
            <GridItem w="100%" h="10px" key={image._id} m={5} marginBottom="300px" marginLeft="90px">
              <Image
              border="2px solid black"
                w="200px"
                height="200px"
                src={"http://95.111.202.157:8001/" + image.recipeId.image}
              />
              <Text width="250px" height="6px">
                {image.recipeId.description}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default Recipes_api;
