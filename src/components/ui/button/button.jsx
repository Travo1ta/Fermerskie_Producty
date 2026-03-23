import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: block;
  min-height: 60px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  min-width: ${(props) => (props.$maxWidth ? "100%" : "260px")};
  max-width: 700px;
  font-weight: 700;
  line-height: 58px;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.colorForButton};
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
    background-color: ${(props) => props.theme.colorForButtonHover};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }
`;

function Button({ children, maxWidth }) {
   return <StyledButton type="button" $maxWidth={maxWidth}>{children}</StyledButton>;
}

export default Button;