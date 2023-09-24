import React, { useState, useEffect } from "react";
import "./hero.css";

const Hero = () => {
  const futureDate = new Date("2023-09-30T23:59:59");
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  function calculateTimeRemaining() {
    const now = new Date();
    const timeDiff = futureDate - now;

    if (timeDiff <= 0) {
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return {
      hours,
      minutes,
      seconds,
    };
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const { hours, minutes, seconds } = timeRemaining;

  return (
    <section className="hero__main" id="overview">
      <div className="hero__container">
        <div className="hero__top">
          <h3>
            Igniting a Revolution in
            <span className="hero__image-headtext">
              HR Innovation <span className="hero__image-underline"></span>
            </span>
          </h3>
        </div>
        <div className="hero__bottom">
          <div className="hero__left">
            <div className="hero__header">
              <h2>
                getlinked
                <span className="hero__idea-parent">
                  Tech<span className="hero__header-idea"></span>
                </span>
              </h2>
              <h2>
                Hackathon
                <span className="hero__header-number">
                  1.0<span className="hero__header-chain"></span>
                  <span className="hero__header-blow"></span>
                </span>
              </h2>
              <p>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
              <button className="hero__button">Register</button>
              <div className="hero__timer">
                <div>
                  {String(hours).padStart(2, "0")}
                  <span className="hero__header-subscript">H</span>
                </div>

                <div>
                  {String(minutes).padStart(2, "0")} <span className="hero__header-subscript">M</span>
                </div>

                <div>
                  {String(seconds).padStart(2, "0")} <span className="hero__header-subscript">S</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero__right">
            <div className="bottom">
              <div className="hero__images-container">
                <img src="assets/images/matrix.png" alt="" className="hero__image-1" />
                <img src="assets/images/smart-glass.png" alt="" className="hero__image-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
