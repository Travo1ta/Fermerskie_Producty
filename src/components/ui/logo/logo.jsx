import React from "react";
import styled from "styled-components";
import logo from "../../../assets/farmer.svg";

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const Text = styled.span`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.colorBlackForText};
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

function Logo() {
   return (
      <StyledLink href="/">
         <Image
            src={logo}
            alt="Логотип фермера"
         />
         <Text>Фермерские продукты</Text>
      </StyledLink>
   );
}

export default Logo;