import React from "react";
import Footer from "../footer/footer";
import Separator from "../separator-line/separator";
import "./profile.css";

export default function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <p className="profile-header-txt"> The Developer Profile</p>
        <p className="profile-header-txt"> All Developers</p>
      </div>
      <div className="profile-body">
        <div className="profile-img">
          <svg
            width="334"
            height="334"
            viewBox="0 0 334 334"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M166.994 0.333252C74.9938 0.333252 0.327148 74.9999 0.327148 167C0.327148 259 74.9938 333.667 166.994 333.667C258.994 333.667 333.661 259 333.661 167C333.661 74.9999 258.994 0.333252 166.994 0.333252ZM166.994 50.3333C194.66 50.3333 216.994 72.6666 216.994 100.333C216.994 128 194.66 150.333 166.994 150.333C139.327 150.333 116.994 128 116.994 100.333C116.994 72.6666 139.327 50.3333 166.994 50.3333ZM166.994 287C125.327 287 88.4938 265.667 66.9938 233.333C67.4938 200.167 133.66 182 166.994 182C200.16 182 266.494 200.167 266.994 233.333C245.494 265.667 208.66 287 166.994 287Z"
              fill="#7C639F"
            />
          </svg>
        </div>
        <div className="profile-details">
          <div className="details-header">
            <h1 className="detail-header-txt">Kanhaiya Mishra</h1>
          </div>
          <div className="profile-bio">
            <p className="bio-txt">CIS @Capgemini</p>
          </div>
          <div className="profile-socials">
            <a href="">
              <img
                className="profile-social-img"
                src={require("../assets/Profile Icons/iconfinder_github_317712.png")}
                alt="img profile"
              />
            </a>
            <a href="">
              <img
                className="profile-social-img"
                src={require("../assets/Profile Icons/hackerrank.png")}
                alt="img profile"
              />
            </a>
            <a href="">
              <img
                className="profile-social-img"
                src={require("../assets/Profile Icons/codechef.png")}
                alt="img profile"
              />
            </a>
            <a href="">
              <img
                className="profile-social-img"
                src={require("../assets/Profile Icons/linkedin.png")}
                alt="img profile"
              />
            </a>
            <a href="">
              <img
                className="profile-social-img"
                src={require("../assets/Profile Icons/medium.png")}
                alt="img profile"
              />
            </a>
            <a href="">
              <img
                className="profile-social-img"
                src={require("../assets/Profile Icons/twitter.png")}
                alt="img profile"
              />
            </a>
            <a href="">
              <img
                className="profile-social-img"
                src={require("../assets/Icons _ Illustrations/Vector (1).png")}
                alt="img profile"
              />
            </a>
          </div>
          <div className="misc-detail">
            <img
              className="misc-img"
              src={require("../assets/Icons _ Illustrations/location_on-24px.svg")}
            />
            <span className="misc-span">Bokaro</span>
            <img
              className="misc-img"
              src={require("../assets/Icons _ Illustrations/business-24px.svg")}
            />
            <span className="misc-span">Bokaro</span>
            <img
              className="misc-img"
              src={require("../assets/Icons _ Illustrations/insert_link-24px (1).svg")}
            />
            <span className="misc-span">Bokaro</span>
          </div>
        </div>
      </div>
      <div className="profile-title">
          Github repositories
      </div>
      <Separator/>
      <Footer/>
    </div>
  );
}
