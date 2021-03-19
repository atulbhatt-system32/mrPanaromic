import React from "react";

import "./assets/css/body.css";
import sideme from "./assets/images/side-me.svg";

export default function Body() {
  return (
    <div className="body">
      <div className="side-image-container">
        <img src={sideme} alt="not found!" />
      </div>
      <div className="me-container">
        <div className="intro">Hello.</div>
        <div className="intro text-color-red">I'm</div>
        <div className="intro text-color-red">Atul.</div>
      </div>
    </div>
  );
}
