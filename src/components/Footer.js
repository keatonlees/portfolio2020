import React from "react";

import "../styles/Footer.css";

import keatonLogo from "../images/logo_circle_light.png";

function Footer() {
  return (
    <div className="footer-container">
      <h1 className="footer-text">Designed and Coded by Keaton Lees</h1>
      <img src={keatonLogo} className="footer-img" alt="logo" />
    </div>
  );
}

export default Footer;
