import React from "react";
import "./AdBoxes.scss";
import { advBoxesData } from "../../assets/data/advBoxesData";
import Button from "../Button";

const AdvBoxes = () => {
  return (
    <div className="boxes-wrapper">
      {advBoxesData.map((adbox) => (
        <div className="box-adv" key={adbox.id}>
          <img
            src={adbox.img}
            alt={adbox.alt}
            className="box-adv__image"
            id="image"
          />
          <div className="box-adv__wrapper">
            <h2
              className="box-adv__title"
              dangerouslySetInnerHTML={{ __html: `${adbox.title}` }}
            />
            <p
              className="box-adv__text"
              dangerouslySetInnerHTML={{ __html: `${adbox.text}` }}
            />
            {adbox.icons.length > 0 && (
              <div className="box-adv__icons">
                {adbox.icons.map((item, i) => (
                  <a href="/" key={i}>
                    <img src={item} alt={adbox.iconsAlt[i]} />
                  </a>
                ))}
              </div>
            )}

            <Button />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdvBoxes;
