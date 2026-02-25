import React from "react";
import styled from "styled-components";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page";

const Main = styled.main`
  width: 1280px;
  margin: 0 auto;
  padding-bottom: 80px;
`;

function PageWrapper(prop) {
   return (
      <>
         <Header />
         <Main>
            <MainPage {...prop} />
         </Main>
         <Footer />
      </>
   );
}

export default PageWrapper;