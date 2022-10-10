import React from "react";
import "./previewPhoto.css";
import { RiCloseLine } from "react-icons/ri";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useRef } from "react";

import EllipseTopPrevie from "../../assets/icons/Dialogs/sign-in/ellipse-left-top.svg";
import EllipseLeftPrevie from "../../assets/icons/Dialogs/sign-in/ellipse-left-top.svg";
import EllipseRightPrevie from "../../assets/icons/Dialogs/sign-in/ellipse-right-button.svg";

export const PreviewPhoto = ({ cardModal, onClose }) => {
  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, onClose);

  return (
    <section className="preview-photo" ref={wrapperRef}>
      <button className="close__page" onClick={() => onClose()}>
        <RiCloseLine />
      </button>
      <div className="preview-photo__content">
        <img
          className="preview-photo__img"
          id="previewPhotoImg"
          src={`/images/${cardModal.img}.png`}
          alt="preview"
        />
        <div className="preview-photo__text">
          <h3 className="preview-photo__title">{cardModal.name}</h3>
          <p className="preview-photo__description">{cardModal.description}</p>
        </div>
      </div>
      <img
        className="preview-photo__ellipse-top"
        src={EllipseTopPrevie}
        alt="ellipse top"
      />
      <img
        className="preview-photo__ellipse-left"
        src={EllipseLeftPrevie}
        alt="ellipse left"
      />
      <img
        className="preview-photo__ellipse-right"
        src={EllipseRightPrevie}
        alt="ellipse right"
      />
    </section>
  );
};
