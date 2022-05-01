import React from 'react'

export default function UserList(){

    return(
        <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for username"
        />
        <img
          className="search-btn"
          src={require("../assets/Icons _ Illustrations/search-24px.svg")}
          alt="search btn"
        />
      </div>
    </div>
    )
}