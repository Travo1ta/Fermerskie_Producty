import React from "react";
import styled from "styled-components";
import Header from "../header/header";
import Footer from "../footer/footer";
import Order from "../../pages/order/order";

const PageWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

function PageWrapper({ products }) {
   return (
      <PageWrapperStyled>
         <Header />
         <Main>
            <Order products={products} />
         </Main>
         <Footer />
      </PageWrapperStyled>
   );
}

export default PageWrapper;