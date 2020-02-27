import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import { customTheme } from './styles/theme'
import { Routes } from "./Routes";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <Routes />
      </ThemeProvider>
    </ApolloProvider>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)
