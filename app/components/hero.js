import React, { Fragment } from "react";

import { Carousel } from "react-bootstrap";

const Hero = props => (
  <Fragment>
    <Carousel controls={false} indicators={false} interval={1000}>
      <Carousel.Item>
        <img
          style={{ width: "100%", height: "20rem" }}
          src="https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100%", height: "20rem" }}
          src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300"
        />
      </Carousel.Item>
    </Carousel>
  </Fragment>
);

export default Hero;
