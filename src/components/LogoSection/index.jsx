import React from "react";
import "./LogoSection.scss";
import { logoData } from "../../assets/data/logoData";

const LogoSection = () => {
  return (
    <div className="logo-section">
      <div className="logo-section__wrapper">
        {logoData.map((logo) => (
          <img className="image" src={logo.src} alt={logo.alt} key={logo.alt} />
        ))}
      </div>
    </div>
  );
};

export default LogoSection;
