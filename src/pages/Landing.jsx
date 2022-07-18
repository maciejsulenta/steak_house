import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import LogoSection from "../components/LogoSection";
import AdvBoxes from "../components/AdvBoxes";

const Landing = () => {
  return (
    <div className="landing">
      <Navbar />
      <Slider />
      <LogoSection />
      <AdvBoxes />
    </div>
  );
};

export default Landing;
