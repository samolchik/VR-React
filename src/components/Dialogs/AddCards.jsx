import React from "react";
import "./addCards.css";
import { Formik } from "formik";
import { RiCloseLine } from "react-icons/ri";
import { useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

import EllipseRighAddCard from "../../assets/icons/Dialogs/sign-in/ellipse-right-button.svg";

export const AddCards = ({ setCards, onClose, isAuth }) => {
  const [cards] = useState(JSON.parse(localStorage.getItem("cards")) || []);

  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, onClose);

  return (
    <section className="add-card" id="addCard" ref={wrapperRef}>
      <button
        className="close__page"
        id="closeAddCardPage"
        onClick={() => onClose()}
      >
        <RiCloseLine />
      </button>
      <h2 className="add-card__title">Realities cards</h2>
      <Formik
        initialValues={{
          id: Date.parse(new Date()),
          name: "",
          description: "",
          img: "",
        }}
        validateOnBlur
        onSubmit={(values) => {
          setCards(values);
          const allCards = [...cards, values];
          localStorage.setItem("cards", JSON.stringify(allCards));
          setCards(JSON.parse(localStorage.getItem("cards")) || []);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <div className="add-card__form">
            <h2 className="add-card__form-name">Add new card</h2>
            <input
              className="add-card__form-input"
              id="cardName"
              name="name"
              placeholder="Card name"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />

            <input
              className="add-card__form-input"
              id="cardDescription"
              name="description"
              placeholder="Card description"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            <input
              className="add-card__form-input"
              id="cardImageName"
              name="img"
              placeholder="Card image name"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.img}
            />
            <button
              className="add-card__form-btn"
              type="submit"
              id="addCardBtn"
              disabled={!isValid && !dirty && !isAuth}
              onClick={() => {
                handleSubmit();
                onClose();
              }}
            >
              Add
            </button>
          </div>
        )}
      </Formik>
      <img
        className="add-card__ellipse-button"
        src={EllipseRighAddCard}
        alt="ellipse left botton"
      />
    </section>
  );
};
