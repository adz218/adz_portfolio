import React from "react";
import ReactDOM from "react-dom";
import "./timeline.css";

const fsDescription = (
  <p>
    • Partook in a 17-week course to learn the NERD stack, associated
    technologies, and develop programming knowledge
    <br /> • Participated in a hackathon using Tessel
  </p>
);

const elcDescription = (
  <p>
    • Performed analytical testing on hundreds of commercially released products{" "}
    <br />• Used QA Software to document chemical composition and manage
    specifications for 50+ material batches
  </p>
);

const siemensDescription = (
  <p>
    • Worked in a team to develop a clinical chemistry analyzer capable of
    processing 440 tests per hour <br /> •Improved and verified the analyzer’s
    immunoassaying accuracy
  </p>
);

const nyuDescription = (
  <p>
    Coursework: <br />
    • Quantum mechanics and Spectroscopy
    <br />
    •Thermodynamics and Kinetics
    <br />
    •Computer Programming (Python)
  </p>
);

let timelineItem;

// document && timelineContent = document.getElementsByClassName('innerContent')
const toggle = elementId => {
  console.log(elementId);
  timelineItem = document.getElementById(elementId);
  console.log("DOM element found on click:", timelineItem);
  console.log("display prop", timelineItem.style.display);
  if (!timelineItem.style.display || timelineItem.style.display === "none") {
    timelineItem.style.display = "block";
  } else {
    timelineItem.style.display = "none";
  }
};

const TimelineObj = props => (
  <div className={props.side}>
    <div className="content" onClick={() => toggle(props.id)}>
      <h2>{props.header}</h2>
      <div id={props.id}>{props.content}</div>
    </div>
  </div>
);

const Timeline = props => (
  <div
    className="timeline-container"
    style={{
      "background-color": "#FAFAFA"
    }}
  >
    <div
      className="experience-header"
      style={{
        "padding-top": "1rem"
      }}
    >
      <b>Experience</b>
    </div>
    <div className="experience-header-note">(click card for details)</div>

    <div
      className="timeline"
      style={{
        "background-color": "#FAFAFA"
      }}
    >
      <TimelineObj
        side="container left"
        header="Fullstack Academy - Student (2018)"
        content={fsDescription}
        id="fs-content"
      />

      <TimelineObj
        side="container right"
        header="Estée Lauder - QA Chemist (2017 - 2018)"
        content={elcDescription}
        id="elc-content"
      />
      <TimelineObj
        side="container left"
        header="Siemens Healthineers - R&D Biochemist (2016 - 2017)"
        content={siemensDescription}
        id="siemens-content"
      />
      <TimelineObj
        side="container right"
        header="New York University CAS - Student (2011 - 2016)"
        content={nyuDescription}
        id="nyu-content"
      />
    </div>
  </div>
);

export default Timeline;
