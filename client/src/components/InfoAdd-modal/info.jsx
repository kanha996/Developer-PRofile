import React, { useState } from "react";
import Separator from "../separator-line/separator";
import "./info.css";
const axios = require("axios");

export default function InputModal({ closeModal, isAdded, setIsAdded }) {
  const [githubID, setGithubId] = useState("");
  const [codechefID, setCodechefId] = useState("");
  const [linkedinID, setLinkedinId] = useState("");
  const [hackerrankID, setHackerrankId] = useState("");
  const [mediumID, setMediumId] = useState("");
  const [twitterID, setTwitterId] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("https://developer-profileapi.onrender.com/dev/", {
        githubID,
        codechefID,
        linkedinID,
        hackerrankID,
        mediumID,
        twitterID,
      })
      .then(() => {
        closeModal(false);
      });
    setIsAdded(true);
  };

  return (
    <div className="modal-body">
      <div className="modal-main">
        <div className="modal-header">Add Developer profile</div>
        <Separator />
        <form onSubmit={submitHandler}>
          <div className="info-main">
            <div className="info-input">
              <div className="info-header">
                <img
                  className="info-img"
                  src={require("../assets/Profile Icons/iconfinder_github_317712.png")}
                  alt="img profile"
                />
                <p className="info-txt">gitHub</p>
              </div>
              <input
                type="text"
                className="input-txt"
                required
                onChange={(e) => setGithubId(e.target.value)}
              />
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
              <input
                type="text"
                className="input-txt"
                onChange={(e) => setLinkedinId(e.target.value)}
              />
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
              <input
                type="text"
                className="input-txt"
                onChange={(e) => setCodechefId(e.target.value)}
              />
            </div>

            <div className="info-input">
              <div className="info-header">
                <img
                  className="info-img"
                  src={require("../assets/Profile Icons/hackerrank.png")}
                  alt="img profile"
                />
                <p className="info-txt">hackerRank</p>
              </div>
              <input
                type="text"
                className="input-txt"
                onChange={(e) => setHackerrankId(e.target.value)}
              />
            </div>

            <div className="info-input">
              <div className="info-header">
                <img
                  className="info-img"
                  src={require("../assets/Profile Icons/medium.png")}
                  alt="img profile"
                />
                <p className="info-txt">medium</p>
              </div>
              <input
                type="text"
                className="input-txt"
                onChange={(e) => setMediumId(e.target.value)}
              />
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
              <input
                type="text"
                className="input-txt"
                onChange={(e) => setTwitterId(e.target.value)}
              />
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
