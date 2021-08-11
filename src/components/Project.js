import React from "react";
import pomodoro from "../icons/Pomodoro.png";
import calculator from "../icons/Calculator.png";
import player from "../icons/Player.png";

function Project() {
  return (
    <div className="project-container">
      <div className="project-inner-box">
        <h2 className="projects">Recent Works</h2>

        <div className="project-box">
          <div className="pomodoro-box">
            <img className="pomodoro" src={pomodoro} alt="" />
            <h4>Pomodoro Timer</h4>
            <button className="live">See Live</button>
            <span className="source-code">Source Code</span>
          </div>
          <div className="calculator-box">
            <img className="calculator" src={calculator} alt="" />
            <h4>Calculator</h4>
            <button className="live">See Live</button>
            <span className="source-code">Source Code</span>
          </div>

          <div className="player-box">
            <img className="player" src={player} alt="" />
            <h4>Music Player</h4>
            <button className="live">See Live</button>
            <span className="source-code">Source Code</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
