import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog/Blog"
import Contact from "./pages/Contact/Contact"
import Recipes from "./pages/Recipe/Recipes";
import BlogPost from "./pages/BlogPost"
import { Route, Switch } from "react-router-dom";
// import App from "./App";
import Navbar from './componets/Navbar';
import Home from './pages/Home/Home';
// import RecipeDetail from './pages/Recipe/recipeDetails';
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/blogPost" component={BlogPost} />
        <Route path="/contact" component={Contact} />
        <Route path="/recipes/:receipeId" component={Recipes} />
        {/* <Route path="/recipedetail/:receipeId" component={RecipeDetails} /> */}
      </Switch>
    </ChakraProvider>
  </BrowserRouter>,
  rootElement
);
