import React, { useEffect } from "react";
import "./timeline.css";
import { timeline } from "../../data";

const Timeline = () => {
  useEffect(() => {
    const liElements = document.querySelectorAll("ul li");

    liElements.forEach((li, index) => {
      const ordinalNumber = index + 1;
      li.style.setProperty("--ordinal-number", `"${ordinalNumber}"`);
    });
  }, []);
  return (
    <section className="timeline__container">
      <h2>Timeline</h2>
      <p>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
      <div className="timeline__map">
        <ul>
          {timeline.map((item) => (
            <li key={item.id}>
              <span class="timeline__circle"></span>
              <div className="timeline__content">
                <div className="timeline__content-content">
                  <h2 className="timeline__title">{item.title}</h2>

                  <p>{item.activity}</p>
                </div>
                <h2>{item.date}</h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Timeline;
