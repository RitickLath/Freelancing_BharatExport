import React from "react";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import WhyUs from "./Sections/WhyUs";
import Category from "./Sections/Category";
import Roadmap from "./Sections/Roadmap";
import FAQs from "./Sections/FAQs";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <WhyUs />
      <Category />
      <Roadmap />
      <FAQs />
    </div>
  );
};

export default App;
