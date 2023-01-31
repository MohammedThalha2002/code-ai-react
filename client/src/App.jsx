import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Explain from "./routes/Explain";
import Error from "./routes/Error";
import Convert from "./routes/Convert";
import SignIn from "./routes/SignIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explain" element={<Explain />} />
        <Route path="/error" element={<Error />} />
        <Route path="/convert" element={<Convert />} />
      </Routes>
    </div>
  );
}

export default App;
