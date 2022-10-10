import React from "react";
import "./signInPage.css";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useClickOutside } from "../../hooks/useClickOutside";
import { RiCloseLine } from "react-icons/ri";
import { useRef } from "react";
import { USERS } from "../../Mock/Users/Users";

import EllipseLeftSignIn from "../../assets/icons/Dialogs/sign-in/ellipse-left-top.svg";
import EllipseRightSignIn from "../../assets/icons/Dialogs/sign-in/ellipse-right-button.svg";

export const SignInPage = ({
  setIsAuth,
  setBtnSignIn,
  setAuditUser,
  onClose,
}) => {
  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, onClose);

  const validationsSchema = yup.object().shape({
    email: yup.string().typeError("Need string").required("Necessarily"),
    password: yup.string().typeError("Need string").required("Necessarily"),
  });

  return (
    <section className="sign-in__page" id="sigInPage" ref={wrapperRef}>
      <button
        className="close__page"
        id="closeSignInPage"
        onClick={() => onClose()}
      >
        <RiCloseLine />
      </button>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validateOnBlur
        validationsSchema={validationsSchema}
        onSubmit={(values) => {
          if (
            USERS.filter(
              (user) =>
                user.email === values.email && user.password === values.password
            ).length
          ) {
            setAuditUser(true);
            setBtnSignIn(false);
            setIsAuth(true);
          } else {
            setIsAuth(false);
            alert("The email or password is entred incorrect");

            return;
          }
          localStorage.setItem("user", JSON.stringify(values));
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
          <Form className="sign-in__form" id="signForm">
            <h2 className="form-title">Sign in</h2>
            <input
              className="form-email"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {touched.email && errors.email && (
              <p className={"error"}>{errors.email}</p>
            )}
            <input
              className="form-password"
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {touched.password && errors.password && (
              <p className={"error"}>{errors.password}</p>
            )}
            <button
              className="form-btn"
              type="submit"
              disabled={!isValid && !dirty}
              onClick={() => {
                handleSubmit();
                onClose();
              }}
            >
              Sign in
            </button>
          </Form>
        )}
      </Formik>
      <img
        className="sign-in__ellipse-left"
        src={EllipseLeftSignIn}
        alt="ellipse left top"
      />
      <img
        className="sign-in__ellipse-right"
        src={EllipseRightSignIn}
        alt="ellipse right button"
      />
    </section>
  );
};
