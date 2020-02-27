import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Heading, Divider, List, ListItem, Box, Button, Grid } from "@chakra-ui/core";

import { Home } from "./pages/Home";
import { AppStoreContext } from "./stores/AppStore";
// import { Login } from "./pages/Login";
// import { Register } from "./pages/Register";

export const Routes: React.FC = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  const { toggleIncidentFormDrawer: toggleCreateIncidentDrawer } = useContext(AppStoreContext)


  return (
    <BrowserRouter>
      <Grid gridTemplateColumns="1fr 4fr">
        <Box p={5} backgroundColor="gray.700" color="white" display="flex" flexDirection="column">
          <Heading as="h1" size="2xl">IRMA</Heading>
          <Divider />
          <Button marginTop={5} leftIcon="add" backgroundColor="teal.500" onClick={toggleCreateIncidentDrawer}>Report incident</Button>
          <List spacing={5} paddingTop={10}>
            <ListItem>
              <Link to="/">Incidents</Link>
            </ListItem>
            <ListItem>
              <Link to="/team">My Team</Link>
            </ListItem>
            <ListItem>
              <Link to="/stats">Statistics</Link>
            </ListItem>
          </List>
          {/* <IconButton marginTop="auto" aria-label="Toggle Dark Mode" onClick={toggleColorMode} icon={colorMode === "dark" ? "moon" : "sun"} /> */}
        </Box>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/register" component={Register} /> */}
        </Switch>
      </Grid>
    </BrowserRouter>
  );
};
