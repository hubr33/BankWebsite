import React from "react";
import "../css/Header.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <h2>{props.state.bankName}</h2>
      </div>
      <ul className="buttons">
        <NavLink className="btn" to="/">
          Start
        </NavLink>
        <NavLink className="btn" to="/payments">
          Płatności
        </NavLink>
        <NavLink className="btn" to="offers">
          Oferty
        </NavLink>
        <NavLink className="btn" to="issues">
          Moje sprawy
        </NavLink>
      </ul>
      <div className="accountPanel">
        <button className="message">
          <i className="fas fa-inbox"></i>
        </button>
        <div className="account">
          <div className="accountShort">
            <p>{props.state.inicials}</p>
          </div>
          <div className="name">
            <p>Zalogowany użytkownik</p>
            <p>{props.state.fullname}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
