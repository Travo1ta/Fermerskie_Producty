import React from "react";
import Logo from "../../ui/logo/logo";
import Nav from "../nav/nav";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
