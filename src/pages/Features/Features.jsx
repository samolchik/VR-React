import React from "react";
import "./features.css";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";

export const Features = () => {
  const navigate = useNavigate();
  // const { features_id } = useParams();

  const goHome = () => {
    navigate("/");
  };

  return (
    <>
    <div className="features">
    <Footer/>
      <button className="text" onClick={goHome}>
        Go to Home page
      </button>
    </div>
    </>
  );
};
