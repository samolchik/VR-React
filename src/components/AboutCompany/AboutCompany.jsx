import React from "react";
import "./aboutCompany.css";
import Ellipse19 from "../../assets/icons/Company/ellipse-19.svg";
import HeartIcon from "../../assets/icons/Company/heart.svg";

export const AboutCompany = ({ aboutCompany }) => {
  return (
    <>
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
              We specialize in creating visual identities for products and
              branda in your company.
            </p>
          </div>
          <div className="company__advantage">
            <ul className="company__advantage-item">
              {aboutCompany.map((company) => {
                return (
                  <li className="advantage-item__name" key={company.id}>
                    <img
                      className="advantage-item__name-img"
                      src={company.img}
                      alt={company.imgAlt}
                    />
                    <p className="advantage-item__name-title">
                      {company.title}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <img className="company__ellipse" src={Ellipse19} alt="ellipse 19" />
      </section>
    </>
  );
};
