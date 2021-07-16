import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "../styles/Contact.css";

function Contact() {
  const personalEmail = "klees@uwaterloo.ca";

  const openInNewTab = (url) => {
    var win = window.open(url, "_blank");
    win.focus();
  };

  const openEmail = (email) => {
    var win = window.open(`mailto:${email}`);
    win.focus();
  };

  return (
    <div>
      <div className="contact-container contact-left">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="contact-icon"
          onClick={() => {
            openEmail(personalEmail);
          }}
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className="contact-icon"
          onClick={() => {
            openInNewTab("https://www.linkedin.com/in/keatonlees/");
          }}
        />
        <FontAwesomeIcon
          icon={faGithub}
          className="contact-icon"
          onClick={() => {
            openInNewTab("https://github.com/keatonlees");
          }}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="contact-icon"
          onClick={() => {
            openInNewTab("https://www.instagram.com/kleez3dprints/");
          }}
        />
        <div className="contact-vl"></div>
      </div>
      <div className="contact-container contact-right">
        <h1
          className="contact-email"
          onClick={() => {
            openEmail(personalEmail);
          }}
        >
          {personalEmail}
        </h1>
        <div className="contact-vl"></div>
      </div>
    </div>
  );
}

export default Contact;
