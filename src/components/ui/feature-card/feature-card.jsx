import React from "react";
import styled from "styled-components";
import Title from "../title/title";

const Card = styled.section`
  width: 540px;
  min-height: 197px;
  padding: 20px;
  background-color: ${props => props.$isNegative ? '#f8ddd7' : '#e1edce'};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  margin-bottom: 20px;
  text-align: left;
  align-items: flex-start;
`;

const Image = styled.img`
  width: 56px;
  height: 56px;
  margin-right: 20px;
  flex-shrink: 0;
`;

const Owner = styled.span`
  display: inline-block;
  min-height: 25px;
  margin-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  line-height: 25px;
  color: #ffffff;
  background-color: ${props => props.$isNegative ? '#f75531' : '#88aa4d'};
  border-radius: 2px;
`;

const Text = styled.p`
  padding: 0;
  margin: 0;
  text-align: left;
  flex-grow: 1;
  display: flex;
  align-items: flex-start;

  p {
    margin: 0;
  }
`;

function FeatureCard({
   title,
   owner,
   about,
   isNegative,
   image
}) {
   return (
      <Card $isNegative={isNegative}>
         <Header>
            <Image
               src={image}
               alt={title}
            />
            <div>
               <Owner $isNegative={isNegative}>
                  {owner}
               </Owner>
               <Title size="extra-small">{title}</Title>
            </div>
         </Header>
         <Text dangerouslySetInnerHTML={{ __html: about }} />
      </Card>
   );
}

export default FeatureCard;