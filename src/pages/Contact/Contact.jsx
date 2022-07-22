import {
  Flex,
  Box,
  Select,
  Image,
  Textarea,
  Text,
  Input,
  HStack,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Container,
  Center,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import React from "react";
import Static2 from "../Home/static2";
import Footer from "../Home/footer";
import ContactRecipe from "./contactRecipe";
const Contact = () => {
  return (
    <>
      <Container maxW={1124} mx="auto">
        <Flex>
          <Box mt="50px" mr="40px">
            <Image
              bg="#e6ffff"
              src="https://firebasestorage.googleapis.com/v0/b/foodieland-3b1ed.appspot.com/o/cooker%2FCook-contact.png?alt=media&token=6d41b736-1b6c-4929-9b2e-fd6319ebfa2b"
            />
          </Box>
          <Box p={6} mt="20px">
            <Formik
              initialValues={{
                name: "",
                email: "",
                subject: "",
                enquery_type: "",
                messages: "",
              }}
              validate={(values) => {
                const errors = {};

                if (values.name.trim() === "") {
                  errors.name = " Name is Required";
                } else if (isNaN(values.name) === false) {
                  errors.name = "Name Contain only characters";
                }

                if (!values.email) {
                  errors.email = "Email is Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }

                if (values.subject.trim() === "") {
                  errors.subject = " subject  is Required";
                } else if (isNaN(values.subject) === false) {
                  errors.subject = " subject Contain only characters";
                }

                if (values.enquery_type === "") {
                  errors.enquery_type = " Please select Enquery type feild";
                }
                if (values.messages === "") {
                  errors.messages = " messages is required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  const formdata = JSON.stringify(values, null, 2);

                  fetch(
                    "https://foodielandnod.herokuapp.com/api/addContactDetails",
                    {
                      method: "POST",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                      body: formdata,
                    }
                  ).then(function (response) {
                    console.log(response);
                    if (response.status === 200) {
                      alert("data submitted successfully");
                    } else {
                      alert("email allready exists");
                    }
                  });

                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <HStack align="flex-start">
                    <FormControl>
                      <FormLabel htmlFor="Name">NAME</FormLabel>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name "
                        size="lg"
                        onChange={handleChange}
                        value={values.name}
                      />
                      <Text color={"red"} fontSize={"sm"}>
                        {errors.name && touched.name && errors.name}
                      </Text>
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="email">EMAIL ADDRESS</FormLabel>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        size="lg"
                        value={values.email}
                        onChange={handleChange}
                      />
                      <Text color={"red"} fontSize={"sm"}>
                        {errors.email && touched.email && errors.email}
                      </Text>
                    </FormControl>
                  </HStack>
                  <HStack spacing={4} align="flex-start" mt={10}>
                    <FormControl>
                      <FormLabel htmlFor="subject">SUBJECT</FormLabel>
                      <Field
                        as={Input}
                        id="subject"
                        name="subject"
                        type="text"
                        size="lg"
                        placeholder="Enter your subject"
                        value={values.subject}
                        onChange={handleChange}
                      />
                      <Text color={"red"} fontSize={"sm"}>
                        {errors.subject && touched.subject && errors.subject}
                      </Text>
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="enquery">ENQURY TYPE</FormLabel>
                      <Stack spacing={3}>
                        <Select
                          size="lg"
                          name="enquery_type"
                          value={values.enquery_type}
                          onChange={handleChange}
                        >
                          <option disabled> ENQUIRY TYPE </option>
                          <option>Advertising</option>
                          <option>Commercial</option>
                          <option>Support</option>
                        </Select>
                      </Stack>
                      <Text color={"red"} fontSize={"sm"}>
                        {errors.enquery_type &&
                          touched.enquery_type &&
                          errors.enquery_type}
                      </Text>
                    </FormControl>
                  </HStack>
                  <HStack spacing={10} mt={10}>
                    <FormControl>
                      <FormLabel htmlFor="message" value={values.messages}>
                        MESSAGES
                      </FormLabel>
                      <Textarea
                        type="text"
                        name="messages"
                        value={values.messages}
                        onChange={handleChange}
                        borderColor="gray.300"
                        _hover={{
                          borderRadius: "gray.300",
                        }}
                        placeholder="message"
                      />
                      <Text color={"red"} fontSize={"sm"}>
                        {errors.messages && touched.messages && errors.messages}
                      </Text>
                    </FormControl>
                  </HStack>
                  <Center>
                    <HStack pt={12}>
                      <Button type="submit" disabled={isSubmitting}>
                        Submit
                      </Button>
                    </HStack>
                  </Center>
                </form>
              )}
            </Formik>
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
