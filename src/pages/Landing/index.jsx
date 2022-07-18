import React from "react";
import "./Landing.scss";
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";
import LogoSection from "../../components/LogoSection";

const Landing = () => {
  return (
    <div className="landing">
      <Navbar />
      <Slider />
      <LogoSection />
    </div>
  );
};

export default Landing;
