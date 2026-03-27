import styled from "styled-components";

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Option = styled.li`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.5;
  color: ${(props) => props.theme.colorBlackForText};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Property = styled.span`
  font-weight: 700;
`;