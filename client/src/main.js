import axios from "axios";
import React, { useEffect, useState } from "react";
import DevAdd from "./components/devADD/devPage";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Separator from "./components/separator-line/separator";
import Title from "./components/titleTxt/title";
import Users from "./components/users/users";

function MainPage() {
  const [list, setList] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `https://developer-profileapi.onrender.com/dev/`
        );
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
