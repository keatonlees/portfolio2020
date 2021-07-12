import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../styles/NavBar.css";

import keatonLogo from "../images/logo_circle_light.png";

function NavBar() {
  return (
    <Navbar className="navbar-container" fixed="top" variant="dark" expand="md">
      <Navbar.Brand>
        <img src={keatonLogo} className="nav-brand" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto nav-links">
          <Nav.Item className="nav-item">
            <Link to="/portfolio" className="nav-text">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Link to="/portfolio/about" className="nav-text">
              About
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Link to="/portfolio/projects" className="nav-text">
              Projects
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
