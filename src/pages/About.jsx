import {
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import Static2 from "../componets/static2";
import ContactRecipe from "../componets/contactRecipe";
import Footer from "../componets/footer";
const About = () => {
  return (
    <>
      <Container maxW={1024} mx="auto" mt={10}>
        <Grid templateColumns="repeat(2, 1fr)" gap={20}>
          <GridItem w="100%">
            <Heading>23 Years Of Experience In Cooking Services</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium id labore, minus doloremque quaerat, temporibus minima
              a, debitis doloribus eum dicta quae tempora nobis officiis
              molestias? Esse ipsum tempora debitis. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Praesentium id labore, minus
              doloremque quaerat, temporibus minima a, debitis doloribus eum
              dicta quae tempora nobis officiis molestias? Esse ipsum tempora
              debitis.
            </Text>
            <Button mt={6}>Discover More</Button>
          </GridItem>
          <GridItem w="100%">
            <Image
              w="100%"
              src="https://download-accl.zoho.com/webdownload?x-service=CLIQ&event-id=0e17e076835b478c3ae33ddb3d3408e21cd185d70f5bb3afa921417f255e6e654b98541e2dc82a18a9f6dffc74bc859f30c3be46bfb02102270cb6649fbeaa22"
            />
          </GridItem>
        </Grid>
        <Heading mt={10}>Our Professional Chef</Heading>
        <Grid templateColumns="repeat(4, 1fr)" gap={7} mt="10">
          <GridItem w="100%">
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <Text fontWeight="bold" ml="20px">Dan Abramov</Text>
          </GridItem>
          <GridItem w="100%">
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <Text fontWeight="bold" ml="20px">Dan Abramov</Text>
          </GridItem>
          <GridItem w="100%">
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <Text fontWeight="bold" ml="20px">Dan Abramov</Text>
          </GridItem>
          <GridItem w="100%">
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <Text fontWeight="bold" ml="20px">Dan Abramov</Text>
          </GridItem>
        </Grid>
      </Container>
      <Static2 />
      <ContactRecipe/>
      <Footer/>
    </>
  );
};

export default About;
