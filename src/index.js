import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Fonts from './font-face'

import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
