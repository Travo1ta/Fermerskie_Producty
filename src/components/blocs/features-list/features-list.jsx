import React from "react";
import styled from "styled-components";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button";
import FeatureCard from "../../ui/feature-card/feature-card";

const StyledSection = styled.section`
  position: relative;
  display: flex;
  padding: 100px 90px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
`;

const List = styled.ul`
  margin: 44px 0 64px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1140px;
  list-style: none;
`;

const Item = styled.li`
  width: 540px;
  margin-top: 20px;
`;

function FeaturesList({ features }) {
   return features?.length ? (
      <StyledSection>
         <Title>Почему фермерские продукты лучше?</Title>
         <List>
            {features.map((feature) => (
               <Item key={feature.id}>
                  <FeatureCard
                     title={feature.title}
                     owner={feature.owner}
                     about={feature.about}
                     isNegative={feature.isNegative}
                     image={feature.image}
                  />
               </Item>
            ))}
         </List>
         <Button>Купить</Button>
      </StyledSection>
   ) : null;
}

export default FeaturesList;