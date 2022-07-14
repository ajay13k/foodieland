import { Box, Button, Grid, GridItem, HStack, Center } from "@chakra-ui/react";
import React from "react";
import Footer from "./footer";
import Static2 from "./static2";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumber = [];

  const pageSize = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= pageSize; i++) {
    pageNumber.push(i);
  }
  return (
    <>
      <Center>
        <Box mb="30px">
          <Grid templateColumns={6} gap={6}>
            <HStack>
              {pageNumber.map((number) => (
                <GridItem>
                  <Button
                    size={"lg"}
                    onClick={() => paginate(number)}
                    bgColor={"blue.200"}
                    borderRadius={15}
                    color={"white"}
                    _hover={{ bg: "#000", color: " #fff" }}
                  >
                    {number}
                  </Button>
                </GridItem>
              ))}
            </HStack>
          </Grid>
        </Box>
      </Center>
      <Static2 />
      <Footer />
    </>
  );
};

export default Pagination;