import React from "react";
import NavBar from "../Components/NavBar";
import "./ErrorPage.css";

function ErrorPage() {
  return (
    <section className="error-page">
      {/* nav */}
      <NavBar />
      {/* languages */}
      <section className="languages-section">
        {/* input Editor */}
        <div className="language">
          <div className="code-editor" id="inputEditor" />
        </div>
        {/* output Editor */}
        <div className="language" id="outputExplanation">
          <h1 id="outputExplanationContent"></h1>
        </div>
      </section>
      {/* convert btn */}
      <button className="generate-btn" id="code-error-btn">
        FIND ERROR
      </button>
    </section>
  );
}

export default ErrorPage;
