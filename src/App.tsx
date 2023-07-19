import React, { useEffect, useLayoutEffect, useState } from "react";
import Home from "./components/desktop/Home";
import Menu from "./components/desktop/Menu";
import SkillsCompanies from "./components/desktop/Skills-Companies";
import Works from "./components/desktop/works/Works";
import Socials from "./components/desktop/Socials";
import Contact from "./components/desktop/Contact";
import { MenuOpts } from "./data/model";
import CV from "./components/desktop/CV";
import { isInViewport } from "./common";
import MenuMb from "./components/mobile/Menu-mb";

function App() {
  const [mobileView, setMobileView] = useState<boolean>(false);

  const [activeMenu, setActiveMenu] = useState<MenuOpts>("home");

  const [cvVisible, setCvVisible] = useState<boolean>(false);

  function setupNavigation() {
    const windowInnerHeight = window.innerHeight;
    const maxAllowedOffsetHeight =
      windowInnerHeight - Math.round(windowInnerHeight / 3);

    window.onscroll = getOnscroll(maxAllowedOffsetHeight);
  }

  function changeMenuState(
    skills: HTMLElement,
    maxAllowedOffsetHeight: number,
  ) {
    const home = document.getElementById("home") as HTMLElement;
    const works = document.getElementById("works") as HTMLElement;
    const contact = document.getElementById("contact") as HTMLElement;
    if (Math.abs(home?.getBoundingClientRect().y) < maxAllowedOffsetHeight) {
      setActiveMenu("home");
    }
    if (Math.abs(skills?.getBoundingClientRect().y) < maxAllowedOffsetHeight) {
      setActiveMenu("skills");
    }
    if (works?.getBoundingClientRect().y < maxAllowedOffsetHeight) {
      setActiveMenu("works");
    }
    if (contact?.getBoundingClientRect().y < maxAllowedOffsetHeight) {
      setActiveMenu("contact");
    }
  }

  function changeWorksState() {
    const worksInfoElement = document.getElementsByClassName(
      "Work-item-info",
    ) as unknown as HTMLElement[];
    for (const element of worksInfoElement) {
      if (isInViewport(element)) {
        element.classList.add("Animate");
      }
    }
  }

  function getOnscroll(maxAllowedOffsetHeight: number) {
    const skills = document.getElementById("skills") as HTMLElement;
    return () => {
      changeMenuState(skills, maxAllowedOffsetHeight);

      setCvVisible(skills?.getBoundingClientRect().y <= 0);

      changeWorksState();
    };
  }

  function checkScreenResolution() {
    setMobileView(window.innerWidth < 900);
  }

  useLayoutEffect(() => {
    window.onresize = () => {
      checkScreenResolution();
    };
    checkScreenResolution();
  });

  useEffect(() => {
    if (!mobileView) setupNavigation();
  });

  return (
    <div className="App">
      {!mobileView && (
        <>
          {cvVisible && <CV position="fixed"></CV>}
          <Menu menu={activeMenu}></Menu>
          <Home></Home>
          <SkillsCompanies></SkillsCompanies>
          <Works></Works>
          <Socials></Socials>
          <Contact></Contact>
        </>
      )}
      {mobileView && (
        <>
          <MenuMb menu={"works"}></MenuMb>
        </>
      )}
    </div>
  );
}

export default App;
