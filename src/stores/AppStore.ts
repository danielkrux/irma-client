import { observable, action } from "mobx";
import { createContext } from "react";

class AppStore {
  @observable incidentFormDrawer: boolean = false;
  @observable loginModal: boolean = false

  @action
  toggleIncidentFormDrawer = () => {
    return this.incidentFormDrawer = !this.incidentFormDrawer
  }

  @action
  toggleLoginModal = () => {
    this.loginModal = !this.loginModal
  }
}

export const AppStoreContext = createContext(new AppStore());
