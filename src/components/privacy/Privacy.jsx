import React from "react";
import "./privacy.css";

const Privacy = () => {
  return (
    <section className="privacy__main">
      <div className="privacy__container">
        <div className="privacy__left">
          <div className="privacy__left-top">
            <h2>
              Privacy Policy and <div className="primary-text">Terms</div>
            </h2>
            <span>Last updated on September 12, 2023</span>
            <p>
              Below are our privacy & policy, which outline a lot of goodies. it's our aim to always take of our
              participant
            </p>
          </div>
          <div className="privacy__left-bottom">
            <p>
              At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal
              information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you
              participate in our tech hackathon event. By participating in our event, you consent to the practices
              described in this policy.
            </p>
            <div className="privacy__license">
              <h3 className="primary-text">Licensing Policy</h3>
              <p>Here are terms of our Standard License:</p>
              <ul>
                <li>
                  <span className="list-icon"></span>
                  <p>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                </li>
                <li>
                  <span className="list-icon"></span>
                  <p>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                </li>
              </ul>
            </div>
            <button>Read More</button>
          </div>
        </div>
        <div className="privacy__right">
          <img src="assets/images/privacy-image.png" alt="" className="privacy__image-img" />
        </div>
      </div>
    </section>
  );
};

export default Privacy;
