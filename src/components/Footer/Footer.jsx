import React from 'react';
import "./footer.css"

import VectorIcon from "../../assets/icons/Footer/vector.svg";
import ArrowIcon from "../../assets/icons/Footer/arrow.svg";
import HandsImg from "../../assets/images/Footer/hands.png";

export const Footer = () => {
  return (
  <footer className="footer">
    <div className="footer__content">
      <div className="footer__item">
        <h3 className="footer__item-title">Explore product in new way <span><img className="footer__item-icon"src={VectorIcon} alt="vector" /></span></h3>
        <p className="footer__item-description">
          We specialize in creating visual identities for products and branda in
          your company.
        </p>
        <form className="footer__form">
          <input className="footer__form-input" id="footerFormInput" placeholder="Your Email" type="email" />
          <button className="footer__form-btn" id="footerFormBtn">
            Start
            <img src={ArrowIcon} alt="arrow" />
          </button>
        </form>
      </div>
      <div className="footer__img">
        <img src={HandsImg} alt="hands" />
      </div>
    </div>
</footer>
  )
}

