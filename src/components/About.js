import React from "react";
import sam from "../icons/sam.jpeg";

function About() {
  return (
    <div className="about-box">
      <div className="about">
        <div className="image-box">
          <img id="sam" src={sam} alt="" />
          <div className="bottom-line"></div>
          <div className="work-scroll"></div>
        </div>

        <div className="icon-box">
          <div className="inner-box">
            <div className="about-line"></div>
            <h3 className="about-me">About me</h3>
            <p className="description">
              I'm a junior front-end developer seeking a new role in an exciting
              company. I'm currently based in Barcelona, Spain and I'm open to
              working remotely. I'm a self-motivated and passionate person, with
              great ability to quickly embrace and adapt new ideas and methods,
              striving to make an impact one step at a time through code.
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
                <span className="git-percentage" id="git"></span>
                Git
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
