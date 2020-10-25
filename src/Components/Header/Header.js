import React from "react";
import { NavLink } from "react-router-dom";
import Login from "../Login/Login";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header">
          <div className="logo">
            <NavLink exact to="/Business" className="link-logo">
              <img src={window.location.origin + "/logo.svg"} alt="logo" />
            </NavLink>
          </div>
          <div id="fixed-navbar" className="fixed-navbar"></div>
          <div className="auth">
            <Login />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
