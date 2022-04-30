import React, { useState } from "react";
import Separator from "../separator-line/separator";
import "./info.css";

export default function InputModal({ closeModal }) {



  return (
    <div className="modal-body">
      <div className="modal-main">
        <div className="modal-header">Add Developer profile</div>
        <Separator />
        <form>
          <div className="info-main">
            <div className="info-input">
              <div className="info-header">
                <img
                  className="info-img"
                  src={require("../assets/Profile Icons/iconfinder_github_317712.png")}
                  alt="img profile"
                />
                <p className="info-txt">GitHub</p>
              </div>
              <input type="text"  className="input-txt" required/>
            </div>

            <div className="info-input">
              <div className="info-header">
                <img
                  className="info-img"
                  src={require("../assets/Profile Icons/linkedin.png")}
                  alt="img profile"
                />
                <p className="info-txt">linkedin</p>
              </div>
              <input type="text" className="input-txt" />
            </div>

            <div className="info-input">
              <div className="info-header">
                <img
                  className="info-img"
                  src={require("../assets/Profile Icons/codechef.png")}
                  alt="img profile"
                />
                <p className="info-txt">codechef</p>
              </div>
              <input type="text" className="input-txt" />
            </div>

            <div className="info-input">
              <div className="info-header">
                <img
                  className="info-img"
                  src={require("../assets/Profile Icons/hackerrank.png")}
                  alt="img profile"
                />
                <p className="info-txt">HackerRank</p>
              </div>
              <input type="text" className="input-txt" />
            </div>

            <div className="info-input">
              <div className="info-header">
                <img
                  className="info-img"
                  src={require("../assets/Profile Icons/medium.png")}
                  alt="img profile"
                />
                <p className="info-txt">Medium</p>
              </div>
              <input type="text" className="input-txt" />
            </div>

            <div className="info-input">
              <div className="info-header">
                <img
                  className="info-img"
                  src={require("../assets/Profile Icons/twitter.png")}
                  alt="img profile"
                />
                <p className="info-txt">twitter</p>
              </div>
              <input type="text" className="input-txt" />
            </div>
          </div>

          <div className="info-btn-container">
            <div className="info-btn">
              <button
                type="submit"
                className="cancel-btn"
                onClick={() => closeModal(false)}
              >
                cancel
              </button>
              <button type="submit" className="submit-btn">
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
