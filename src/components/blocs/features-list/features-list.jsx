import React from "react";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button";
import FeatureCard from "../../ui/feature-card/feature-card";
import "./style.css";

function FeaturesList({ features }) {
   return features?.length ? (
      <section className="features">
         <Title>Почему фермерские продукты лучше?</Title>
         <ul className="features__list">
            {features.map((feature) => (
               <li className="features__item" key={feature.id}>
                  <FeatureCard
                     title={feature.title}
                     owner={feature.owner}
                     about={feature.about}
                     isNegative={feature.isNegative}
                     image={feature.image}
                  />
               </li>
            ))}
         </ul>
         <Button>Купить</Button>
      </section>
   ) : null;
}

export default FeaturesList;