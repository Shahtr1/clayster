import React from "react";

function Title(props: {
  title: string;
  variant: "small" | "large";
  smallIntro?: boolean;
}) {
  return (
    <div className={`Title-wrapper ${props.smallIntro ? "Small-intro" : ""}`}>
      <div className="Title-line-left Title-line">
        <div
          className="Horizontal"
          style={{ width: props.variant === "small" ? "12rem" : "20rem" }}
        ></div>
        <div className="Vertical"></div>
      </div>
      <span className="Text">{props.title}</span>
      <div className="Title-line-right Title-line">
        <div className="Vertical"></div>
        <div
          className="Horizontal"
          style={{ width: props.variant === "small" ? "12rem" : "20rem" }}
        ></div>
      </div>
    </div>
  );
}

export default Title;
