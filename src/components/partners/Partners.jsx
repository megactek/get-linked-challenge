import React from "react";
import "./partners.css";

const Partners = () => {
  return (
    <section className="partners__main">
      <div className="partners__container">
        <div className="partners__top">
          <h2>Partners and Sponsors</h2>
          <p>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
        </div>
        <div className="partners__bottom">
          <div className="partners__bottom-top">
            <div className="partners__image-box">
              <img src="assets/images/liberty-assured.png" alt="" />
              <span className="partners__vertical-border"></span>
              <hr className="partners__horizon" />
            </div>

            <div className="partners__image-box">
              <img src="assets/images/liberty-pay.png" alt="" />
              <span className="partners__vertical-border"></span>
              <hr className="partners__horizon" />
            </div>
            <div className="partners__image-box">
              <img src="assets/images/win-wise.png" alt="" /> <hr className="partners__horizon" />
            </div>
          </div>
          <div className="partners__bottom-bottom">
            <div className="partners__image-box">
              <img src="assets/images/whisper-sms.png" alt="" />
              <span className="partners__vertical-border"></span>
            </div>

            <div className="partners__image-box">
              <img src="assets/images/paybox.png" alt="" />
              <span className="partners__vertical-border"></span>
            </div>

            <div className="partners__image-box">
              <img src="assets/images/vuzual-plus.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
