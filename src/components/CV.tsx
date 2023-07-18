import React from "react";
import download from "../assets/icons/download.png";

export type CvPosition = "absolute" | "fixed";

export interface ICV {
  position: CvPosition;
}

function CV(variant: ICV) {
  return (
    <a
      className="Download-cv"
      href={require("../assets/files/shahrukh_resume.pdf")}
      target="_blank"
      rel="noreferrer"
      style={{
        position: variant.position,
        borderTopLeftRadius: variant.position === "absolute" ? "15px" : "unset",
        borderBottomLeftRadius: variant.position === "fixed" ? "15px" : "unset",
        zIndex: variant.position === "fixed" ? "999999" : "unset",
        boxShadow: variant.position === "fixed" ? "0 0 0.3rem 0 #000" : "unset",
      }}
    >
      Get My CV{" "}
      <img
        src={download}
        className="Download"
        alt="download"
        width="43"
        height="35"
      />
    </a>
  );
}

export default CV;
