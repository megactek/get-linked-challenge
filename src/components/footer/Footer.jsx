import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer__main">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__top-left">
            <div className="top__left-top">
              <h2>
                get<span className="primary-text">linked</span>
              </h2>
              <p>
                Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with
                the aim of showcasing young and talented individuals in the field of technology
              </p>
            </div>
            <div className="top__left-bottom">
              <Link to={"#"}>Terms of Use</Link>
              <span className="link__divider"></span>
              <Link to={"#"}>Privacy Policy</Link>
            </div>
          </div>
          <div className="footer__top-right">
            <div className="footer__links-box">
              <div className="footer__links">
                <h3>Useful Links</h3>
                <ul>
                  <li>Overview</li>
                  <li>Timeline</li>
                  <li>FAQs</li>
                  <li>Register</li>
                </ul>
              </div>
              <div className="footer__contact">
                <h3>Contact Us</h3>
                <ul>
                  <li>
                    <span className="contact__icon"></span>+234 679 81819
                  </li>
                  <li>
                    <span className="location__icon"></span> <p>27, Alara Street Yaba 100012 Lagos State</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__socials">
              <h3>Follow Us</h3>
              <Link to={"#"}>
                <span className="footer__socials-instagram"></span>
              </Link>
              <Link to={"#"}>
                <span className="footer__socials-twitter"></span>
              </Link>
              <Link to={"#"}>
                <span className="footer__socials-facebook"></span>
              </Link>
              <Link to={"#"}>
                <span className="footer__socials-linkedin"></span>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer__bottom">All rights reserved. &copy; getlinked Ltd.</div>
      </div>
    </footer>
  );
};

export default Footer;
