import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../pages/Error/ErrorPage";

function Error() {
  let navigate = useNavigate();
  useEffect(() => {
    let token = sessionStorage.getItem("Auth Token");

    if (!token) {
      return navigate("/");
    }
  }, []);
  return <ErrorPage />;
}

export default Error;
