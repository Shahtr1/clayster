import React from "react";

function Title(props: { title: string; variant: "small" | "large" }) {
  return (
    <div className="Title-wrapper">
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
