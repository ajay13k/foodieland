// import Home from "./pages/Home";
// import About from "./pages/About";
// import Blog from "./pages/Blog";
// import Contact from "./pages/Contact";
// import Recipes from "./pages/Recipes";
// import { Route, Switch } from 'react-router-dom';
// const App = () => {
//   return ( <>
//   <h1>dsfdsssssgfdf</h1>
//     <Switch>
//       <Route exact path='/' component={Home} />
//       <Route path='/about' component={About} />
//       <Route path='/blog' component={Blog} />
//       <Route path='/contact' component={Contact} />
//       <Route path='/recipes' component={Recipes} />
//     </Switch>

//   </> );
// }
import { Box } from "@chakra-ui/react";
import Static from "./componets/static";
import Static2 from "./componets/static2";
import Footer from "./componets/footer";
import Category_api from "./componets/category";
import Recipe_app from "./componets/recipes";
import Instagram from "./componets/instagram";
import Delicious from "./componets/deliciousRecipe";
import ImageSlider from "./ImageSlider"
import { SlideData } from "./SlideData";
export  function App() {
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

export default App;
