import React from "react";
import "./emptyCards.css";

export const EmptyCards = ({ setIsEmpty }) => {
  if (!localStorage.getItem("cards")) {
    setIsEmpty (true);
  }

  return (
    <>
      <div className="headsets__empty-cards">Empty cards!</div>
    </>
  );
};
