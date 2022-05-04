import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "../user/user";
import "./users.css";
import "./search.css"

export default function Users() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/dev/").then((Response) => {
      setList(Response.data);
    });
  }, []);


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
            src={require("../assets/Icons _ Illustrations/search-24px.svg")}
            alt="search btn"
          />
        </div>
      </div>
      <div className="user-grid">
        {list
          .filter((event) => {
            if (setSearch === "") {
              return event;
            } else if (event.id.includes(search.toLocaleLowerCase())) {
              return event;
            }
          })
          .map((e) => (
            <User key={e.id} name={e.id} url={e.avatar_url} />
          ))}
      </div>
    </div>
  );
}
