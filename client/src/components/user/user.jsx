import React from "react";
import "./user.css";
import arrowsvg from "../assets/Icons _ Illustrations/north_east-24px.svg"
import { Link } from "react-router-dom";

export default function User(props) {
  return (
    <div className="user-main">
      <div className="user-wrapper">
        <img src={props.url} alt="user img" className="user-img" />
        <span className="user-id">{props.name}</span>
        
        <Link to={`/dev/${props.name}`}>
        <img
          className="user-link"
          src={arrowsvg}
          alt="link"
        />
        </Link>
        
        
      </div>
    </div>
  );
}
