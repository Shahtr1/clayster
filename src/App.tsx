import React, { useEffect, useLayoutEffect, useState } from "react";
import Home from "./components/desktop/Home";
import Menu from "./components/desktop/Menu";
import SkillsCompanies from "./components/desktop/Skills-Companies";
import Works from "./components/desktop/works/Works";
import Socials from "./components/common/Socials";
import Contact from "./components/desktop/Contact";
import { MenuOpts } from "./data/model";
import CV from "./components/desktop/CV";
import { isInViewport } from "./Common";
import MenuMb from "./components/mobile/Menu-mb";
import Portfolio from "./components/mobile/Portfolio";

function App() {
  const [mobileView, setMobileView] = useState<boolean>(false);

  const [activeMenu, setActiveMenu] = useState<MenuOpts>("home");
  const [activeMenuMb, setActiveMenuMb] = useState<MenuOpts>("works");

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
      if (!mobileView) {
        changeMenuState(skills, maxAllowedOffsetHeight);

        setCvVisible(skills?.getBoundingClientRect().y <= 0);

        changeWorksState();
      }
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

  function onMenuMbChange(activeMenu: MenuOpts) {
    setActiveMenuMb(activeMenu);
  }

  return (
    <div className="App">
      <Socials variant={mobileView ? "horizontal" : "vertical"}></Socials>
      {!mobileView && (
        <>
          {cvVisible && <CV position="fixed"></CV>}
          <Menu activeMenu={{ menu: activeMenu }}> </Menu>
          <Home></Home>
          <SkillsCompanies showCV={!cvVisible}></SkillsCompanies>
          <Works></Works>
          <Contact></Contact>
        </>
      )}
      {mobileView && (
        <>
          <Portfolio activeMenu={{ menu: activeMenuMb }}></Portfolio>
          <MenuMb
            activeMenuMb={{ menu: activeMenuMb, onMenuMbChange }}
          ></MenuMb>
        </>
      )}
    </div>
  );
}

export default App;
