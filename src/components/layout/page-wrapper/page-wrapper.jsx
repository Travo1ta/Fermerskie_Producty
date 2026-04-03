import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

const PageWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

function PageWrapper() {
  return (
    <PageWrapperStyled>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </PageWrapperStyled>
  );
}

export default PageWrapper;