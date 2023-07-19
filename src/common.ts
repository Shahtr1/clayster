import angular from "./assets/icons/skills/Angular.png";
import figma from "./assets/icons/skills/Figma.png";
import java from "./assets/icons/skills/Java.png";
import javascript from "./assets/icons/skills/Javascript.png";
import jquery from "./assets/icons/skills/Jquery.png";
import laravel from "./assets/icons/skills/Laravel.png";
import node from "./assets/icons/skills/Node js.png";
import react_icon from "./assets/icons/skills/React.png";
import tryhackme from "./assets/icons/skills/TryHackMe.png";
import vue from "./assets/icons/skills/Vue.png";
import t360pay from "./assets/icons/works/t360 logo.png";
import rc from "./assets/icons/works/RC.png";
import { Links, Logos, MenuOpts, Skills } from "./data/model";
import portfolio from "./assets/icons/menus/portfolio.png";
import active_portfolio from "./assets/icons/menus/active_portfolio.png";
import skills from "./assets/icons/menus/skills.png";
import active_skills from "./assets/icons/menus/active_skills.png";
import contact from "./assets/icons/menus/contact.png";
import active_contact from "./assets/icons/menus/active_contact.png";

export function goTo(link: Links | string, isUrl = false): string | void {
  let url = "";

  if (isUrl) {
    url = "https://" + link;
  } else {
    switch (link) {
      case "github":
        url = "https://github.com/Shahtr1";
        break;
      case "linkedin":
        url = "https://www.linkedin.com/in/shahrukh-tramboo-96a07127b";
        break;
      case "tryhackme":
        url = "https://tryhackme.com/p/clayster404";
        break;
      case "twitter":
        url = "https://twitter.com/CLAYster404";
        break;
      default:
        url = "https://www.instagram.com/shahrukhtramboo/";
    }

    window.open(url, "_blank");

    return url;
  }

  window.open(url, "_blank");
}

export function getTitleIcon(logo: Logos): string {
  switch (logo) {
    case "t360pay":
      return t360pay;
    default:
      return rc;
  }
}

export function getMenuIcon(menu: MenuOpts, activeMenu: MenuOpts): string {
  switch (menu) {
    case "works":
      return activeMenu === "works" ? active_portfolio : portfolio;
    case "skills":
      return activeMenu === "skills" ? active_skills : skills;
    default:
      return activeMenu === "contact" ? active_contact : contact;
  }
}

export function getSkillIcon(skill: Skills): string {
  switch (skill) {
    case "javascript":
      return javascript;
    case "react":
      return react_icon;
    case "angular":
      return angular;
    case "laravel":
      return laravel;
    case "jquery":
      return jquery;
    case "tryhackme":
      return tryhackme;
    case "java":
      return java;
    case "figma":
      return figma;
    case "node":
      return node;
    default:
      return vue;
  }
}

export function isInViewport(item: HTMLElement) {
  const bounding = item.getBoundingClientRect(),
    myElementHeight = item.offsetHeight,
    myElementWidth = item.offsetWidth;

  return (
    bounding.top >= -myElementHeight &&
    bounding.left >= -myElementWidth &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) +
        myElementWidth &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) +
        myElementHeight
  );
}
