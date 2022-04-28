import React from "react";
import "./header.css"

export default function Header(){

    return (
        <div className="main">
            <div className="header-txt">
            The Developer <br />
            Repository
            </div>
        <img className="main-logo" src={require("../assets/Icons _ Illustrations/page-logo.png")} alt="logo" />
    </div>
    )
}