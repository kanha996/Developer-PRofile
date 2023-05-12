/* eslint-disable array-callback-return */
import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import companysvg from "../assets/Icons _ Illustrations/business-24px.svg";
import emailsvg from "../assets/Icons _ Illustrations/insert_link-24px (1).svg";
import locationsvg from "../assets/Icons _ Illustrations/location_on-24px.svg";
import Footer from "../footer/footer";
import Repo from "../reposss/reposss";
import Separator from "../separator-line/separator";
import "./profile.css";

export default function Profile() {
  const { userName } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`https://developer-profileapi.onrender.com/dev/${userName}`);
        setData(res.data);
        setLoading(true);
      } catch (error) {
        alert(error);
      }
    })();
  }, [userName]);

  

  const deleteHandler = async () => {
    try {
      await axios.delete(`https://developer-profileapi.onrender.com/dev/${userName}`);
      navigate('/');
    } catch (error) {
      window.alert(error);
    }
  };

  // const[repoList,setRepoList] = useState([])
  if (loading) {
    const { repos } = data;
    return (
      <div className="profile-page">
        <div className="profile-header">
          <p className="profile-header-txt"> The Developer Profile</p>
          <Link to="/" className="all-dev-link">
            <p className="profile-header-txt"> All Developers</p>
          </Link>
        </div>
        <div className="profile-body">
          <div className="profile-img">
            <img src={data.avatar_url} className="profile-img-wrapper" alt="" />
          </div>
          <div className="profile-details">
            <div className="details-header">
              <h1 className="detail-header-txt">{data.name}</h1>
            </div>
            <div className="profile-bio">
              <p className="bio-txt">{data.bio}</p>
            </div>
            <div className="profile-socials">
              <a
                href={`http://github.com/${userName}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="profile-social-img"
                  src={require("../assets/Profile Icons/iconfinder_github_317712.png")}
                  alt="img profile"
                />
              </a>
              <a
                href={`http://hackerrank.com/${data.hackerrank_id}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="profile-social-img"
                  src={require("../assets/Profile Icons/hackerrank.png")}
                  alt="img profile"
                />
              </a>
              <a
                href={`http://codechef.com/${data.codechef_id}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="profile-social-img"
                  src={require("../assets/Profile Icons/codechef.png")}
                  alt="img profile"
                />
              </a>
              <a
                href={`http://linkedin.com/in/${data.linkedin_id}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="profile-social-img"
                  src={require("../assets/Profile Icons/linkedin.png")}
                  alt="img profile"
                />
              </a>
              <a
                href={`http://medium.com/${data.medium_id}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="profile-social-img"
                  src={require("../assets/Profile Icons/medium.png")}
                  alt="img profile"
                />
              </a>

              <a
                href={`http://twitter.com/${data.twitter_id}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="profile-social-img"
                  src={require("../assets/Profile Icons/twitter.png")}
                  alt="img profile"
                />
              </a>
              <a href={`mailto${data.email}`} target="_blank" rel="noreferrer">
                <img
                  className="profile-social-img"
                  src={require("../assets/Icons _ Illustrations/Vector (1).png")}
                  alt="img profile"
                />
              </a>
            </div>
            <div className="misc-detail">
              <img className="misc-img" src={locationsvg} alt="" />
              <span className="misc-span">{data.location}</span>
              <img className="misc-img" src={companysvg} alt="" />
              <span className="misc-span">{data.company}</span>
              <img className="misc-img" src={emailsvg} alt="" />
              <span className="misc-span">{data.blog}</span>
            </div>
            <div className="delete-wrapper">
                <button
                  type="submit"
                  className="delete-btn"
                  onClick={deleteHandler}
                >
                  delete profile
                </button>
            </div>
          </div>
        </div>
        <div className="profile-title">Github repositories</div>
        {repos.map((p) => {
          return (
            <Repo
              key={p.name}
              header={p.name}
              repo_url={p.html_url}
              date={new Date(p.updated_at).toDateString()}
              desc={p.description}
            />
          );
        })}
        <Separator />
        <Footer />
      </div>
    );
  }
}
