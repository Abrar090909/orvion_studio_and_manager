import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Orvion</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/login">Become Partner</a></li>
        <li><a href="/">Open Projects</a></li>
        <li><a href="/">Resources</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
