import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { Home } from "./pages/Home";
// import { Login } from "./pages/Login";
// import { Register } from "./pages/Register";

import styles from './styles/nav.module.scss'

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <header className={styles.header}>
          IRMA
          <div className={styles.links}>
            <Link to="/">Home</Link>
            {/* <Link to="/register">Register</Link>
            <Link to="/login">Login</Link> */}
          </div>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/register" component={Register} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};
