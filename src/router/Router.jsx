import React from "react";
import { App } from "../App";
import { Routes, Route } from "react-router-dom";
import { AddNewCard, Features, Company } from "../pages";

export const CustomRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="AddNewCard" element={<AddNewCard />} />
      <Route path="Company" element={<Company />} />
      <Route path="features" element={<Features />} />
    </Routes>
  );
};
