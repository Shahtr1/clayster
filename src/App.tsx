import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Menu from "./components/Menu";
import SkillsCompanies from "./components/Skills-Companies";
import Works from "./components/works/Works";
import Socials from "./components/Socials";
import Contact from "./components/Contact";
import { MenuModel } from "./data/model";

function App() {
  const [activeMenu, setActiveMenu] = useState<MenuModel>("home");

  useEffect(() => {
    const home = document.getElementById("home") as HTMLElement;
    const skills = document.getElementById("skills") as HTMLElement;
    const works = document.getElementById("works") as HTMLElement;
    const contact = document.getElementById("contact") as HTMLElement;

    const windowInnerHeight = window.innerHeight;
    const maxAllowedOffsetHeight =
      windowInnerHeight - Math.round(windowInnerHeight / 3);

    window.onscroll = () => {
      if (Math.abs(home?.getBoundingClientRect().y) < maxAllowedOffsetHeight) {
        setActiveMenu("home");
      }
      if (
        Math.abs(skills?.getBoundingClientRect().y) < maxAllowedOffsetHeight
      ) {
        setActiveMenu("skills");
      }
      if (works?.getBoundingClientRect().y < maxAllowedOffsetHeight) {
        setActiveMenu("works");
      }
      if (contact?.getBoundingClientRect().y < maxAllowedOffsetHeight) {
        setActiveMenu("contact");
      }
    };
  });

  return (
    <div className="App">
      <Menu menu={activeMenu}></Menu>
      <Home></Home>
      <SkillsCompanies></SkillsCompanies>
      <Works></Works>
      <Socials></Socials>
      <Contact></Contact>
    </div>
  );
}

export default App;
