import React, { useEffect } from "react";
import shahrukh from "../assets/images/desktop/Shahrukh.png";
import triangle from "../assets/images/desktop/light-blue-triangle.png";

function Home() {
  useEffect(() => {
    const experiencesElem = document.getElementById(
      "experiences",
    ) as HTMLElement;
    const aboutElem = document.getElementById("about") as HTMLElement;
    experiencesElem.classList.add("Animate");
    aboutElem.classList.add("Animate");
  });

  return (
    <div className="Home-wrapper" id="home">
      <img src={triangle} className="Triangle" alt="triangle" />

      <div className="Home">
        <div className="Img-bg"></div>
        <img src={shahrukh} className="Shahrukh" alt="pic" />
        <div className="Intro">
          <div className="Experiences" id="experiences">
            <div>I build</div>
            <div>amazing</div>
            <div>experiences</div>
          </div>
          <div className="About" id="about">
            <div className="Name">
              Shahrukh <span>Tramboo</span>
            </div>
            <div className="Content">
              Developer, UI/UX Designer from Kashmir, India
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
