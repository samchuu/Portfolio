import React, { useState, useEffect } from "react";
import sam from "../icons/sam.jpeg";
import facebook from "../icons/facebook.png";
import instagram from "../icons/instagram.png";
import linkedin from "../icons/linkedin.png";
function Home() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [isScrollActive, setIsScrollActive] = useState(false);
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
    setIsScrollActive(true);
    aboutPage.scrollIntoView({ behavior: "smooth" });
  };
  const workHandler = () => {
    const workPage = document.querySelector(".work-scroll");
    workPage.scrollIntoView({ behavior: "smooth" });
    setIsHamburgerActive(false);
    setIsScrollActive(true);
  };

  // const contactHandler = () => {
  //   const contactPage = document.querySelector(".footer-icon-box");
  //   contactPage.scrollIntoView({ behavior: "smooth" });
  //   setIsHamburgerActive(false);
  //   setIsScrollActive(true);
  // };

  const closeNavHandler = () => {
    setIsHamburgerActive(false);
  };

  //show hamburger when user is on top of the page
  // window.addEventListener("scroll", function () {
  //   if (window.scrollY == 0) {
  //     setIsScrollActive(false);
  //   } else {
  //     setIsScrollActive(true);
  //   }
  // });
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
              <h6 class="phone">+34 658 634 235</h6>
              <div className="left-box-icon">
                <img className="left-box-icons" src={facebook} alt="" />
                <img className="left-box-icons" src={instagram} alt="" />
                <img className="left-box-icons" src={linkedin} alt="" />
              </div>
            </div>
            <div className="right-box">
              <div className="close-nav-bar" onClick={closeNavHandler}>
                X
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
              <div className="nav-text" href="/">
                Resume
              </div>
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
        <button className="contact">Contact</button>
      </div>
    </div>
  );
}

export default Home;
