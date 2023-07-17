import React from "react";
import github from "../assets/icons/socials/github.png";
import linkedin from "../assets/icons/socials/linkedin.png";
import tryhackme from "../assets/icons/socials/tryhackme-social.png";
import twitter from "../assets/icons/socials/twitter.png";
import instagram from "../assets/icons/socials/instagram.png";

export type socials =
  | "github"
  | "linkedin"
  | "tryhackme"
  | "twitter"
  | "instagram";

function Socials() {
  function goTo(social: socials) {
    let url = "";

    switch (social) {
      case "github":
        url = "https://github.com/Shahtr1";
        break;
      case "linkedin":
        url = "https://www.linkedin.com/in/shahrukh-tramboo-96a07127b";
        break;
      case "tryhackme":
        url = "https://tryhackme.com/p/clayster404";
        break;
      case "twitter":
        url = "https://twitter.com/CLAYster404";
        break;
      default:
        url = "https://www.instagram.com/shahrukhtramboo/";
    }

    window.open(url, "_blank");

    return undefined;
  }

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
