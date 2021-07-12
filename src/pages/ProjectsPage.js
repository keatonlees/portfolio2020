import React from "react";
import { useState, useEffect } from "react";

import Preloader from "../components/Preloader";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";

import "../App.css";

function ProjectsPage(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaderFadeOut, setIsLoaderFadeOut] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoaderFadeOut(true);
    }, props.preloaderTimeout);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="web-container">
      {isLoading ? (
        <div
          className={isLoaderFadeOut ? "page-hidden" : ""}
          onTransitionEnd={() => {
            setIsLoading(false);
          }}
        >
          <Preloader />
        </div>
      ) : (
        <div className={isLoading ? "" : "page-shown"}>
          <div className="page-container">
            <NavBar />
            <Banner title="Projects" subtitle="page" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectsPage;
