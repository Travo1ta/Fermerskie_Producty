import React from "react";
import About from "../blocs/about/about";
import FeaturesList from "../blocs/features-list/features-list";

function MainPage({ features }) {
  return (
       
     <>
      <About />
      <FeaturesList features={features} />
    </>
   
  );
}

export default MainPage;