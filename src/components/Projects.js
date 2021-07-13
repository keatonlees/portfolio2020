import React from "react";
import Marquee from "react-fast-marquee";

import "../styles/Projects.css";

import iconDrone from "../images/icon_drone.png";
import iconRethink from "../images/icon_rethink.png";
import iconPuppr from "../images/icon_puppr.png";
import iconWatch from "../images/icon_watch.png";
import iconKong from "../images/icon_kong.png";
import iconFirst from "../images/icon_first.png";

function Projects() {
  return (
    <div className="projects-container" data-aos="fade-up">
      <Marquee speed={120} gradientColor={[3, 0, 46]} gradientWidth={100} pauseOnHover>
        <div className="projects-marquee-item">
          <img
            className="projects-marquee-img"
            src=""
            alt="marquee-item"
          />
          <h1 className="projects-marquee-text">Octo-Do</h1>
        </div>
        <div className="projects-marquee-item">
          <img
            className="projects-marquee-img"
            src=""
            alt="marquee-item"
          />
          <h1 className="projects-marquee-text">Jarvis</h1>
        </div>
        <div className="projects-marquee-item">
          <img
            className="projects-marquee-img"
            src={iconDrone}
            alt="marquee-item"
          />
          <h1 className="projects-marquee-text">Drone</h1>
        </div>
        <div className="projects-marquee-item">
          <img
            className="projects-marquee-img"
            src={iconRethink}
            alt="marquee-item"
          />
          <h1 className="projects-marquee-text">Rethink</h1>
        </div>
        <div className="projects-marquee-item">
          <img
            className="projects-marquee-img"
            src={iconPuppr}
            alt="marquee-item"
          />
          <h1 className="projects-marquee-text">Puppr</h1>
        </div>
        <div className="projects-marquee-item">
          <img
            className="projects-marquee-img"
            src={iconWatch}
            alt="marquee-item"
          />
          <h1 className="projects-marquee-text">Watchface</h1>
        </div>
        <div className="projects-marquee-item">
          <img
            className="projects-marquee-img"
            src={iconKong}
            alt="marquee-item"
          />
          <h1 className="projects-marquee-text">Donkey Kong</h1>
        </div>
        <div className="projects-marquee-item">
          <img
            className="projects-marquee-img"
            src={iconFirst}
            alt="marquee-item"
          />
          <h1 className="projects-marquee-text">FIRST Robotics</h1>
        </div>
      </Marquee>
    </div>
  );
}

export default Projects;
