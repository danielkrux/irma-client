import React, { useContext, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Heading, Divider, List, ListItem, Box, Button, Grid, Text } from "@chakra-ui/core";

import { Home } from "./pages/Home";
import { AppStoreContext } from "./stores/AppStore";
import { LoginModal } from "./components/loginModal";
import { AuthStoreContext } from "./stores/AuthStore";
import { observer } from "mobx-react";

export const Routes: React.FC = observer(() => {
  let { toggleIncidentFormDrawer, toggleLoginModal } = useContext(AppStoreContext);
  const { isLoggedIn, user, logout } = useContext(AuthStoreContext);

  return (
    <BrowserRouter>
      <Grid gridTemplateColumns="1fr 4fr">
        <Box p={5} backgroundColor="gray.700" color="white" display="flex" flexDirection="column">
          <Heading as="h1" size="2xl">IRMA</Heading>
          <Divider />
          <Button marginTop={5} leftIcon="add" variantColor="teal" onClick={toggleIncidentFormDrawer}>Report incident</Button>
          <List spacing={5} paddingTop={10}>
            <ListItem>
              <Link to="/">Incidents</Link>
            </ListItem>
            {isLoggedIn &&
              <ListItem>
                <Link to="/team">My Team</Link>
              </ListItem>
            }
            {isLoggedIn &&
              <ListItem>
                <Link to="/stats">Statistics</Link>
              </ListItem>
            }
          </List>

          {isLoggedIn ?
            <Text mt="auto" color="white">Hello {user?.firstname} <Button variant="link" onClick={() => logout()}>Logout</Button></Text>
            :
            <Button variant="outline" variantColor="teal" mt="auto" onClick={toggleLoginModal}>Login</Button>
          }
        </Box>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Grid>
      <LoginModal styles={{ marginTop: 'auto' }}/>
    </BrowserRouter>
  );
});
