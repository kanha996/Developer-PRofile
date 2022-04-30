import React from "react";
import Header from "./components/header/header";
import Search from "./components/searchBar/search";
import Title from "./components/titleTxt/title";
import Separator from "./components/separator-line/separator";
import Footer from "./components/footer/footer";
import Users from "./components/users/user";
import DevAdd from "./components/devADD/devPage";
import Profile from "./components/profile/profile";

function MainPage() {
  return (
    <>
      {/* <Header />
      
      <Title />
      <Separator/>

      <Search />
      <Users/>
      <Separator/>
      <DevAdd/>
      <Footer /> */}
      <Profile/>

    </>
  );
}

export default MainPage;
