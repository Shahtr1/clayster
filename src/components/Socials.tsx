import React from "react";
import github from "../assets/icons/socials/github.png";
import linkedin from "../assets/icons/socials/linkedin.png";
import tryhackme from "../assets/icons/socials/tryhackme-social.png";
import twitter from "../assets/icons/socials/twitter.png";
import instagram from "../assets/icons/socials/instagram.png";
import { goTo } from "../data/model";

function Socials() {
  return (
    <div className="Socials">
      <img
        src={github}
        className="Github"
        alt="github"
        onClick={() => goTo("github")}
      />
      <img
        src={linkedin}
        className="Linkedin"
        alt="linkedin"
        onClick={() => goTo("linkedin")}
      />
      <img
        src={tryhackme}
        className="Tryhackme"
        alt="tryhackme"
        onClick={() => goTo("tryhackme")}
      />
      <img
        src={twitter}
        className="Twitter"
        alt="twitter"
        onClick={() => goTo("twitter")}
      />
      <img
        src={instagram}
        className="Instagram"
        alt="instagram"
        onClick={() => goTo("instagram")}
      />
    </div>
  );
}

export default Socials;
