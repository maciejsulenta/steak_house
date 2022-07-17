import React from "react";
import "./Landing.scss";
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";

const Landing = () => {
  return (
    <div className="landing">
      <Navbar />
      <Slider />
    </div>
  );
};

export default Landing;
