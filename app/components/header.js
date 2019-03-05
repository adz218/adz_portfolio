import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Dropdown
} from "react-bootstrap";
import { logo2, resume } from "../images";

class CustomToggle extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.onClick(e);
  }

  render() {
    return (
      <a href="" onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}

const initScroll = elementClassName => {
  let destination = document.getElementsByClassName(elementClassName);
  let bodyRect = document.body.getBoundingClientRect();
  let destinationRect = destination[0].getBoundingClientRect();
  window.scrollTo({
    top: destinationRect.y - 100,
    left: 0,
    behavior: "smooth"
  });
};

const Header = props => {
  const [state, setState] = useState({ visit: false, about: false });

  const openVisit = openArg => {
    setState({ visit: true });
  };

  const openAbout = openArg => {
    setState({ about: true });
  };

  const closeVisit = close => {
    setState({ visit: false });
  };

  const closeAbout = close => {
    setState({ about: false });
  };

  return (
    <Navbar bg="dark" sticky="top" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={logo2}
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          style={{ width: "3.6rem", height: "3.6rem" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        style={{
          "font-family": "'Oswald', sans-serif",
          "font-size": 20,
          left: "450px"
        }}
      >
        <Dropdown
          onMouseEnter={() => {
            openVisit();
          }}
          onMouseLeave={() => {
            closeVisit();
          }}
          show={state.visit}
          style={{ padding: ".5rem 1rem" }}
        >
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            <div
              onClick={() => initScroll("projects-container")}
              style={{ "letter-spacing": "1.35px", color: "#FAFAFA" }}
            >
              PROJECTS
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <Dropdown.Item
              eventKey="1"
              onClick={() =>
                (window.location.href = "http://d2id8z8hcq9t2e.cloudfront.net")
              }
            >
              Scratch
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="2"
              onClick={() =>
                (window.location.href = "http://lookbook12.herokuapp.com")
              }
            >
              LookBook12
            </Dropdown.Item>

            <Dropdown.Item
              eventKey="3"
              onClick={() =>
                (window.location.href = "https://shark-heron.herokuapp.com")
              }
            >
              Moon Marauders
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="4"
              onClick={() =>
                (window.location.href = "http://iron-flowns.herokuapp.com")
              }
            >
              Iron Flowns
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="5"
              onClick={() =>
                (window.location.href = "http://build24.herokuapp.com")
              }
            >
              Build24
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown
          onMouseEnter={() => {
            openAbout();
          }}
          onMouseLeave={() => {
            closeAbout();
          }}
          show={state.about}
          style={{ padding: ".5rem 1rem" }}
        >
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            <div style={{ "letter-spacing": "1.25px", color: "#FAFAFA" }}>
              MEDIA
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <Dropdown.Item
              eventKey="1"
              onClick={() =>
                (window.location.href = "http://linkedin.com/in/adz218")
              }
            >
              LinkedIn
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="2"
              onClick={() =>
                (window.location.href = "http://github.com/adz218")
              }
            >
              GitHub
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Nav.Link
          href="#link"
          style={{ "letter-spacing": "1.2px", color: "#FAFAFA" }}
          onClick={() =>
            (window.location.href = "mailto:adzhou218@gmail.com?subject=Hello!")
          }
        >
          CONTACT
        </Nav.Link>
        <Button
          variant="dark"
          style={{
            "margin-left": ".5rem",
            "font-size": 22,
            "background-color": "#FC3973"
          }}
          onClick={() =>
            (window.location.href =
              "https://www.adam-zhou.com/static/Adam_Zhou-1055e05af118dbd27b65c4feb73406ef.pdf")
          }
        >
          RESUME
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
