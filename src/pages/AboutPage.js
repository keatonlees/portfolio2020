import React from "react";
import { useState, useEffect } from "react";

import Preloader from "../components/Preloader";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

import "../App.css";
import "../styles/AboutPage.css";

import keatonPortrait from "../images/keaton_portrait.jpg";

function AboutPage(props) {
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
              pretitle="Who am I?"
              title="A technology enthusiast"
              subtitle="Also an exercise fanatic, travel addict and devoted gamer"
            />

            <div className="about-container" data-aos="fade-up">
              <div className="about-text">
                <p>
                  Hi! My name is Keaton Lees and I'm currently studying Systems
                  Design Engineering at the University of Waterloo. I am an
                  enthusiastic learner who loves to explore new technology and
                  continously expand my knowledge of the working world. I
                  equally enjoy and have experience with both software and
                  hardware as I believe both are crucial in achieving the final
                  goal.
                </p>

                <p>
                  Previously, I have worked at Ballard Power Systems, located in
                  Burnaby, BC as Systems and Controls Engineer and Systems
                  Engineer. I have also founded my own 3D-printing company,
                  kleez3dprints, and have also worked at RoboKids Canada as a
                  Senior Software Instructor.
                </p>

                <p>
                  Outside of school, you can find me doing everything from
                  designing something to 3D-print to going to the gym to messing
                  around with PC's. I have thoroughly enjoyed 3D-printing ever
                  since I bought my own printer in 2018. You can see some of my
                  recent prints on the Projects Page, or on Instagram
                  @kleez3dprints.
                </p>

                <p>
                  On the other hand, I love to stay active. I have competed in
                  Track and Field for the past 8 years, as well as being a Level
                  2 Official, and have only recently stopped due to university.
                  However, I still like to go outside and run, workout at the
                  local gym, or get together with some friends to play some
                  indoor or beach volleyball. Prior to track, I competed in
                  Taekwondo and recieved my 3rd Degree Black Belt after 10 years
                  of dedication; Taekwondo taught me self-discipline and
                  perseverance, characteristics that I still apply to my
                  everyday tasks.
                </p>
              </div>

              <div className="about-img-container">
                <img
                  src={keatonPortrait}
                  className="about-img"
                  alt="portrait"
                />
              </div>
            </div>

            <Footer />
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutPage;
