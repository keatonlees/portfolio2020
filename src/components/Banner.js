import React from "react";

import "../styles/Banner.css";

function Banner(props) {
  return (
    <div className="banner-container">
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}

export default Banner;
