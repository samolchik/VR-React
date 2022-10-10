import React from "react";
import { useState } from "react";
import { PreviewPhoto } from "../Dialogs/PreviewPhoto";


export const Headset = ({ card }) => {
    const [isModalPreview, setIsModalPreview] = useState(false);
    const [cardModal, setCardModal] = useState(
      JSON.parse(localStorage.getItem("cards")) || []
    );

    const handleOpenPreview = (card) => {
        setIsModalPreview(true);
        setCardModal(card);
      };
    
      const handleClosePreview = () => {
        setIsModalPreview(false);
      };

  return (
    <>
    <li
      className="headsets__card"
      key={card.id}
      onClick={() => {
        handleOpenPreview(card);
      }}
    >
      <img
        src={`/images/${card.img}.png`}
        className="headsets__card-photo"
        alt={card.imgAlt}
      />
      <div className="headsets__card-dscr">
        <h5 className="headsets__card-name">{card.name}</h5>
        <p className="headsets__card-text">{card.description}</p>
      </div>
    </li>
    {isModalPreview && (
      <PreviewPhoto cardModal={cardModal} onClose={handleClosePreview} />
    )}
    </>
  );
};


