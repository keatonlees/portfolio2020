import React from "react";

import FeaturedProjectsList from "../utils/FeaturedProjectsList.js";

import "../App.css";
import "../styles/FeaturedProjects.css";

function FeaturedProjects() {
  return (
    <div className="ftprojects-container" data-aos="fade-up">
      <h1 className="homepage-title">
        <span className="coloured">&gt;</span> Featured Projects
      </h1>
      {FeaturedProjectsList.map((data, i) => {
        return (
          <div className="ftprojects-item" data-aos="fade-up" key={i}>
            <div className="ftprojects-text-container">
              <h1 className="ftprojects-name">{data.name}</h1>
              <p>{data.description}</p>
            </div>
            <div className="ftprojects-img-container">
              <img
                className="ftprojects-img"
                src={data.images[0]}
                alt="project"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FeaturedProjects;
