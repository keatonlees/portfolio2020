import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { ProjectsList } from "../utils/ProjectsList";

import "../styles/Projects.css";

function Projects() {
  const openInNewTab = (url) => {
    var win = window.open(url, "_blank");
    win.focus();
  };

  return (
    <div className="projects-container" data-aos="fade-up">
      <Marquee
        speed={120}
        gradientColor={[3, 0, 46]}
        gradientWidth={100}
        // pauseOnHover
        data-aos="fade-up"
        className="projects-marquee"
      >
        {ProjectsList.map((data, i) => {
          return (
            <Link
              to={data.marqueeName}
              smooth={true}
              duration={100}
              offset={-120}
              key={i}
            >
              <div className="projects-marquee-item">
                <img
                  className="projects-marquee-img"
                  src={data.icon}
                  alt="marquee-item"
                />
                <h1 className="projects-marquee-text">{data.marqueeName}</h1>
              </div>
            </Link>
          );
        })}
      </Marquee>

      <div className="projects-contents">
        {ProjectsList.map((data, i) => {
          return (
            <div key={i}>
              {i % 2 === 0 ? (
                <div
                  id={data.marqueeName}
                  className="projects-item"
                  data-aos="fade-up"
                >
                  <div className="projects-item-banner projects-item-banner-left">
                    <div className="projects-item-img-container">
                      <img
                        className="projects-item-img"
                        src={data.images[0]}
                        alt="project-img"
                      />
                    </div>
                    <div className="projects-item-overview">
                      <h1 className="projects-item-overview-name">
                        {data.name}
                      </h1>
                      <h1 className="projects-item-overview-type">
                        {data.type}
                      </h1>
                      <h1 className="projects-item-overview-timeframe">
                        {data.timeframe}
                      </h1>
                      <h1 className="projects-item-overview-languages-container projects-item-overview-languages-container-left">
                        {data.languages.map((language) => {
                          return (
                            <p className="projects-item-overview-language projects-item-overview-language-left">
                              {language}
                            </p>
                          );
                        })}
                      </h1>
                      <div className="projects-item-links">
                        {data.github ? (
                          <FontAwesomeIcon
                            icon={faGithub}
                            className="projects-icon projects-icon-left"
                            onClick={() => {
                              openInNewTab(data.github);
                            }}
                          />
                        ) : (
                          <></>
                        )}
                        {data.link ? (
                          <FontAwesomeIcon
                            icon={faLink}
                            className="projects-icon"
                            onClick={() => {
                              openInNewTab(data.link);
                            }}
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    {data.description.split("\n").map((line) => (
                      <p className="projects-description">{line}</p>
                    ))}
                  </div>
                </div>
              ) : (
                <div
                  id={data.marqueeName}
                  className="projects-item"
                  data-aos="fade-up"
                >
                  <div className="projects-item-banner projects-item-banner-right">
                    <div className="projects-item-overview">
                      <h1 className="projects-item-overview-name">
                        {data.name}
                      </h1>
                      <h1 className="projects-item-overview-type">
                        {data.type}
                      </h1>
                      <h1 className="projects-item-overview-timeframe">
                        {data.timeframe}
                      </h1>
                      <h1 className="projects-item-overview-languages-container projects-item-overview-languages-container-right">
                        {data.languages.map((language) => {
                          return (
                            <p className="projects-item-overview-language projects-item-overview-language-right">
                              {language}
                            </p>
                          );
                        })}
                      </h1>
                      <div className="projects-item-links project-item-links-left">
                        {data.github ? (
                          <FontAwesomeIcon
                            icon={faGithub}
                            className="projects-icon projects-icon-right"
                            onClick={() => {
                              openInNewTab(data.github);
                            }}
                          />
                        ) : (
                          <></>
                        )}
                        {data.link ? (
                          <FontAwesomeIcon
                            icon={faLink}
                            className="projects-icon"
                            onClick={() => {
                              openInNewTab(data.link);
                            }}
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    <div className="projects-item-img-container">
                      <img
                        className="projects-item-img"
                        src={data.images[0]}
                        alt="project-img"
                      />
                    </div>
                  </div>
                  <div>
                    {data.description.split("\n").map((line) => (
                      <p className="projects-description">{line}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
