import {
  Container,
  Flex,
  Box,
  Heading,
  Button,
  HStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Textarea,
  Image,
  Select,
} from "@chakra-ui/react";
import Static2 from "../componets/static2";
import ContactRecipe from "../componets/contactRecipe";
import Footer from "../componets/footer";
const Contact = () => {
  return (
    <>
      <Container maxW={1124} mx="auto">
        <Flex>
          <Box mt="70px" mr="40px" height="190px">
            <Image
              bg="#e6ffff"
              src="https://firebasestorage.googleapis.com/v0/b/foodieland-3b1ed.appspot.com/o/cooker%2FCook-contact.png?alt=media&token=6d41b736-1b6c-4929-9b2e-fd6319ebfa2b"
            />
          </Box>
          <Box mt="40px" w="100%">
            <Heading ml="10px" mb="30px">
              Contact us
            </Heading>
            <HStack spacing="50px" mb="15px">
              <FormControl id="name">
                <FormLabel>NAME</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <Input type="text" size="md" placeholder="enter your name" />
                </InputGroup>
              </FormControl>
              <FormControl id="email address">
                <FormLabel>EMAIL ADDRESS</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <Input type="text" size="md" placeholder="enter your email" />
                </InputGroup>
              </FormControl>
            </HStack>
            <HStack spacing="50px" mb="15px">
              <FormControl id="subject">
                <FormLabel>SUBJECT</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <Input
                    type="text"
                    size="md"
                    placeholder="enter your subject"
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="enquiry type">
                <FormLabel>ENQUIRY TYPE</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <Select placeholder="Advertising">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </InputGroup>
              </FormControl>
            </HStack>
            <FormControl id="message">
              <FormLabel>MESSAGES</FormLabel>
              <Textarea placeholder="enter your messages" />
            </FormControl>
            <FormControl id="name">
              <Button
                variant="solid"
                bg="black"
                color="white"
                ml="210px"
                mt="30px"
              >
                Submit
              </Button>
            </FormControl>
          </Box>
        </Flex>
      </Container>
      <Static2 />
      <ContactRecipe />
      <Footer />
    </>
  );
};

export default Contact;
