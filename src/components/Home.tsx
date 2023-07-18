import React from "react";
import shahrukh from "../assets/images/desktop/Shahrukh.png";
import triangle from "../assets/images/desktop/light-blue-triangle.png";

function Home() {
  return (
    <div className="Home-wrapper" id="home">
      <img src={triangle} className="Triangle" alt="triangle" />

      <div className="Home">
        <div className="Img-bg"></div>
        <img src={shahrukh} className="Shahrukh" alt="pic" />
        <div className="Intro">
          <div className="Experiences">
            <div>I build</div>
            <div>amazing</div>
            <div>experiences</div>
          </div>
          <div className="About">
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
