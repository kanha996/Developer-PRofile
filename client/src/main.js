import React, { useState, useEffect } from "react";
import Header from "./components/header/header";
import Title from "./components/titleTxt/title";
import Separator from "./components/separator-line/separator";
import Footer from "./components/footer/footer";
import Users from "./components/users/users";
import DevAdd from "./components/devADD/devPage";
import axios from "axios";

function MainPage() {
  const [list, setList] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`https://developer-profileapi.onrender.com/dev/`);
        setList(res.data);
      } catch (error) {
        alert(error);
      }
    })();
  }, [isAdded]);

  return (
    <>
      <Header />
      <Title />
      <Separator />
      <Users list={list} />
      <Separator />
      <DevAdd isAdded={isAdded} setIsAdded={setIsAdded} />
      <Footer />
    </>
  );
}

export default MainPage;
