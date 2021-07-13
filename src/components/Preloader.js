import React from "react";

import "../styles/Preloader.css";

import keatonLogo from "../images/logo_circle_light.png";

function Preloader() {
  return (
    <div className="preloader-container">
      <div className="preloader-loader">
        <img src={keatonLogo} className="preloader-img" alt="logo" />
      </div>
    </div>
  );
}

export default Preloader;
