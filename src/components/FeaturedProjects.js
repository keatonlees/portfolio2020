import React from "react";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

import FeaturedProjectsList from "../utils/FeaturedProjectsList.js";

import "../App.css";
import "../styles/FeaturedProjects.css";

function FeaturedProjects() {
  const history = useHistory();
  const goTo = () => {
    history.push("/projects");
  };

  return (
    <div className="ftprojects-container" data-aos="fade-up">
      <h1 className="homepage-title">
        <span className="coloured">&gt;</span> A Few of My Projects
      </h1>
      {FeaturedProjectsList.map((data, i) => {
        return (
          <div key={i}>
            {i % 2 === 0 ? (
              <div
                className="ftprojects-item"
                data-aos="fade-up"
                onClick={goTo}
              >
                <div className="ftprojects-img-container ftproject-img-left">
                  <img
                    className="ftprojects-img"
                    src={data.images[0]}
                    alt="project"
                  />
                </div>
                <div className="ftprojects-text-container ftprojects-text-right">
                  <h1 className="ftprojects-name">{data.name}</h1>
                  <p className="ftprojects-description">{data.ftdescription}</p>
                  <div className="ftprojects-languages ftprojects-languages-left">
                    {data.languages.map((language, i) => {
                      return (
                        <h1
                          className="ftprojects-language-h1 ftprojects-language-h1-left"
                          key={i}
                        >
                          {language}
                        </h1>
                      );
                    })}
                  </div>

                  <div className="ftprojects-link">
                    View project
                    <FontAwesomeIcon
                      icon={faLongArrowAltRight}
                      className="ftprojects-arrow"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="ftprojects-item"
                data-aos="fade-up"
                onClick={goTo}
              >
                <div className="ftprojects-text-container ftprojects-text-left">
                  <h1 className="ftprojects-name">{data.name}</h1>
                  <p className="ftprojects-description">{data.ftdescription}</p>
                  <div className="ftprojects-languages ftprojects-languages-right">
                    {data.languages.map((language, i) => {
                      return (
                        <h1
                          className="ftprojects-language-h1 ftprojects-language-h1-right"
                          key={i}
                        >
                          {language}
                        </h1>
                      );
                    })}
                  </div>

                  <div className="ftprojects-link">
                    View project
                    <FontAwesomeIcon
                      icon={faLongArrowAltRight}
                      className="ftprojects-arrow"
                    />
                  </div>
                </div>
                <div className="ftprojects-img-container ftproject-img-right">
                  <img
                    className="ftprojects-img "
                    src={data.images[0]}
                    alt="project"
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FeaturedProjects;
