import { observable, action } from "mobx";
import { createContext } from "react";
import { User } from "../models/User";

class AuthStore {
  @observable isLoggedIn: boolean = false;
  @observable accessToken: string | undefined;

  @observable user: User | undefined = {
    firstname: "",
    lastname: "",
    email: ""
  };

  @action
  setLogin = (user: User | undefined, accessToken: string | undefined) => {
    this.toggleIsLoggedIn();
    this.setUser(user);
    this.setAccessToken(accessToken)
  }

  logout = () => {
    this.isLoggedIn = false;
    this.user = {firstname:"", lastname:"", email:""}
    this.accessToken = ""
  }

  toggleIsLoggedIn = () => {
    this.isLoggedIn = !this.isLoggedIn;
  };

  setUser = (user: User | undefined) => {
    this.user = user;
  };

  setAccessToken = (accessToken: string | undefined) => {
    this.accessToken = accessToken;
  };
}

export const AuthStoreContext = createContext(new AuthStore());
