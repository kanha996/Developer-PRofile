import React from "react"
import "./users.css"


export default function Users(){
    return(
        <div className="user-main">
            <div className="user-wrapper">
                <img src={require("../assets/Icons _ Illustrations/account_circle-24px.svg")} alt="user img" className="user-img"/>
                <span className="user-id">Kanhaiya</span>
                <a href="">
                <img className="user-link" src={require("../assets/Icons _ Illustrations/north_east-24px.svg")} alt="link" />
                </a>
                
                </div>
        </div>
    )
}