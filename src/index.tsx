import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Routes } from "./Routes";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import './styles/_global.scss'

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider>
      <CSSReset />
      <Routes />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

// applyPolyfills().then(() => {
//   defineCustomElements(window);
// });
