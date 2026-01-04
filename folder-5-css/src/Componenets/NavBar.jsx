import React from 'react'
import "../Css/NavBar.css";
const NavBar = () => {
  return (
    <div>
       <nav className="navbar">
      <h2 className="logo">JobPortal</h2>

      <ul className="nav-links">
        <li>Home</li>
        <li>Jobs</li>
        <li>Companies</li>
        <li>Contact</li>
      </ul>
    </nav>
    </div>
  )
}

export default NavBar
