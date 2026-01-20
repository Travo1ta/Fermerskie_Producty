import React from "react";
import Title from "../title/title";
import "./style.css";

function FeatureCard({
  title,
  owner,
  about,
  isNegative,
  image
}) {
  return (
    <section className={`feature${isNegative ? " feature_negative" : ""}`}>
      <header className="feature__header">
        <img
          className="feature__img"
          width={56}
          height={56}
          src={image}
          alt={title}
        />
        <div>
          <span
            className={`feature__owner${
              isNegative ? " feature__owner_negative" : ""
            }`}
          >
            {owner}
          </span>
          <Title size="extra-small">{title}</Title>
        </div>
      </header>
      <p
        className="feature__text"
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </section>
  );
}

export default FeatureCard;