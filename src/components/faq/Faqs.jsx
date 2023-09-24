import React from "react";
import "./faqs.css";
import { faqs } from "../../data";

const Faqs = () => {
  return (
    <section className="faq__main">
      <div className="faq__container">
        <div className="faq__left">
          <h2>
            Frequently Ask <span className="primary-text ">Question</span>
          </h2>
          <p>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
          <div className="faq__questions">
            {faqs.map((faq) => (
              <div className="faq__question-item" key={faq.id}>
                <p>{faq.question}</p>
                <span className="faq__add-icon">+</span>
              </div>
            ))}
          </div>
        </div>
        <div className="faq__right">
          <img src="assets/images/faq-image.png" alt="" className="" />
        </div>
      </div>
    </section>
  );
};

export default Faqs;
