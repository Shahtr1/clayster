import { IMenu } from "./model";

export class MenuData {
  static get menus(): IMenu[] {
    return [
      {
        menu: "home",
        title: "Home",
      },
      {
        menu: "skills",
        title: "Skills",
      },
      {
        menu: "works",
        title: "My Works",
      },
      {
        menu: "contact",
        title: "Contact Me",
      },
    ];
  }
  static get menusMb(): IMenu[] {
    return [
      {
        menu: "works",
        title: "Portfolio",
      },
      {
        menu: "skills",
        title: "Skills",
      },

      {
        menu: "contact",
        title: "Contact Me",
      },
    ];
  }
}
