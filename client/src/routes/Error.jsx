import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Error() {
  let navigate = useNavigate();
  useEffect(() => {
    let token = sessionStorage.getItem("Auth Token");

    if (!token) {
      return navigate("/");
    }
  }, []);
  return <div>Error</div>;
}

export default Error;
