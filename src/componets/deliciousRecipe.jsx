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
} from "@chakra-ui/react";
import { BsFillAlarmFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
function Delicious() {
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
      <HStack marginTop="30px">
        <Heading
          fontSize="40px"
          fontWeight="bold"
          marginLeft="20px"
          marginRight="200px"
        >
          try this delicious recipe
          <br /> to make your day
        </Heading>
        <Text align="center" marginTop="100px">
          Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet
          <br />
          consectetur ipsum dolor sit amet consectetur,
        </Text>
      </HStack>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} m={10}>
        {recipe.slice(1, 7).map((image) => (
          <GridItem w="100%" h="10px" key={image._id} marginBottom="300px">
            <Box p={5} bg="#EBF8FF" borderRadius={60} as="article">
              <Image
                paddingLeft="40px"
                w="300px"
                height="200px"
                src={"http://95.111.202.157:8001/" + image.recipeId.image}
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
    </>
  );
}

export default Delicious;
<Text align="center" marginTop="100px">
<Heading>Simple and tasty recipes</Heading>
<Text>
  Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet
  consectetur{" "}
</Text>
</Text>