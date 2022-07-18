import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "../../assets/images/l.png";
import UserIcon from "../../assets/images/mojekonto.svg";
import CartIcon from "../../assets/images/koszyk.svg";
import OrderIcon from "../../assets/images/zamow_ikona.svg";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const setIsOpenHandler = () => {
    setisOpen(!isOpen);

    isOpen
      ? document.body.classList.remove("no-scroll")
      : document.body.classList.add("no-scroll");
  };

  return (
    <div className="nav">
      <div className="nav__wrapper">
        <div className="nav__wrapper--left">
          <div className="logo">
            <img src={Logo} alt="logo-steak-house" className="logo__image" />
          </div>
          <ul className="menu">
            <li className="menu__item">
              <a href="" className="link">
                Steaks
              </a>
            </li>
            <li className="menu__item">
              <a href="" className="link">
                Burgers
              </a>
            </li>
            <li className="menu__item">
              <a href="" className="link">
                French fries
              </a>
            </li>
            <li className="menu__item">
              <a href="" className="link">
                Drinks
              </a>
            </li>
            <li className="menu__item">
              <a href="" className="link">
                Gdzie dowozimy?
              </a>
            </li>
            <li className="menu__item">
              <a href="" className="link">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
        <div className="nav__wrapper--right">
          <ul className="menu menu--right">
            <li className="menu__item--user">
              <a href="/" className="link link--user">
                <img src={UserIcon} alt="user-icon" className="menu__icon" />
                Moje konto
              </a>
            </li>
            <li className="menu__item--user">
              <a href="/" className="link link--user">
                <img src={CartIcon} alt="cart_icon" className="menu__icon" />
                Koszyk
              </a>
            </li>
            <li className="menu__item--user">
              <a href="/" className="link link--user link--white link--order">
                <img src={OrderIcon} alt="order_icon" className="menu__icon" />
                Zamów
              </a>
            </li>
          </ul>
          <div className="burger" onClick={setIsOpenHandler}>
            <div
              className={
                isOpen ? "burger__icon burger__icon--active" : "burger__icon"
              }
            />
          </div>
        </div>
      </div>

      <div
        className={isOpen ? "mobile-menu mobile-menu--active" : "mobile-menu"}
      >
        <ul className="mobile-menu__wrapper">
          <li className="mobile-menu__item">
            <a href="/" className="mobile-menu__link">
              Steaks
            </a>
          </li>
          <li className="mobile-menu__item">
            <a href="/" className="mobile-menu__link">
              Burgers
            </a>
          </li>
          <li className="mobile-menu__item">
            <a href="/" className="mobile-menu__link">
              French fries
            </a>
          </li>
          <li className="mobile-menu__item">
            <a href="/" className="mobile-menu__link">
              Drinks
            </a>
          </li>
          <li className="mobile-menu__item">
            <a href="/" className="mobile-menu__link">
              Gdzie dowozimy?
            </a>
          </li>
          <li className="mobile-menu__item">
            <a href="/" className="mobile-menu__link">
              Kontakt
            </a>
          </li>
          <li className="mobile-menu__item">
            <a href="/" className="mobile-menu__link">
              Moje konto
            </a>
          </li>
          <li className="mobile-menu__item">
            <a href="/" className="mobile-menu__link">
              Koszyk
            </a>
          </li>
          <li className="mobile-menu__item">
            <a href="/" className="mobile-menu__link mobile-menu__link--order">
              Zamów
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
