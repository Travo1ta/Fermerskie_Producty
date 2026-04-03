import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles";
import { AppRoute } from "./const";
import PageWrapper from "./components/layout/page-wrapper/page-wrapper";
import MainPage from "./components/pages/main-page";
import Order from "./components/pages/order/order";
import ScrollToTop from "./components/ui/scroll-top/scroll-top";
import features from "./mocks/features";
import products from "./mocks/products";

function App() {
   return (
      <>
         <GlobalStyle />
         <Router>
            <ScrollToTop />
            <Routes>
               <Route path={AppRoute.MAIN} element={<PageWrapper />}>
                  <Route index element={<MainPage features={features} />} />
                  <Route path={AppRoute.ORDER} element={<Order products={products} />} />
               </Route>
            </Routes>
         </Router>
      </>
   );
}

export default App;