import React from "react";
import styled from "styled-components";
import Logo from "../../ui/logo/logo";
import Nav from "../nav/nav";

const StyledHeader = styled.header`
  display: flex;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  width: 100%;
  height: ${(props) => props.theme.footerHeight};
  justify-content: space-between;
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);
  align-items: center;
  z-index: 5;
  box-sizing: border-box;
  flex-shrink: 0;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
}

export default Header;