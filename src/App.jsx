import React from "react";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import WhyUs from "./Sections/WhyUs";
import Category from "./Sections/Category";
import Roadmap from "./Sections/Roadmap";
import FAQs from "./Sections/FAQs";
import Footer from "./Sections/Footer";
import Testimonials from "./Sections/Testimonials";
import Navbar from "./Sections/Navbar";
import Sticky from "./Sections/Sticky";
import ContactUs from "./Sections/ContactUs";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Sticky />
      <Hero />
      <About />
      <WhyUs />
      <Category />
      <Roadmap />
      <FAQs />
      <Testimonials />
      {/* <ContactUs /> */}
      <Footer />
    </div>
  );
};

export default App;
