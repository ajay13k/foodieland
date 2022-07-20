import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Heading,
  GridItem,
  Grid,
  Image,
  Text,
  Button,
  HStack,
  Container,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Category_api() {
  const api = "https://foodielandnod.herokuapp.com/api/getAllCategory";
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      const response = await axios.get(api);
      setCategory(response.data);
    };
    loadPost();
  }, []);

  return (
    <>
      <Container maxW={1150} mx="auto">
        <HStack>
          <Heading>Category</Heading>
          <Spacer />
          <Text>
            <Button bg="#EBF8FF" color="black" marginTop="20px">
              View All Categoryies
            </Button>
          </Text>
        </HStack>
        <Grid templateColumns="repeat(6, 1fr)" gap={6} m={10}>
          {category.slice(2, 8).map((item) => (
            <GridItem w="100%" h="10px" m={10}>
              <Link to={`#`}>
                <Image
                  w="100px"
                  src={"https://foodielandnod.herokuapp.com/" + item.image}
                />
              </Link>
              <Heading marginLeft="20px" fontSize="20px">
                {item.categoryName}
              </Heading>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Category_api;
