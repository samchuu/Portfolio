import React from "react";
import arrow from "../icons/arrow.png";
import github from "../icons/github.png";
import linkedin from "../icons/linkedin.png";
import twitter from "../icons/twitter.png";
import netlify from "../icons/netlify.png";
function Footer() {
  return (
    <div>
      <div className="footer-upper-box">
        <h2 className="interested">Interested in doing a project together?</h2>
        <span className="contact-line"></span>
        <button className="contact-footer">Contact Me</button>
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
          <img className="footer-icons" src={twitter} alt="" />
          <img className="footer-icons" src={netlify} alt="" />
          <img className="footer-icons" src={linkedin} alt="" />
          <img className="footer-icons" src={github} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
