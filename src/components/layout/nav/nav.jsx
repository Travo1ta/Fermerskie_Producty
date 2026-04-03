import React from "react";
import styled from "styled-components";
import Button from "../../ui/button/button";
import { AppRoute } from "../../../const";

const NavStyled = styled.nav`
  display: flex;
  gap: 20px;
`;

function Nav() {
  return (
    <NavStyled>
      <Button link={AppRoute.MAIN}>Главная</Button>
      <Button link={AppRoute.ORDER}>Заказ</Button>
    </NavStyled>
  );
}

export default Nav;