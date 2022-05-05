import React from "react";
import "./reposs.css";
import Separator from "../separator-line/separator";
import reposvg from "../assets/Icons _ Illustrations/north_east-24px.svg";



export default function Repo(props) {
  return (
    <div className="repo-item">
      <Separator />
      <div className="repo-wrapper">
        <div className="repo-header">
          <div className="repo-name">{props.header}</div>
          <a href={props.repo_url} target="_blank" rel="noreferrer">
          <img src={reposvg} className="repo-link" alt=""/>
          </a>
          
          <div className="update-detail">Updated at {props.date}</div>
        </div>

        <div className="repo-desc">{props.desc}</div>
      </div>
    </div>
  );
}
