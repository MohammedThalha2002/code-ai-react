import React from "react";
import "./HomePage.css";
import NavBar from "../Components/NavBar";

function HomePage() {
  return (
    <>
      <section className="landing-page">
        <NavBar />
        <div className="landing-content" id="land-cont">
          <h1>WE CAN MAKE EFFIECIENT CODE FOR YOU</h1>
        </div>
        <div id="content">
          <div id="out" />
        </div>
      </section>
    </>
  );
}

export default HomePage;
