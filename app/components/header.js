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
import { logo } from "../../images";

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
    <div>
      <Navbar bg="dark" variant="light" expand="lg">
        <Navbar.Brand href="#home">
          <img src={logo} style={{ width: "3.6rem", height: "3.6rem" }} />
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
              <div style={{ "letter-spacing": "1.35px", color: "#FAFAFA" }}>
                VISIT
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item eventKey="1">Buy Tickets</Dropdown.Item>
              <Dropdown.Item eventKey="2">Plan Your Trip</Dropdown.Item>
              <Dropdown.Item eventKey="2">Become a Member</Dropdown.Item>
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
                ABOUT
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item eventKey="1">About MoMWD</Dropdown.Item>
              <Dropdown.Item eventKey="2">History</Dropdown.Item>
              <Dropdown.Item eventKey="2">Executive Council</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Link
            href="#link"
            style={{ "letter-spacing": "1.2px", color: "#FAFAFA" }}
          >
            EVENTS
          </Nav.Link>
          <Button
            variant="dark"
            style={{
              "margin-left": ".5rem",
              "font-size": 22,
              "background-color": "#FC3973"
            }}
          >
            DONATE
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
