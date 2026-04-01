import styled from "styled-components";

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Option = styled.li`
  margin-bottom: 10px;
  font-size: 13px;
  line-height: 1.4;
  color: ${(props) => props.theme.colorBlackForText};
  word-break: break-word;
  display: flex;
  flex-wrap: wrap;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Property = styled.span`
  font-weight: 700;
  min-width: 130px;
  flex-shrink: 0;
`;