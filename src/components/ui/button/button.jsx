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
  background-color: ${(props) => 
    props.disabled ? "#cccccc" : props.theme.colorForButton
  };
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease-out;

  &:hover,
  &:active {
    background-color: ${(props) => 
      props.disabled ? "#cccccc" : props.theme.colorForButtonHover
    };
    box-shadow: ${(props) => 
      props.disabled ? "none" : "inset 0 4px 0 rgba(0, 0, 0, 0.14)"
    };
  }

  &:active {
    box-shadow: none;
  }
`;

function Button({ children, maxWidth, disabled, onClick }) {
  console.log("Button рендер:", { disabled, onClick });
  return (
    <StyledButton 
      type="button" 
      $maxWidth={maxWidth} 
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

export default Button;