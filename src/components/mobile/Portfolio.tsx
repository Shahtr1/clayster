import React, { useEffect } from "react";
import WorksMb from "./Works-mb";
import shahrukh from "../../assets/images/Shahrukh.png";
import SkillsMb from "./Skills-mb";

function Portfolio(props: any) {
  const { menu } = props.activeMenu;
  useEffect(() => {
    const aboutElement = document.getElementById("about-mb") as HTMLElement;
    aboutElement.classList.add("Animate");
  });

  return (
    <div className="Portfolio-mb-wrapper">
      <div className="Portfolio-mb">
        <div className="Intro-mb">
          <img height="250px" src={shahrukh} className="Shahrukh" alt="pic" />
          <div className="Content-mb">
            <div className="About-mb" id="about-mb">
              <div>I build</div>
              <div>amazing</div>
              <div>experiences</div>
            </div>
            <div className="Name-mb">
              <span>
                Shahrukh <span>Tramboo</span>
              </span>
            </div>
            <a
              className="CV-mb"
              href={require("../../assets/files/shahrukh_resume.pdf")}
              target="_blank"
              rel="noreferrer"
            >
              Get My CV!
            </a>
          </div>
        </div>
        {menu === "works" && <WorksMb></WorksMb>}
        {menu === "skills" && <SkillsMb></SkillsMb>}
        {menu === "contact" && "contact"}
      </div>
    </div>
  );
}

export default Portfolio;
