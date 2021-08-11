import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import css from "../icons/css.png";
import js from "../icons/js.png";
import node from "../icons/node.png";
import react from "../icons/react.png";
import html from "../icons/html.png";
import sass from "../icons/sass.png";
import sam from "../icons/sam.jpeg";

function About() {
  return (
    <div className="about">
      <div className="box">
        <img id="sam" src={sam} alt="" />
      </div>

      <div className="icon-box">
        <div className="inner-box">
          {/* <div className="top-line"></div> */}
          <h3 className="about-me">About Me</h3>
          <p className="description">
            This is where you can describe about yourself. The more you describe
            about yourself, the more chances you can! Extra Information about
            you, like hobbies and your goals. This is where you can describe
            about yourself. The more you describe about yourself, the more
            chances you can! Extra Information about you, like hobbies and your
            goals.
          </p>
        </div>

        <div className="skill-box">
          <h3 className="tools">Tools and technologies</h3>

          <ul>
            <li>
              <span className="line"></span>
              <span className="html-percentage" id="html"></span>
              HTML
            </li>
            <li>
              <span className="line"></span>
              <span className="css-percentage" id="css"></span>
              CSS
            </li>
            <li>
              <span className="line"></span>
              <span className="js-percentage" id="javascript"></span>
              JAVASCRIPT
            </li>
            <li>
              <span className="line"></span>
              <span className="react-percentage" id="react"></span>
              REACT
            </li>
            <li>
              <span className="line"></span>
              <span className="node-percentage" id="node"></span>
              NODEJS
            </li>
            <li>
              <span className="line"></span>
              <span className="sass-percentage" id="sass"></span>
              SASS
            </li>
            <li>
              <span className="line"></span>
              <span className="jest-percentage" id="jest"></span>
              JEST UNIT TESTING
            </li>
          </ul>
        </div>
        {/* <div className="bottom-line"></div> */}
      </div>
    </div>
  );
}

export default About;
