import styled, { css } from "styled-components";

export const TabListItem = styled.li`
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

export const TabButton = styled.button`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  
  ${(props) =>
      props.$isSelect
         ? css`
          background-color: ${props.theme.colorForButton};
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: ${props.theme.colorWhite};
        `
         : css`
          background-color: ${props.theme.colorGray};
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: ${props.theme.colorBlackForText};
          
          &:hover {
            background-color: ${props.theme.colorForLightBackground};
          }
        `}
`;

export const Header = styled.ul`
  display: flex;
  margin: 0 0 16px 0;
  padding: 0;
  list-style: none;
`;

export const Content = styled.div`
  font-size: 14px;
  text-align: left;
  max-height: ${(props) => props.$maxContentHeiht || "none"};
  overflow-y: overlay;
  line-height: 1.5;
  color: ${(props) => props.theme.colorBlackForText};
`;