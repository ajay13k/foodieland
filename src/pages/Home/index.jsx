import { Box } from "@chakra-ui/react";
import Static from "./static";
import Static2 from "./static2";
import Footer from "./footer";
import Category_api from "./category";
import Recipe_app from "./recipes";
import Instagram from "./instagram";
import Delicious from "./deliciousRecipe";
import React, { useEffect } from 'react';
import ImageSlider from "../../ImageSlider";
export  function Home() {
  useEffect(() => {
    document.title = 'Foodieland';
  });
  return (
    <>

    <Box w="100%" p={4}>
      <ImageSlider />
      <Category_api />
      <Recipe_app />
      <Static />
      <Instagram/>
      <Delicious/>
      <Static2 />
      <Footer />
    </Box>
    </>
  );
}

export default Home;
