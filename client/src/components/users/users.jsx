import React, { useState } from "react";
import searchsvg from "../assets/Icons _ Illustrations/search-24px.svg";
import "../searchBar/search.css";
import User from "../user/user";
import "./users.css";

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
          <img className="search-btn" src={searchsvg} alt="search btn" />
        </div>
      </div>
      <div className="user-grid">
        {(list || [])
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
