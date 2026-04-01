import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledOrder = styled.div`
  display: flex;
  gap: 20px;
  padding: 40px ${(props) => props.theme.pagePadding};
  max-width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  box-sizing: border-box;
  align-items: flex-start;
  width: 100%;
`;

export const LeftColumn = styled.div`
  flex: 1;
  min-width: 0;
`;

export const RightColumn = styled.div`
  width: 727px;
  flex-shrink: 0;
  height: 700px;
  position: relative;
`;

export const AddressInput = styled.input`
  display: flex;
  height: 48px;
  width: 100%;
  background-color: ${(props) => props.theme.colorGray};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 14px;
  margin-bottom: 20px;

  &::placeholder {
    color: ${(props) => props.theme.colorBlackForText};
  }
`;

export const PriceLabel = styled.span`
  display: block;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.colorBlackForText};
  margin-bottom: 4px;
`;

export const ProductSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  
  .swiper-wrapper {
    height: auto;
  }
  
  .swiper-slide {
    height: auto !important;
    margin-bottom: 16px;
  }
  
  .swiper-slide:last-child {
    margin-bottom: 0;
  }
  
  .swiper-scrollbar {
    background: rgba(0, 0, 0, 0.1);
    position: absolute;
    right: 4px;
    top: 0;
    width: 6px;
    height: 100%;
    border-radius: 3px;
    display: block !important;
    z-index: 10;
  }
  
  .swiper-scrollbar-drag {
    background: ${(props) => props.theme.colorForButton};
    border-radius: 3px;
    cursor: pointer;
  }
  
  .swiper-scrollbar-drag:hover {
    background: ${(props) => props.theme.colorForButtonHover};
  }
`;

export const CheckboxLabel = styled.span`
  display: flex;
  padding: 12px 16px;
  background-color: ${(props) =>
      props.$isChecked ? props.theme.colorForButton : props.theme.colorGray
   };
  color: ${(props) =>
      props.$isChecked ? props.theme.colorWhite : props.theme.colorBlackForText
   };
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  font-size: 14px;
  pointer-events: auto;
  
  &:hover {
    background-color: ${(props) =>
      props.$isChecked ? props.theme.colorForButtonHover : props.theme.colorForLightBackground
   };
  }
`;

// Компонент для отображения сообщения, когда нет продуктов
export const EmptyMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: ${(props) => props.theme.colorBlackForText};
  padding: 40px;
`;