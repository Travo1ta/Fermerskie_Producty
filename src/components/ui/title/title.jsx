import React from "react";
import styled from "styled-components";
import { TitleSize } from './constants';

const StyledH1 = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: ${props => props.$size === TitleSize.BIG ? '44px' : '36px'};
  line-height: ${props => props.$size === TitleSize.BIG ? '50px' : '41px'};
`;

const StyledH2 = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: ${props => {
      if (props.$size === TitleSize.SMALL) return '28px';
      if (props.$size === TitleSize.EXTRA_SMALL) return '18px';
      return '36px';
   }};
  line-height: ${props => {
      if (props.$size === TitleSize.SMALL) return '32px';
      if (props.$size === TitleSize.EXTRA_SMALL) return '27px';
      return '41px';
   }};
`;

const StyledH3 = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: ${props => props.$size === TitleSize.SMALL ? '28px' : '18px'};
  line-height: ${props => props.$size === TitleSize.SMALL ? '32px' : '27px'};
`;

function Title({ children, size = TitleSize.MEDIUM }) {
   if (size === TitleSize.BIG) {
      return <StyledH1 $size={size}>{children}</StyledH1>;
   }

   if (size === TitleSize.SMALL || size === TitleSize.EXTRA_SMALL) {
      return <StyledH3 $size={size}>{children}</StyledH3>;
   }

   return <StyledH2 $size={size}>{children}</StyledH2>;
}

export default Title;