import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../styles/NavBar.css";

import keatonLogo from "../images/logo_circle_light.png";
import keatonResume from "../files/KeatonLeesResume.pdf";

function NavBar() {
  const openInNewTab = (url) => {
    var win = window.open(url, "_blank");
    win.focus();
  };

  return (
    <Navbar className="navbar-container" fixed="top" variant="dark" expand="md">
      <Navbar.Brand>
        <img src={keatonLogo} className="nav-brand" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto nav-links">
          <Nav.Item className="nav-item">
            <Link to="/" className="nav-text">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Link to="/about" className="nav-text">
              About
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Link to="/projects" className="nav-text">
              Projects
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <div
              onClick={() => {
                openInNewTab(keatonResume);
              }}
              className="nav-text"
            >
              Resume
            </div>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
