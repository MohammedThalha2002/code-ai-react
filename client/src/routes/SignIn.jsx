import { useEffect } from "react";
import SignInPage from "../pages/Auth/SignInPage";
import { useNavigate } from "react-router-dom";

function SignIn() {
  let navigate = useNavigate();

  useEffect(() => {
    let token = sessionStorage.getItem("Auth Token");

    if (token) {
      navigate("/home");
    }
  }, [])
  

  return <SignInPage />;
}

export default SignIn;
