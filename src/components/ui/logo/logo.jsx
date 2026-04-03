import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../../../assets/farmer.svg";
import { StyledLogo, StyledLogoMainPage, Text } from "./styles";
import { AppRoute } from "../../../const";

function Logo() {
  const { pathname } = useLocation();
  
  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <img src={logo} alt="Логотип фермера" width="40" height="40" />
      <Text>Фермерские продукты</Text>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <img src={logo} alt="Логотип фермера" width="40" height="40" />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;