import React from "react";
import sam from "../icons/sam.jpeg";

function About() {
  return (
    <div className="about">
      <div className="image-box">
        <img id="sam" src={sam} alt="" />
        <div className="bottom-line"></div>
        <div className="work-scroll"></div>
      </div>

      <div className="icon-box">
        <div className="inner-box">
          <div className="about-line"></div>
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
      </div>
    </div>
  );
}

export default About;
