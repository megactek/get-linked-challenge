import React from "react";
import "./introduction.css";

const Introduction = () => {
  return (
    <section className="intro__main">
      <div className="intro__container">
        <div className="intro_left">
          <div className="intro__image-container">
            <img src="assets/images/big-idea.png" alt="" className="intro__image-idea" />
            <p>The Big Idea!</p>
          </div>
        </div>
        <div className="intro__right">
          <h2>
            Introduction to getlinked <span className="intro__right-header">tech Hackathon 1.0</span>
          </h2>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future.
            Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform
            your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
