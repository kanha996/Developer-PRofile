import React, { useState } from "react"
import "./user.css"


export default function User(props){    
    return(
        <div className="user-main">
            <div className="user-wrapper">
                <img src={props.url} alt="user img" className="user-img"/>
                <span className="user-id">{props.name}</span>
                
                <img className="user-link" src={require("../assets/Icons _ Illustrations/north_east-24px.svg")} alt="link" />
                
                
                </div>
        </div>
    )
}