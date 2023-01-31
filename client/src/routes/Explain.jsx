import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExplainPage from "../pages/Explain/ExplainPage";

function Explain() {
  let navigate = useNavigate();
  useEffect(() => {
    let token = sessionStorage.getItem("Auth Token");

    if (!token) {
      return navigate("/");
    }
  }, []);
  return <ExplainPage />;
}

export default Explain;
