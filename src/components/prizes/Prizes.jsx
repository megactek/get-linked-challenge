import React from "react";
import "./prizes.css";

const Prizes = () => {
  return (
    <section className="prizes__main">
      <div className="prizes__container">
        <div className="prizes__top">
          <h2>
            Prizes and <span className="primary-text">Rewards</span>
          </h2>
          <p>Highlight of the prizes or rewards for winners and for participants.</p>
        </div>
        <div className="prizes__bottom">
          <div className="prizes__trophy">
            <img src="assets/images/trophy.png" alt="" className="prizes__trophy-image" />
          </div>
          <div className="prizes__medals">
            <div className="prizes__box">
              <div className="prizes__text">
                <p>2nd Runner</p>
                <span>N300,000</span>
              </div>
              <div className="prizes__image">
                <img src="assets/images/silver-medal-image.png" alt="" className="prizes__trophy-img" />
              </div>
            </div>
            <div className="prizes__box">
              <div className="prizes__text">
                <p>1st Runner</p>
                <span>N400,000</span>
              </div>
              <div className="prizes__image">
                <img src="assets/images/gold-medal-image.png" alt="" className="prizes__trophy-img" />
              </div>
            </div>
            <div className="prizes__box">
              <div className="prizes__text">
                <p>3rd Runner</p>
                <span>N150,000</span>
              </div>
              <div className="prizes__image">
                <img src="assets/images/bronze-medal-image.png" alt="" className="prizes__trophy-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
