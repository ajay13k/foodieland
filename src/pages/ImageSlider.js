import {
  Image,
  Box,
  Heading,
  Flex,
  Text,
  Button,
  HStack,
  Wrap,
  WrapItem,
  Avatar,
  Container,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsFillAlarmFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { MdOutlineSlowMotionVideo, MdKitchen } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
const ImageSlider = () => {
  const handlEvent = ()=>{
    Window.scroll(0,0);

  }
  const [data, setData] = useState([]);

  const getPopularReceipeData = async () => {
    const URL = "https://foodielandnod.herokuapp.com/api/popularRecipes";
    const res = await axios.get(URL);
    const receipeData = res.data;
    setData(receipeData);
  };

  useEffect(() => {
    getPopularReceipeData();
  }, []);

  return (
    <Container maxW={1150} mx="auto">
      <Carousel infiniteLoop>
        {data. slice(2, 8).map((item) => {
          return (
            <Box>
              <Flex
                maxW={1024}
                mx={"auto"}
                mb={10}
                mt={10}
                bg="#EBF8FF"
                borderRadius="15px"
                color={"#000"}
              >
                <Box w={512}>
                  <Button borderRadius="10px" mt={10} ml={-300}>
                    <MdKitchen /> Hot Receipe
                  </Button>
                  <Heading fontSize="4xl" mt={25} ml={5} mr={20}>
                    {item.recipeId.title}
                  </Heading>
                  <Text
                    fontSize={"sm"}
                    ml={10}
                    mt={5}
                    mb={5}
                    textAlign="justify"
                    mr={20}
                  >
                    {item.recipeId.description}
                  </Text>
                  <HStack ml={10} justifyItems={"space-between"}>
                    <Button borderRadius="10px" bgColor="#EDFDFD">
                      <BsFillAlarmFill />
                      {item.recipeId.prepTime}
                    </Button>
                    <Button borderRadius="10px" bgColor="#EDFDFD">
                      <ImSpoonKnife />
                      {item.recipeId.categoryId.categoryName}
                    </Button>
                  </HStack>
                  <Wrap
                    spacing="160px"
                    mt={20}
                    ml={10}
                    mb={5}
                    justifyItems={"space-between"}
                  >
                    <WrapItem>
                      <Avatar
                        size="sm"
                        name="Kent Dodds"
                        src={
                          "https://foodielandnod.herokuapp.com/" +
                          item.recipeId.categoryId.Image
                        }
                      />
                      <Box pl={3}>
                        <Heading fontSize={"sm"}>
                          {item.recipeId.categoryId.firstName}
                        </Heading>
                        <Text fontSize={"sm"}>
                          {moment(item.recipeId.categoryId.createdAt).format(
                            "MMM Do YY"
                          )}
                        </Text>
                      </Box>
                    </WrapItem>
                    <Link style={{textDecoration: 'none'}} to={`recipes/${item._id}`} onClick={handlEvent} className="links">
                    <Button
                      borderRadius="10px"
                      bgColor="#000"
                      colorScheme="#fff"
                    >
                      View Receipe
                      <MdOutlineSlowMotionVideo />
                    </Button>
                    </Link>
                  </Wrap>
                </Box>
                <Box w={512}>
                  <Image
                    src={
                      "https://foodielandnod.herokuapp.com/" +
                      item.recipeId.image
                    }
                    height="500px"
                  />
                </Box>
              </Flex>
            </Box>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default ImageSlider;
