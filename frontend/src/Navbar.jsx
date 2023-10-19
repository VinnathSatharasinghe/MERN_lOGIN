import React from "react";
import "./nav.css";

function CreativeNavbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">My Website</a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/register">Sing-up</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default CreativeNavbar;
