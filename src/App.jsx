import React from "react";
import PageWrapper from "./components/layout/page-wrapper/page-wrapper";
import features from "./mocks/features";
import { GlobalStyle } from "./styles";

export default function App() {
   return (
      <>
         <GlobalStyle />
         <PageWrapper features={features} />
      </>
   );
}