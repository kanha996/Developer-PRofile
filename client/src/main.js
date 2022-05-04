import React from "react";
import Header from "./components/header/header";
import Title from "./components/titleTxt/title";
import Separator from "./components/separator-line/separator";
import Footer from "./components/footer/footer";
import Users from "./components/users/users";
import DevAdd from "./components/devADD/devPage";
import Profile from "./components/profile/profile";

function MainPage() {
  return (
    <>
      <Header />
      
      <Title />
      <Separator/>
      <Users/>
      
      <Separator/>
      <DevAdd/>
      <Footer />
      {/* <Profile/> */}

    </>
  );
}

export default MainPage;
