import React from "react";

import "../styles/Banner.css";

function Banner(props) {
  return (
    <div className="banner-container" data-aos="fade-up">
      <h1 className="banner-pretitle">{props.pretitle}</h1>
      <h1 className="banner-title">{props.title}</h1>
      <h1 className="banner-subtitle">{props.subtitle}</h1>
    </div>
  );
}

export default Banner;
