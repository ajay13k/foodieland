import React, { useState, useEffect } from "react";
import axios from "axios";
import { Heading, GridItem,Grid,Image,Text,Button ,HStack} from "@chakra-ui/react";
function Category_api() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      const response = await axios.get(
        "http://95.111.202.157:8001/api/getAllCategory"
      );
      console.log(response);

      setCategory(response.data);
    };

    loadPost();
  }, []);

  return (
    <>
      <div>
        <HStack>
        <Heading marginRight='850px'>Category</Heading>
        <Text><Button bg="#ccffff" color="black" marginTop="20px" border="1px solid " >View All Categoryies</Button></Text>
        </HStack>
        <Grid templateColumns="repeat(6, 1fr)" gap={6} m={10}>
          {category.slice(2,8).map((image) => (
            <GridItem w="100%" h="10" key={image._id} m={10}>
              <Image
                w="100px"
                src={"http://95.111.202.157:8001/" + image.image}
              />
              {image.categoryName}
            </GridItem>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default Category_api;
