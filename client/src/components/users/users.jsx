import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "../user/user";
import "./users.css";
import "../searchBar/search.css";
import searchsvg from "../assets/Icons _ Illustrations/search-24px.svg";

export default function Users({ list }) {
  
  const [search, setSearch] = useState("");


  return (
    <div className="users-container">
      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for username"
            onChange={(e) => setSearch(e.target.value)}
          />
          <img
            className="search-btn"
            src={searchsvg}
            alt="search btn"
          />
        </div>
      </div>
      <div className="user-grid">
        {list
          // eslint-disable-next-line array-callback-return
          .filter((event) => {
            if (setSearch === "") {
              return event;
            } else if (event.id.includes(search.toLocaleLowerCase())) {
              return event;
            }
          })
          .map((e) => (
            <User key={e.id} name={e.id} url={e.avatar_url} userid={e._id} />
          ))}
      </div>
    </div>
  );
}
