import React, { useState , useEffect} from "react";
import Header from "./components/header/header";
import Title from "./components/titleTxt/title";
import Separator from "./components/separator-line/separator";
import Footer from "./components/footer/footer";
import Users from "./components/users/users";
import DevAdd from "./components/devADD/devPage";
import axios from 'axios';

function MainPage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/dev/").then((Response) => {
      setList(Response.data);
    });
  }, [list]);

  return (
    <>
      <Header />
      <Title />
      <Separator/>
      <Users list={list}/>
      <Separator/>
      <DevAdd/>
      <Footer />
    </>
  );
}

export default MainPage;
