import React from "react";
import { gitIcon, linkedIcon } from "../images";
import "./footer.css";

const Footer = props => (
  <div
    style={{
      width: "100%",
      height: "3rem",
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
      padding: "1rem 1rem"
    }}
  >
    <img
      src={gitIcon}
      onClick={() => (window.location.href = "https://github.com/adz218")}
      style={{
        "margin-right": ".5rem",
        transform: "scale(0.65)",
        opacity: ".7",
        cursor: "pointer"
      }}
    />
    <img
      src={linkedIcon}
      onClick={() => (window.location.href = "https://linkedin.com/in/adz218")}
      style={{
        "margin-left": ".5rem",
        transform: "scale(0.6)",
        opacity: ".7",
        cursor: "pointer"
      }}
    />
  </div>
);

export default Footer;
