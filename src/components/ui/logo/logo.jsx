import React from "react";
import logo from "../../../assets/farmer.svg";
import "./style.css";

function Logo() {
  return (
    <a href="/" className="logo">
      <img 
        src={logo} 
        alt="Логотип фермера" 
        className="logo__image"
        width="40"
        height="40"
      />
      <span className="logo__text">Фермерские продукты</span>
    </a>
  );
}

export default Logo;