import React, { useState } from "react";
import { prof } from "../images";
import "./keyframes.css";

const Main = props => {
  return (
    <div
      style={{
        "max-width": "960px",
        display: "flex",
        margin: "0 auto"
      }}
    >
      <div
        className="about-container"
        style={{
          display: "flex",
          "justify-content": "space-evenly",
          margin: "0 auto",
          "max-width": "960px",
          padding: "40px",
          "-webkit-animation": "0.9s ease 0s normal forwards 1 fadein",
          animation: "0.9s ease 0s normal forwards 1 fadein"
        }}
      >
        <div className="about-photo">
          <img
            src={prof}
            style={{
              height: "350px",
              "border-radius": "3px",
              "box-shadow":
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}
          />
        </div>
        <div
          className="about-text"
          style={{
            display: "flex",
            width: "60%",
            "flex-wrap": "wrap",
            "flex-direction": "column",
            "justify-content": "center",
            padding: "0.7em 0.7em",
            "font-family": "'Roboto', sans-serif",
            "font-weight": "700",
            "font-size": "18px",
            "letter-spacing": ".2px"
          }}
        >
          <p>Hello! I'm Adam Zhou, a full-stack engineer. </p>
          <p>
            I worked as an analytical scientist in the biotechnology and
            cosmetic industries from 2016-2018. After using analytical software
            every day I realized that I am more interested in actually building
            software and applications. I am now applying my knowledge of
            programming in tandem with my analytical skills to create full stack
            web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
