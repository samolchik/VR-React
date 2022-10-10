import React from "react";
import "./headsets.css";
import { useState } from "react";
import { Headset } from "../Headset/Headset";
import { EmptyCards } from "../EmptyCards/EmptyCards";
import EllipseHead from "../../assets/icons/Headsets/Ellipse-center.svg";

export const Headsets = ({ cards, handleSortCards }) => {
  const [isEmpty, setIsEmpty] = useState(() => {
    if (!localStorage.getItem("cards")) {
      return true;
    }

    return false;
  });

  return (
    <>
      <section className="headsets__menu">
        <div className="headsets__header">
          <h3 className="headsets__header-title"> Mixed Reality Headsets</h3>
          <select
            className="headsets__header-sort"
            name="sort"
            onChange={handleSortCards}
          >
            <option value="New first">
              New first &nbsp; &nbsp; &nbsp; &#9662;
            </option>
            <option value="New last">New last </option>
          </select>
        </div>
        {cards && (
          <ul className="headsets__item">
            {cards.map((card) => {
              return <Headset key={card.id} card={card} />;
            })}
          </ul>
        )}
        {isEmpty && <EmptyCards setIsEmpty={setIsEmpty} />}
        <img
          src={EllipseHead}
          className="headsets__ellipce"
          alt="Ellipse-center"
        />
      </section>
    </>
  );
};
