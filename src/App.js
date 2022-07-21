import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";
import About from "./pages/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Recipes from "./pages/Recipe/Recipes";
import BlogPost from "./pages/BlogPost";
import { Route, Switch } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Home from "./pages/Home/Home";
const App = (props) => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/blogPost/:blogId" component={BlogPost} />
        <Route path="/contact" component={Contact} />
        <Route path="/recipes/:receipeId" component={Recipes} />
      </Switch>
    </>
  );
};

export default App;
