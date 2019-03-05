import React, { Fragment } from "react";

import { Carousel } from "react-bootstrap";
import { Scratch, Moon } from "../images";

const Hero = props => (
  <div>
    <h2
      style={{
        "font-family": "'Oswald', sans-serif",
        "letter-spacing": "1.25px"
      }}
    >
      Projects:
    </h2>
    <Carousel interval={null}>
      <Carousel.Item>
        <img src={Scratch} style={{ width: "100%" }} />
        <Carousel.Caption>
          <h3 style={{ color: "black" }}>First slide label</h3>
          <p style={{ color: "black" }}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="../../383190fc39a9bac16da90973acfbf114.png" />
        <Carousel.Caption>
          <h3 style={{ color: "black" }}>First slide label</h3>
          <p style={{ color: "black" }}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Hero;
