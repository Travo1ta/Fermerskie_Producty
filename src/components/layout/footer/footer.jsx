import React from "react";
import styled from "styled-components";
import Logo from "../../ui/logo/logo";

const StyledFooter = styled.footer`
  position: absolute;
  width: 1280px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  padding-top: 0;
  padding-bottom: 0;
  height: 80px;
  background-color: #ffffff;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-left: 90px;
  padding-right: 90px;
  box-sizing: border-box;
`;

const Copyright = styled.span`
  min-height: 43px;
  min-width: 148px;
  max-width: 700px;
  padding: 8px 12px;
  font-size: 18px;
  background-color: #fff6d9;
  border-radius: 5px;
  vertical-align: middle;
  text-align: center;
  box-sizing: border-box;
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