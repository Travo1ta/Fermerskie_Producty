import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer"; 
import MainPage from "../../pages/main-page";
import "./style.css";

// Обёртка для контента страниц
function PageWrapper(prop) {
    return (
        <>
            <Header />
            <main className="page-wrapper__main">
                <MainPage {...prop} />
            </main>
            <Footer />
        </>
    );
}

export default PageWrapper;