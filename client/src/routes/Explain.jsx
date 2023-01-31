import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Explain() {
  let navigate = useNavigate();
  useEffect(() => {
    let token = sessionStorage.getItem("Auth Token");

    if (!token) {
      return navigate("/");
    }
  }, []);
  return <div>Explain</div>;
}

export default Explain;
