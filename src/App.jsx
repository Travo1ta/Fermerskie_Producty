import React from "react";
import PageWrapper from "./components/layout/page-wrapper/page-wrapper";
// import features from "./mocks/features";
import products from "./mocks/products";
import { GlobalStyle } from "./styles";

export default function App() {
   return (
      <>
         <GlobalStyle />
         <PageWrapper products={products} />
      </>
   );
}

{/* <PageWrapper features={features} /> */}