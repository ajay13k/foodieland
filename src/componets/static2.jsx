import {
  Image,
  Heading,
  Text,
  Button,
  Grid,
  GridItem,
  Box
} from "@chakra-ui/react";
const Static2 = () => {
  return (
    <>
    <Box maxW={1124} mx="auto" mt="10">
        <Grid templateColumns='repeat(3, 1fr)' gap={20} bg="#ccffff" borderLeftRadius="3xl" borderRightRadius="3xl">
          <GridItem w="100%" mt="25px">
            <Image src="/images/salad.png" alt="Dan Abramov" />
          </GridItem>
          <GridItem w="100%" mt="90px">
            <Text>
              <Heading marginBottom="10px" fontSize="2xl">
                Delicious to your inbox
              </Heading>
             
              <Text> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque eligendi</Text>
              <input type="text" width="10px" value="enter your email" />
              <Button
                bg="black"
                color="white"
                marginTop="20px"
                border="2px solid black"
              >
                Subscribe
              </Button>
            </Text>
          </GridItem >
          <GridItem w="100%" mt="103px" ml="60px">
            <Image src="/images/plate.png" alt="Dan Abramov" />
          </GridItem>
        </Grid>
        </Box>

    </>
  );
};

export default Static2;
