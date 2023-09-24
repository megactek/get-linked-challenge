import React from "react";
import {
  NavBar,
  Hero,
  Introduction,
  Judging,
  Rules,
  Privacy,
  Prizes,
  Timeline,
  Partners,
  Faqs,
  Footer,
} from "./components";

const App = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <Rules />
      <Judging />
      <Faqs />
      <Timeline />
      <Prizes />
      <Partners />
      <Privacy />
      <Footer />
    </>
  );
};

export default App;
