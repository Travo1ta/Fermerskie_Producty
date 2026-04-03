import styled from "styled-components";
import Button from "../../ui/button/button";

export const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colorWhite};
  color: ${(props) => props.theme.colorBlackForText};
  border: 1px solid rgba(0, 0, 0, 0.1);
  
  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorGray};
    box-shadow: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavItem = styled.li`
  display: flex;
`;