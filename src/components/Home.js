import React from "react";

function Home() {
  return (
    <div className="home">
      <header>
        <div id="header">
          <a href="#" className="logo">
            SAM/CHU
          </a>
          <nav>
            <ul>
              <li>
                <a className="nav-text" href="#">
                  Home
                </a>
                <a className="nav-text" href="#">
                  About
                </a>
                <a className="nav-text" href="#">
                  Work
                </a>
              </li>
            </ul>
          </nav>
          <div className="hamburger">
            <span className="first-bar"></span>
            <span className="second-bar"></span>
            <span className="third-bar"></span>
          </div>
        </div>
      </header>
      <div className="header-content">
        <p className="front-end">FRONT-END DEVELOPER</p>
        <h2 className="main-text">
          turning ideas into
          <span className="thoughtful"> reality</span>
        </h2>
        <button className="contact">Contact</button>
      </div>
    </div>
  );
}

export default Home;
