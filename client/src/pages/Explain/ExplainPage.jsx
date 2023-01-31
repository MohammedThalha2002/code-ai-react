import React from "react";
import NavBar from "../Components/NavBar";
import "./ExplainPage.css";

function ExplainPage() {
  return (
    <section className="explain-page">
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
      <button className="generate-btn" id="code-explain-btn">
        EXPLAIN
      </button>
    </section>
  );
}

export default ExplainPage;
