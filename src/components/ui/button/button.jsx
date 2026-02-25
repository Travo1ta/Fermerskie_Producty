import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: block;
  min-height: 60px;
  font-size: 18px;
  min-width: 260px;
  max-width: 700px;
  font-weight: 700;
  line-height: 58px;
  color: #ffffff;
  background-color: #fc9827;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover,
  &:active {
    background-color: #d7903fff;
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }
`;

function Button({ children }) {
   return <StyledButton type="button">{children}</StyledButton>;
}

export default Button;