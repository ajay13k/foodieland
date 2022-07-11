import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Recipes from "./pages/Recipes";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import Navbar from './componets/Navbar';
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/recipes" component={Recipes} />
      </Switch>
    </ChakraProvider>
  </BrowserRouter>,
  rootElement
);
