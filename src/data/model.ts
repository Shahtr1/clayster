import angular from "../assets/icons/skills/Angular.png";
import figma from "../assets/icons/skills/Figma.png";
import java from "../assets/icons/skills/Java.png";
import javascript from "../assets/icons/skills/Javascript.png";
import jquery from "../assets/icons/skills/Jquery.png";
import laravel from "../assets/icons/skills/Laravel.png";
import node from "../assets/icons/skills/Node js.png";
import react_icon from "../assets/icons/skills/React.png";
import tryhackme from "../assets/icons/skills/TryHackMe.png";
import vue from "../assets/icons/skills/Vue.png";
import t360pay from "../assets/icons/works/t360 logo.png";
import rc from "../assets/icons/works/RC.png";

export type MenuOpts = "home" | "skills" | "works" | "contact";

export interface IMenu {
  title?: string;
  menu: MenuOpts;
}

export interface IWork {
  titleIconBgColor?: string;
  titleIcon: Logos;
  description: string;
  skills: Skills[];
  link: string;
  cover: string;
  heading: string;
}

export type Links =
  | "github"
  | "linkedin"
  | "tryhackme"
  | "twitter"
  | "instagram"
  | "t360pay"
  | "rc";

export type Skills =
  | "angular"
  | "figma"
  | "java"
  | "javascript"
  | "jquery"
  | "laravel"
  | "node"
  | "react"
  | "tryhackme"
  | "vue";

export type Logos = "t360pay" | "rc";

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
