import React from "react";
import arrow from "../icons/arrow.png";
import github from "../icons/github.png";
import linkedin from "../icons/linkedin.png";
import facebook from "../icons/facebook.png";
import instagram from "../icons/instagram.png";

function Footer({ isHamburgerActive, setIsHamburgerActive }) {
  const contactHandler = () => {
    window.scrollTo({ top: 0 });
    setIsHamburgerActive(true);
  };
  return (
    <div>
      <div className="footer-upper-box">
        <h2 className="interested">Interested in doing a project together?</h2>
        <span className="contact-line"></span>
        <button onClick={contactHandler} className="contact-footer">
          Contact Me
        </button>
      </div>

      <div className="footer-lower-box">
        <div className="arrow-box">
          <img
            id="arrow"
            src={arrow}
            alt=""
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>
        <div className="footer-icon-box">
          <a
            href="https://www.facebook.com/samchuuu/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="footer-icons" src={facebook} alt="" />
          </a>
          <a
            href="https://www.instagram.com/samchuu/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="footer-icons" src={instagram} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/samchuu/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="footer-icons" src={linkedin} alt="" />
          </a>
          <a href="https://github.com/samchuu" target="_blank" rel="noreferrer">
            <img className="footer-icons" src={github} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
