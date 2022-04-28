import React from "react";
import Header from "./components/header/header";
import Search from "./components/searchBar/search";
import Title from "./components/titleTxt/title";
import Separator from "./components/separator-line/separator";
import Footer from "./components/footer/footer";


function MainPage() {
  return (
    <>
      <Header />
      
      <Title />
      <Separator/>

      <Search />

      <Footer />
    </>
  );
}

export default MainPage;
