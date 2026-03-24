import styled from "styled-components";
import Title from "../title/title";

export const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 16px;
`;

export const ProductTitle = styled(Title)`
  margin-bottom: 8px;
`;

export const Price = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  color: ${(props) => props.theme.colorBlackForText};
`;

export const ContentWrapper = styled.div`
  padding: 0 16px 16px;
`;