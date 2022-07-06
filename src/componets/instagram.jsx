import { Heading, Text, Grid, GridItem, Image,Button } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
const Instagram = () => {
  return (
    <>
      <Text align="center" marginTop="100px">
        <Heading>
          <b>Check Out @foodieland on Instagram</b>
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet
          consectetur{" "}
        </Text>
        <Text>Lorem ipsum dolor sit amet consectetur, </Text>
      </Text>
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={6}
        marginBottom="280px"
        marginLeft="150px"
        marginTop="30px"

      >
        <GridItem w="100%" h="10">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/foodieland-3b1ed.appspot.com/o/instagram%2Ffood-10.png?alt=media&token=c364a4b8-40a0-44ad-95a5-d706a0d98efa"
            alt="Dan Abramov"
          />
        </GridItem>
        <GridItem w="100%" h="10">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/foodieland-3b1ed.appspot.com/o/instagram%2Ffood-11.png?alt=media&token=d63e16b5-e524-4bbe-96e6-fe05ca251f8f"
            alt="Dan Abramov"
          />
        </GridItem>
        <GridItem w="100%" h="10">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/foodieland-3b1ed.appspot.com/o/instagram%2Ffood-12.png?alt=media&token=bbf3063f-9bcc-4355-8cbb-6feedec1e47b"
            alt="Dan Abramov"
          />
        </GridItem>
        <GridItem w="100%" h="10">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/foodieland-3b1ed.appspot.com/o/instagram%2Ffood-9.png?alt=media&token=17415fc0-4330-4441-917d-3c1d3f9e8915"
            alt="Dan Abramov"
          />
        </GridItem>
      </Grid>
      <Button borderRadius="10px" bgColor="#000" colorScheme="#fff" marginLeft="550px" marginBottom="20px" padding="40px" >visit our instagram<FaInstagram /></Button>
    </>
  );
};

export default Instagram;
