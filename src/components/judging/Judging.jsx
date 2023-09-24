import React from "react";
import "./judging.css";
import { judgingCriteria } from "../../data";

const Judging = () => {
  return (
    <section className="judging__main">
      <div className="judging__container">
        <div className="judging__left">
          <img src="assets/images/judging-image.png" alt="" className="judging__image" />
        </div>
        <div className="judging__right">
          <h2>
            Judging Criteria <span className="primary-text">Key attributes</span>
          </h2>
          <div className="judging__criteria">
            {judgingCriteria.map((criteria) => (
              <p key={criteria.id}>
                <span className="judging__topic">{criteria.topic}:</span>
                {criteria.text}
              </p>
            ))}
          </div>
          <div>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Judging;
