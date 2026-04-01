import React from "react";
import styled from "styled-components";
import Logo from "../../ui/logo/logo";

const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  height: ${(props) => props.theme.footerHeight};
  background-color: ${(props) => props.theme.colorWhite};
  justify-content: space-between;
  align-items: center;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  box-sizing: border-box;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: auto;
`;

const Copyright = styled.span`
  min-height: 43px;
  min-width: 148px;
  max-width: 700px;
  padding: 8px 12px;
  font-size: 18px;
  background-color: ${(props) => props.theme.colorForLightBackground};
  border-radius: 5px;
  vertical-align: middle;
  text-align: center;
  box-sizing: border-box;
  color: ${(props) => props.theme.colorBlackForText};
`;

function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <Copyright>Создано 2021</Copyright>
    </StyledFooter>
  );
}

export default Footer;