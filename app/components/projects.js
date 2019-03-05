import React, { Fragment } from "react";
import {
  moonMarauderImg,
  build24Img,
  ironFlownsImg,
  lookBookImg,
  Scratch
} from "../../images";
import "./projects.css";

const Project = props => (
  <Fragment>
    <div className="project-info">
      <p>
        <b>{props.name} </b> |{" "}
        <a href={props.link} target="_blank">
          Visit
        </a>{" "}
        |{" "}
        <a href={props.git} target="_blank">
          GitHub
        </a>
      </p>
      <p>{props.description}</p>
    </div>
    <div className="project-img">
      <img
        src={props.img}
        style={{
          display: "flex",
          width: "100%",
          padding: "10px",
          "margin-top": " 5px",
          "align-items": "center"
        }}
      />
    </div>
  </Fragment>
);
const lookBookDescription =
  "A library app that allows users to search for books by title, author, or keyword using Open Libray API. Results can be narrowed down using sort/filter options.";
const lookLink = "https://lookbook12.herokuapp.com";
const lookGit = "https://github.com/adz218/library-app";

const moonDescription =
  "A space themed rendition of the popular social deduction game Avalon. Integrated with video chat using OpenTok, play standard/custom game modes with 5-12 players.";
const moonLink = "https://shark-heron.herokuapp.com";
const moonGit = "https://github.com/sharkvsheron/resistance";

const ironDescription =
  "An E-commerce React application that sells Game of Thrones merchandise. Payment collection capability implemented using Stripe API.";
const ironLink = "https://iron-flowns.herokuapp.com";
const ironGit = "https://github.com/Flying-Irons/Grace-Shopper";

const build24Description = `The arithmetic-based card game '24'. Fully functional multiplayer implemented using WebSockets.`;
const build24Link = "https://build24.herokuapp.com";
const build24Git = "https://github.com/adz218/Build24";

const scratchDescription = `A serverless (AWS) note taking app built using Serverless framework, React, and AWS Resources: DynamoDB, S3, Cognito, CloudWatch, and more.`;
const scratchLink = "http://d2id8z8hcq9t2e.cloudfront.net/";
const scratchGit = "https://github.com/adz218";

const Projects = props => (
  <div className="projects-container">
    <div className="projects-header">
      <b>Projects</b>
    </div>
    <div className="projects-list">
      <div className="single-project">
        <Project
          name="Scratch"
          description={scratchDescription}
          img={Scratch}
          link={scratchLink}
          git={scratchGit}
        />
      </div>
      <div className="single-project">
        <Project
          name="LookBook12"
          description={lookBookDescription}
          img={lookBookImg}
          link={lookLink}
          git={lookGit}
        />
      </div>
      <div className="single-project">
        <Project
          name="Moon Marauders"
          description={moonDescription}
          img={moonMarauderImg}
          link={moonLink}
          git={moonGit}
        />
      </div>
      <div className="single-project">
        <Project
          name="Iron Flowns"
          description={ironDescription}
          img={ironFlownsImg}
          link={ironLink}
          git={ironGit}
        />
      </div>
      <div className="single-project">
        <Project
          name="Build24"
          description={build24Description}
          img={build24Img}
          link={build24Link}
          git={build24Git}
        />
      </div>
    </div>
  </div>
);
export default Projects;
