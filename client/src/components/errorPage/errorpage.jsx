import React from 'react'
import { Link } from 'react-router-dom'
import cryingsvg from "../assets/Icons _ Illustrations/crying.svg"
import "./errorpage.css"


export default function Errorpage() {
  return (
      <>
      <div>
        <div className="profile-page">
        <div className="profile-header">
          <p className="profile-header-txt"> The Developer Profile</p>
          <Link to="/" className="all-dev-link">
            <p className="profile-header-txt"> All Developers</p>
          </Link>
        </div>
        </div>
        <div className='error-msg'>
            <h1 className='error-txt'> 404 PAGE NOT FOUND </h1>
            <img src={cryingsvg} className="crying-img" alt=''/>
        </div>
    </div>
    </>
    
  )
}

 
