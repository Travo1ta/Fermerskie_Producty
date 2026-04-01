import styled from "styled-components";
import Title from "../title/title";

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

export const ProductTitle = styled(Title)`
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 1.3;
`;

export const Price = styled.p`
  margin: 8px 0 0 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  color: ${(props) => props.theme.colorBlackForText};
`;

export const ContentWrapper = styled.div`
  padding: 10px;
  overflow: visible;
`;