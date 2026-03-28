import React from "react";
import Title from "../../ui/title/title";
import { TitleSize } from "../../ui/title/constants";
import { StyledSection, Wrapper, Text } from "./styles";

function About() {
   return (
      <StyledSection>
         <Wrapper>
            <Title size={TitleSize.BIG}>Магазин фермерских продуктов с доставкой</Title>
            <Text>
               Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
            </Text>
         </Wrapper>
      </StyledSection>
   );
}

export default About;