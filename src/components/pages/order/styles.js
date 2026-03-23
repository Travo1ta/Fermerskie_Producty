import styled from "styled-components";

export const StyledOrder = styled.div`
  display: flex;
  gap: 20px;
  padding: 40px ${(props) => props.theme.pagePadding};
  max-width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  box-sizing: border-box;
`;

export const LeftColumn = styled.div`
  flex: 1;
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

export const PriceValue = styled.span`
  display: block;
  font-size: 36px;
  font-weight: 700;
  line-height: 41px;
  color: ${(props) => props.theme.colorBlackForText};
  margin-bottom: 20px;
`;