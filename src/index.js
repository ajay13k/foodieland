import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import App from './App';
const rootElement = document.getElementById("root");
ReactDOM.render(

  <BrowserRouter>
    <ChakraProvider>
      <App/>
    </ChakraProvider>
  </BrowserRouter>,
  rootElement
);
