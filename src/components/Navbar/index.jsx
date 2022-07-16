import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/images/l.png";
import UserIcon from "../../assets/images/mojekonto.svg";
import CartIcon from "../../assets/images/koszyk.svg";
import OrderIcon from "../../assets/images/zamow_ikona.svg";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav__wrapper">
        <div className="nav__wrapper--left">
          <div className="logo">
            <img src={Logo} alt="logo-steak-house" className="logo__image"/>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
