import React from "react";
import "./tech.css";
import "./keyframes.css";

const Skills = props => (
  <div
    className="skills-container"
    style={{
      display: "flex",
      "flex-direction": "column",
      "align-items": "center",
      "background-color": "#FAFAFA",
      "-webkit-animation": "0.9s ease 0s normal forwards 1 fadein",
      animation: "0.9s ease 0s normal forwards 1 fadein"
    }}
  >
    <div
      className="skills-header"
      style={{
        "text-align": "center",
        "font-family": "'Merriweather', serif",
        "font-size": "26px",
        "padding-top": "1rem"
      }}
    >
      <b>Tech Stack</b>
    </div>
    <div
      className="skills-columns"
      style={{
        display: "flex",
        width: "50%",
        "justify-content": "space-around",
        padding: "1rem 1rem"
      }}
    >
      <div className="column">
        JavaScript<br /> HTML5<br /> CSS3<br /> NodeJS<br /> ExpressJS<br /> AWS
      </div>
      <div className="column">
        ReactJS<br /> ReduxJS<br /> PostgreSQL<br /> RDMS<br /> REST<br /> Unit
        Testing
      </div>
      <div className="column">
        WebSockets<br />Git (VCS)<br /> Unix CLI<br />CI/CD<br /> REST
      </div>
    </div>
  </div>
);

export default Skills;
