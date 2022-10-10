import React from "react";
import "./hero.css";
import { AddCards } from "../Dialogs/AddCards";
import { useState } from "react";

import HeroImg from "../../assets/images/Hero/hero.png";
import WomenOrangeImg from "../../assets/images/Hero/womenOrange.png";
import WomenBlackImg from "../../assets/images/Hero/womenBlack.png";
import WomenYellowImg from "../../assets/images/Hero/womenYellow.png";
import ManWhiteImg from "../../assets/images/Hero/manWhite.png";
import DotIcon from "../../assets/icons/Hero/dot.svg";
import EllipseHeroLeft from "../../assets/icons/Hero/Ellipse6.png";
import EllipseHeroRight from "../../assets/icons/Hero/Ellipse7.svg";

export const Hero = ({ setCards, auditUser }) => {
  const [isModalAddCard, setIsModalAddCard] = useState(false);

  const handleOpenAddCard = () => {
    if (!auditUser) {
      alert("Please, login first!");
      return
    }

    setIsModalAddCard(true);
  };

  const handleCloseAddCard = () => {
    setIsModalAddCard(false);
  };

  return (
    <>
      <section className="hero">
        <div className="hero__item">
          <h1 className="hero__item-title">
            Let’s Explore <br />
            Three-Dimensional visual
          </h1>
          <p className="hero__item-describe">
            With virtual technology you can see the digital world feel more real
            and you can play the game with a new style.
          </p>
          <div className="hero__btns">
            <button
              className="hero__btns-info hero__btns-info--active"
              id="heroBtnAddNewCard"
              onClick={() => handleOpenAddCard()}
            >
              Add new card
            </button>
            <button
              className="hero__btns-info hero__btns-info--pink"
              id="heroBtnInfoPink"
            >
              Explore Device
            </button>
          </div>
          <div className="hero__people">
            <ul className="hero__people-list">
              <li className="hero__people-list--orange">
                <img src={WomenOrangeImg} alt="woman in orange" />
              </li>
              <li className="hero__people-list--black">
                <img src={WomenBlackImg} alt="woman in black" />
              </li>
              <li className="hero__people-list--yellow">
                <img src={WomenYellowImg} alt="woman in yellow" />
              </li>
              <li className="hero__people-list--white">
                <img src={ManWhiteImg} alt="man in white" />
              </li>
            </ul>
            <div className="people-online">
              <img src={DotIcon} className="people-online__icon" alt="dot" />
              <p>400k people online</p>
            </div>
          </div>
        </div>
        <div className="hero__vr">
          <img src={HeroImg} className="hero__vr-photo" alt="hero" />
          <div className="hero__vr-text">
            <h2 className="vr-text__title">Cinematic Virtual Reality</h2>
            <hr className="vr-text__line" />
            <p className="vr-text__descr">
              Let’s be the best for more real and effective results and ready to
              explore the limitless world that we have prepared for you.
            </p>
          </div>
        </div>
        <img
          src={EllipseHeroLeft}
          className="hero__ellipse-left"
          alt="ellipse left"
        />
        <img
          src={EllipseHeroRight}
          className="hero__ellipse-right"
          alt="ellipse right"
        />
      </section>
      {isModalAddCard && (
        <AddCards setCards={setCards} onClose={handleCloseAddCard} />
      )}
    </>
  );
};
