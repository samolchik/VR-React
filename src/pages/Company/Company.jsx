import React from "react";
import "./company.css";
import { useNavigate } from "react-router-dom";
import HeartIcon from "../../assets/icons/Company/heart.svg";
import BeSincereIcon from "../../assets/icons/Company/beSincere.svg";
import KeepIcon from "../../assets/icons/Company/Keep.svg";
import StrongerIcon from "../../assets/icons/Company/stronder.svg";
import TakeIcon from "../../assets/icons/Company/take.svg";
import Ellipse19 from "../../assets/icons/Company/ellipse-19.svg";

export const Company = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="company-footer">
      <section className="company">
      <div className="company__item">
        <div className="company__content">
          <h2 className="company__content-title">
            Our company values culture{" "}
            <span>
              <img
                className="company__content-icon"
                src={HeartIcon}
                alt="heart"
              />
            </span>
          </h2>
          <p className="company__content-description">
            We specialize in creating visual identities for products and branda
            in your company.
          </p>
        </div>
        <div className="company__advantage">
          <ul className="company__advantage-item">
            <li className="advantage-item__name">
              <img
                className="advantage-item__name-img"
                src={BeSincereIcon}
                alt="Be Sincere"
              />
              <p className="advantage-item__name-title">Be Sincere</p>
            </li>
            <li className="advantage-item__name">
              <img
                className="advantage-item__name-img"
                src={KeepIcon}
                alt="Keep it simplee"
              />
              <p className="advantage-item__name-title">Keep it simple</p>
            </li>
            <li className="advantage-item__name">
              <img
                className="advantage-item__name-img"
                src={StrongerIcon}
                alt="Stronger together"
              />
              <p className="advantage-item__name-title">Stronger together</p>
            </li>
            <li className="advantage-item__name">
              <img
                className="advantage-item__name-img"
                src={TakeIcon}
                alt="Take intelligent risks"
              />
              <p className="advantage-item__name-title">
                Take intelligent risks
              </p>
            </li>
          </ul>
        </div>
      </div>
      <img
        className="company__ellipse"
        src={Ellipse19}
        alt="ellipse 19"
      />
    </section>
        <button className="text" onClick={goHome}>
          Go to Home page
        </button>
      </div>
    </>
  );
};
