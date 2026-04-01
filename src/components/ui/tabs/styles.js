import styled, { css } from "styled-components";

export const TabListItem = styled.li`
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

export const TabButton = styled.button`
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  border: none;
  
  ${(props) =>
      props.$isSelect
         ? css`
          background-color: ${props.theme.colorForButton};
          color: ${props.theme.colorWhite};
          cursor: default;
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
  flex-wrap: wrap;
  gap: 8px;
`;

export const Content = styled.div`
  font-size: 14px;
  text-align: left;
  max-height: ${(props) => props.$maxContentHeiht};
  overflow-y: auto;
  line-height: 1.5;
  color: ${(props) => props.theme.colorBlackForText};
  padding-right: 10px;
  
  /* Всегда показываем скроллбар, если контент превышает высоту */
  overflow-y: overlay;
  
  /* Стили для прокрутки */
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme.colorForButton} rgba(0, 0, 0, 0.1);
  
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colorForButton};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colorForButtonHover};
  }
  
  /* Для Firefox, чтобы скроллбар всегда был виден */
  scrollbar-width: thin;
`;