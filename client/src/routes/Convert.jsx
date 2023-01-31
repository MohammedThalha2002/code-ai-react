import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ConvertPage from "../pages/Convert/ConvertPage";

function Convert() {
  let navigate = useNavigate();
  useEffect(() => {
    let token = sessionStorage.getItem("Auth Token");

    if (!token) {
      return navigate("/");
    }
  }, []);
  return <ConvertPage />;
}

export default Convert;
