export type MenuOpts = "home" | "skills" | "works" | "contact" | "blog";

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
