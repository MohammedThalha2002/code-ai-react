import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav className="home-nav">
        <div className="logo">
          <h1>&lt;CODE AI&gt;</h1>
        </div>
        <div className="nav-items">
          <a href="/home">
            <h1 className="nav-links" id="home-nav">
              //HOME
            </h1>
          </a>
          <a href="/convert">
            <h1 className="nav-links" id="convert-nav">
              //CONVERT
            </h1>
          </a>
          <a href="/explain">
            <h1 className="nav-links" id="explain-nav">
              //EXPLAIN
            </h1>
          </a>
          <a href="/error">
            <h1 className="nav-links" id="error-nav">
              //ERROR
            </h1>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
