import React from "react";
import pomodoro from "../icons/pomodoro.png";
import calculator from "../icons/calculator.png";
import drum from "../icons/drum.png";

function Project({ isRecentWorkScrolled, setIsRecentWorkScrolled }) {
  window.addEventListener("scroll", function () {
    const scrolled = window.scrollY;
    console.log(scrolled);
    if (scrolled < 990) {
      setIsRecentWorkScrolled(false);
    } else {
      setIsRecentWorkScrolled(true);
    }
  });
  return (
    <div>
      <h2 className="projects">Recent Works</h2>

      <div
        className={isRecentWorkScrolled ? "project-container" : "hide-project"}
      >
        <div className="project-inner-box">
          <div className="project-box">
            <div className="pomodoro-box">
              <img className="pomodoro" src={pomodoro} alt="" />
              <h4>Pomodoro Timer</h4>
              <a
                href="https://pomodorofcc.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="live">See Live</button>
              </a>
              <a
                href="https://github.com/samchuu/Pomodoro--FCC"
                target="_blank"
                rel="noreferrer"
              >
                <span className="source-code">Source Code</span>
              </a>
            </div>
            <div className="calculator-box">
              <img className="calculator" src={calculator} alt="" />
              <h4>Calculator</h4>
              <a
                href="https://calculatorfcc.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="live">See Live</button>
              </a>
              <a
                href="https://github.com/samchuu/Calculcator--FCC"
                target="_blank"
                rel="noreferrer"
              >
                <span className="source-code">Source Code</span>
              </a>
            </div>

            <div className="drum-box">
              <img className="drum" src={drum} alt="" />
              <h4>Drum Machine</h4>
              <a
                href="https://theultimatedrummachine.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="live">See Live</button>
              </a>
              <a
                href="https://github.com/samchuu/Drum-Machine--FCC"
                target="_blank"
                rel="noreferrer"
              >
                <span className="source-code">Source Code</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
