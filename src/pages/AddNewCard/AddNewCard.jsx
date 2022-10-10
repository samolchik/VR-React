import React from "react";
import "./addNewCard.css";
import { useNavigate } from "react-router-dom";
import { AddCards } from "../../components/Dialogs/AddCards";


export const AddNewCard = ({ setCards, handleCloseAddCard,handleSubmit }) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="add__card">
        <button className="card-test" onClick={goHome}>
          Go to Home page
        </button>
      <AddCards setCards={setCards} onClose={handleCloseAddCard} handleSubmit={handleSubmit} />
      </div>
    </>
  );
};
