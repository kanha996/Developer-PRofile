import React from "react";
import "./App.css";
import MainPage from "./main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/profile/profile";
import Errorpage from "./components/errorPage/errorpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dev/:userName" element={<Profile />} />
        <Route path="/*" element={<Errorpage/>} />
      </Routes>
    </Router>
  );
}

export default App;
