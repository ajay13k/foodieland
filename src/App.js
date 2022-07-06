import "./styles.css";
import { Box } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
import { SlideData } from "./SlideData";
import Navbar from "./componets/Navbar";
import Static from "./componets/static";
import Static2 from "./componets/static2";
import Footer from "./componets/footer";
import Category_api from "./componets/category";
import Recipes_api from "./componets/recipes";
import Instagram from "./componets/instagram";
import Delicious from "./componets/deliciousRecipe";

export default function App() {
  return (
    <Box w="100%" p={4}>
      <Navbar />
      <ImageSlider slides={SlideData} />
      <Category_api />
      <Recipes_api />
      <Static />
      <Instagram/>
      <Delicious/>
      <Static2 />
      <Footer />
    </Box>
  );
}
