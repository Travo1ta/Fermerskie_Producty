import React from "react";
import styled from "styled-components";
import Header from "../header/header";
import Footer from "../footer/footer";
import Order from "../../pages/order/order";
// import MainPage from "../../pages/main-page";

const Main = styled.main`
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding-bottom: ${(props) => props.theme.footerHeight};
`;

function PageWrapper(prop) {
   return (
      <>
         <Header />
         <Main>
         <Order />   
         </Main>
         <Footer />
      </>
   );
}

export default PageWrapper;

{/* <MainPage {...prop} /> */}