import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Convert() {
  let navigate = useNavigate();
  useEffect(() => {
    let token = sessionStorage.getItem("Auth Token");

    if (!token) {
      return navigate("/");
    }
  }, []);
  return <div>Convert</div>;
}

export default Convert;
