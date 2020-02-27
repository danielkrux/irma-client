import { observable, action } from "mobx";
import { createContext } from "react";

class AppStore {
  @observable incidentFormDrawer: boolean = false;

  @action
  toggleIncidentFormDrawer = () => {
    return this.incidentFormDrawer = !this.incidentFormDrawer
  }
}

export const AppStoreContext = createContext(new AppStore());
