import React from "react";
import triangle from "../assets/images/desktop/light-white-triangle.png";
import download from "../assets/icons/download.png";
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
import CV from "./CV";

function SkillsCompanies() {
  return (
    <div className="Skills-Companies-wrapper" id="skills">
      <img src={triangle} className="Triangle" alt="triangle" />
      <div className="Skills">
        <div className="Title-wrapper">
          <span className="Title">Skills</span>
          <CV position="absolute"></CV>
        </div>
        <div className="Content-wrapper">
          <div className="Content">
            <span>
              I specialize in crafting robust and scalable web applications,
              leveraging Javascript, php frameworks and Java technologies. I
              possess a deep understanding of Cybersecurity principles and apply
              them to ensure secure coding practices.
            </span>
            <div className="Skills-icons-wrapper">
              <div className="Skills-icons">
                <img src={javascript} className="Javascript" alt="angular" />
                <img src={react_icon} className="React-icon" alt="react_icon" />
                <img src={angular} className="Angular" alt="angular" />
                <img src={laravel} className="Laravel" alt="laravel" />
                <img src={jquery} className="Jquery" alt="jquery" />
                <img src={tryhackme} className="Tryhackme" alt="tryhackme" />
                <img src={java} className="Java" alt="java" />
                <img src={figma} className="Figma" alt="figma" />
                <img src={node} className="Node-js" alt="node" />
                <img src={vue} className="Vue" alt="vue" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Companies">
        <div className="Heading">
          <div className="Title-line-left Title-line">
            <div className="Horizontal"></div>
            <div className="Vertical"></div>
          </div>
          <span className="Text">Noteworthy Full-Time Roles</span>
          <div className="Title-line-right Title-line">
            <div className="Vertical"></div>
            <div className="Horizontal"></div>
          </div>
        </div>
        <div className="Content">
          <div className="Art-image Image"></div>
          <div className="Pragtex-image Image"></div>
          <div className="Cyberspark-image Image"></div>
          <div className="Ascent-image Image"></div>
        </div>
      </div>
      <div className="Empty"></div>
    </div>
  );
}

export default SkillsCompanies;
