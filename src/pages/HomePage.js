import React from "react";
import { useState, useEffect } from "react";

import Preloader from "../components/Preloader";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import FeaturedAbout from "../components/FeaturedAbout";
import FeaturedProjects from "../components/FeaturedProjects";
import Footer from "../components/Footer";

import "../App.css";

function HomePage(props) {
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
            <Banner
              pretitle="Hi! My name is"
              title="Keaton Lees"
              subtitle="A Systems Design Engineering Student @ The University of Waterloo"
            />
            <FeaturedAbout />
            <FeaturedProjects />

            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
