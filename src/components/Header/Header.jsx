import "./header.css";
import { Link } from "react-router-dom";
import { SignInPage } from "../Dialogs/SignInPage";
import { useState } from "react";

import EllipseHeader from "../../assets/icons/Header/ellipse-header.svg";
import Avatar from "../../assets/icons/Header/womenOrange.png";
import Burger from "../../assets/icons/Header/burger-menu.svg";

export const Header = ({ setAuditUser }) => {
  const [isModalSignIn, setIsModalSignIn] = useState(false);
  const [isUserMenu, setIsUserMenu] = useState(false);
  const [isNavList, setIsNavList] = useState(true);
  const [isBurgerMenu] = useState(false);

  const [isBtnSignIn, setBtnSignIn] = useState(() => {
    if (!localStorage.getItem("user")) {
      return true;
    }

    return false;
  });

  const [isAuth, setIsAuth] = useState(() => {
    if (!localStorage.getItem("user")) {
      return false;
    }

    return true;
  });

  const handleOpenSignIn = () => {
    setIsModalSignIn(true);
  };

  const handleCloseSignIn = () => {
    setIsModalSignIn(false);
  };

  const handleClickAvatar = () => {
    setIsUserMenu((prev) => !prev);
  };

  const handleClickBurgerMenu = () => {
    setIsNavList((prev) => !prev);
  };

  const handleClickLogOut = () => {
    setBtnSignIn(true);
    setIsAuth(false);

    localStorage.removeItem("user");
    localStorage.removeItem("cards");
  };

  return (
    <>
      <header className="header">
        <img
          src={EllipseHeader}
          className="header__ellipse"
          alt="ellipse header"
        />
        <h2 className="header__logo" id="headerLogo">
          Light
        </h2>
        {isUserMenu && (
          <div className="user__menu" id="userMenu">
            <ul className="user__menu-select" id="select" name="select">
              <li className="user__menu-title">
                <h5>User menu</h5>
              </li>
              <li className="menu-select">
                <a href="/">Recently Added</a>
              </li>
              <li className="menu-select">
                <Link to="AddNewCard">Add new card</Link>
              </li>
              <li
                className="menu-select"
                onClick={() => {
                  handleClickLogOut();
                }}
              >
                <a href="/">Log Out</a>
              </li>
            </ul>
          </div>
        )}
        <div className="header__menu">
          {!isBurgerMenu && (
            <img
              className="burger__icon"
              id="burgerMenuIcon"
              src={Burger}
              alt="burger-menu"
              onClick={() => {
                handleClickBurgerMenu();
              }}
            />
          )}
          {isNavList && (
            <nav className="header__nav" id="headerNav">
              <ul className="header__nav-list">
                <li>
                  <Link
                    className="nav-list__item nav-list__item--active"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-list__item" to="Company">
                    Company
                  </Link>
                </li>
                <li>
                  <Link className="nav-list__item" to="Features">
                    Features
                  </Link>
                </li>
              </ul>
            </nav>
          )}
          {isBtnSignIn && (
            <button
              className="header__btn"
              id="headerBtnSignIn"
              onClick={() => {
                handleOpenSignIn();
              }}
            >
              Sing in
            </button>
          )}
          {isAuth && (
            <button
              onClick={() => {
                handleClickAvatar();
              }}
            >
              <img
                src={Avatar}
                alt="avatar"
                className="authed-header__avatar"
                id="headerAvatar"
              />
            </button>
          )}
        </div>
      </header>
      {isModalSignIn && (
        <SignInPage
          setIsAuth={setIsAuth}
          setBtnSignIn={setBtnSignIn}
          setAuditUser={setAuditUser}
          onClose={handleCloseSignIn}
        />
      )}
    </>
  );
};
