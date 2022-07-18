import bgFirst from "../images/dana-devolk-x2cNcfz_xXU-unsplash.png";
import bgSecond from "../images/aplikacja.png";
import iconFirst from "../images/Group4.svg";
import iconSecond from "../images/App_Store_(iOS).svg";
import iconThird from "../images/huawei-app-badge-9757fa 2.svg";

export const advBoxesData = [
  {
    id: 1,
    title: "Zestaw dla 3 osób",
    text: "Razem smakuje lepiej! Zamów <br>zestaw obiadowy dla 3 osób <br> już od <span>39 zł </span>",
    img: bgFirst,
    imgAlt: "ad-box-background-first",
    icons: [],
    iconsAlt: "",
  },
  {
    id: 2,
    title: "UberEats",
    text: "Zamawiaj w aplikacji <section>10% taniej.<br></section>Pobierz aplikację UberEats już dziś.",
    img: bgSecond,
    imgAlt: "ad-box-background-second",
    icons: [iconFirst, iconSecond, iconThird],
    iconsAlt: ["icon-first", "icon-second", "icon-third"],
  },
];
