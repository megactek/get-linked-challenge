import React from "react";
import "./rules.css";

const RulesAndGuidelines = () => {
  return (
    <section className="rules__main">
      <div className="rules__container">
        <div className="rules__left">
          <h2>
            Rules and <span className="primary-text">Guidelines</span>
          </h2>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future.
            Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform
            your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
        <div className="rules__right">
          <img src="assets/images/rules-image.png" alt="" className="rules__image" />
        </div>
      </div>
    </section>
  );
};

export default RulesAndGuidelines;
