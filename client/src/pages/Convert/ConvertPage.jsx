import React from "react";
import NavBar from "../Components/NavBar";
import './ConvertPage.css'

function ConvertPage() {
  return (
    <section className="convert-page">
      {/* nav */}
      <NavBar />
      {/* languages */}
      <section className="languages-section">
        {/* input Editor */}
        <div className="language">
          <select
            name="language1"
            id="language1"
            className="lang-selection"
            onchange="changeLang()"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="c_cpp">C++</option>
            <option value="java" selected>
              Java
            </option>
          </select>
          <div className="code-editor" id="inputEditor" />
        </div>
        {/* output Editor */}
        <div className="language">
          <img
            id="clipboard"
            src="http://clipground.com/images/copy-4.png"
            title="Copy to Clipboard"
          />
          <select
            name="language2"
            id="language2"
            className="lang-selection"
            onchange="changeLang()"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="c_cpp">C++</option>
            <option value="java" selected>
              Java
            </option>
          </select>
          <div className="code-editor" id="outputEditor" />
        </div>
      </section>
      {/* convert btn */}
      <button className="generate-btn" id="code-convert-btn">
        CONVERT
      </button>
    </section>
  );
}

export default ConvertPage;
