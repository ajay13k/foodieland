import { Image, Box, Flex, Heading, Text, Spacer, Button } from "@chakra-ui/react";
const Static2 = () => {
    return (
        <>
            <Flex
                bg="#ccffff"
                borderLeftRadius="3xl"
                borderRightRadius="3xl"
                marginLeft="20px"
                marginRight="20px"
            >
                <Flex>
                    <Box>
                        <Image src="/images/salad.png" alt="Dan Abramov" />
                    </Box>
                </Flex>
                <Flex alignContent="center" marginTop="70px" marginLeft="140px">
                    <Text>
                        <Heading marginBottom="10px" fontSize="25px">Delicious to your inbox</Heading>
                        Lorem ipsum dolor sit, amet consectetur
                        <Text>adipisicing elit. Doloremque eligendi, unde</Text>
                        <input type="text" width="10px" value="enter your email" />
                        <Button bg="black" color="white" marginTop="20px" border="2px solid black">Subscribe</Button>
                    </Text>
                </Flex>
                <Flex>
                    <Box marginTop="160px" marginLeft="300px">
                        <Image src="/images/plate.png" alt="Dan Abramov" />
                    </Box>
                </Flex>
            </Flex>
        </>
    );
};

export default Static2;
