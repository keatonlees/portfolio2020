import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const preloaderTimeout = 1200;

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/portfolio/about">
          <AboutPage preloaderTimeout={preloaderTimeout} />
        </Route>
        <Route exact path="/portfolio/projects">
          <ProjectsPage preloaderTimeout={preloaderTimeout} />
        </Route>
        <Route path="/">
          <HomePage preloaderTimeout={preloaderTimeout} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
