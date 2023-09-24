import React from "react";
import "./contact.css";
import { NavBar } from "../../components";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <NavBar />
      <section className="contact__main">
        <div className="only__mobile top">
          <span className="go__back-icons"></span>
        </div>
        <div className="contact__container">
          <div className="contact__left">
            <div className="contact__left-top">
              <h1 className="primary-text">Get in touch</h1>
              <p>Contact Information</p>
              <p>27,Alara Street Yaba 100012 Lagos State</p>
              <p>Call Us : 07067981819</p>
              <p>we are open from Monday-Friday 08:00am - 05:00pm</p>
            </div>
            <div className="contact__left-bottom">
              <h3>Share on</h3>
              <p>
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
              </p>
            </div>
          </div>
          <div className="contact__right">
            <h2 className="primary-text">Questions or need assistance? Let us know about it!</h2>
            <p className="c">Email us below to any question related to our event</p>
            <form>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Mail" />
              <textarea placeholder="Message" cols="30" rows="10"></textarea>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
