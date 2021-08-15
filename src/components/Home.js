import React from "react";
import sam from "../icons/sam.jpeg";
import facebook from "../icons/facebook.png";
import instagram from "../icons/instagram.png";
import linkedin from "../icons/linkedin.png";

function Home({ isHamburgerActive, setIsHamburgerActive }) {
  const hamburgerHandler = () => {
    setIsHamburgerActive(!isHamburgerActive);
  };

  //nav-bar smooth scroll handlers
  const homeHandler = () => {
    const homePage = document.querySelector(".home");
    setIsHamburgerActive(false);

    homePage.scrollIntoView({ behavior: "smooth" });
  };
  const aboutHandler = () => {
    const aboutPage = document.querySelector(".about");
    setIsHamburgerActive(false);

    aboutPage.scrollIntoView({ behavior: "smooth" });
  };
  const workHandler = () => {
    const workPage = document.querySelector(".projects");
    workPage.scrollIntoView({ behavior: "smooth" });
    setIsHamburgerActive(false);
  };

  const closeNavHandler = () => {
    setIsHamburgerActive(false);
  };

  return (
    <div className="home">
      <header>
        <div className="header">
          <a href="/" className="logo">
            SAM/CHU
          </a>
          <nav className={isHamburgerActive ? "show" : "hide"}>
            <div className="left-box">
              <img id="sam-circle" src={sam} alt="" />
              <h4 className="left-box-header">Contact Details</h4>
              <h6 className="email">samchupiano@gmail.com</h6>
              <h6 className="phone">+34 658 634 235</h6>
              <div className="left-box-icon">
                <a
                  href="https://www.facebook.com/samchuuu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="left-box-icons" src={facebook} alt="" />
                </a>
                <a
                  href="https://www.instagram.com/samchuu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="left-box-icons" src={instagram} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/in/samchuu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="left-box-icons" src={linkedin} alt="" />
                </a>
              </div>
            </div>
            <div className="right-box">
              <div className="close-nav-bar" onClick={closeNavHandler}>
                &times;
              </div>
              <div className="nav-text" href="/" onClick={homeHandler}>
                Home
              </div>

              <div className="nav-text" href="/" onClick={aboutHandler}>
                About
              </div>
              <div className="nav-text" href="/" onClick={workHandler}>
                Work
              </div>
              <a
                href="https://drive.google.com/file/d/1mky-lTU7AYP2Kz8rvO0y_gXWsmyE46dt/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <div className="nav-text">Resume</div>
              </a>
            </div>
          </nav>
          <div className="hamburger" onClick={hamburgerHandler}>
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
          <span className="reality"> reality</span>
        </h2>
        <button onClick={workHandler} className="my-work">
          My Work
        </button>
      </div>
    </div>
  );
}

export default Home;
