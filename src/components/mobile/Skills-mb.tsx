import React from "react";
import Title from "../common/Title";
import javascript from "../../assets/icons/skills/Javascript.png";
import react_icon from "../../assets/icons/skills/React.png";
import angular from "../../assets/icons/skills/Angular.png";
import laravel from "../../assets/icons/skills/Laravel.png";
import jquery from "../../assets/icons/skills/Jquery.png";
import tryhackme from "../../assets/icons/skills/TryHackMe.png";
import java from "../../assets/icons/skills/Java.png";
import figma from "../../assets/icons/skills/Figma.png";
import node from "../../assets/icons/skills/Node js.png";
import vue from "../../assets/icons/skills/Vue.png";

function SkillsMb(props: { smallIntro: boolean }) {
  return (
    <div className="Skills-mb-wrapper">
      <div className="Skills-mb">
        <Title
          title="My Skills"
          variant="small"
          smallIntro={props.smallIntro}
        ></Title>
        <div className="Skills-Content-mb">
          <span className="Skills-Content-mb-intro">
            I specialize in crafting robust and scalable web applications,
            leveraging Javascript, php frameworks and Java technologies. I
            possess a deep understanding of Cybersecurity principles and apply
            them to ensure secure coding practices.
          </span>
          <div className="Skills-mb-icons">
            <img src={javascript} className="Javascript" alt="angular" />
            <img src={react_icon} className="React-icon" alt="react_icon" />
            <img src={angular} className="Angular" alt="angular" />
            <img src={laravel} className="Laravel" alt="laravel" />
            <img width="60px" src={jquery} className="Jquery" alt="jquery" />
            <img src={tryhackme} className="Tryhackme" alt="tryhackme" />
            <img src={java} className="Java" alt="java" />
            <img src={figma} className="Figma" alt="figma" />
            <img src={node} className="Node-js" alt="node" />
            <img src={vue} className="Vue" alt="vue" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsMb;
