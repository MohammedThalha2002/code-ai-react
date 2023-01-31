import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogoutFirebase } from "../firebase/authentications";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "../pages/Home/HomePage";

function Home() {
  let navigate = useNavigate();
  useEffect(() => {
    let token = sessionStorage.getItem("Auth Token");

    if (!token) {
      return navigate("/");
    }
  }, []);

  const handleLogout = async () => {
    let res = await LogoutFirebase();
    if (res == "success") {
      console.log("Logout successfully");
      toast.success("SUCESS", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/");
    } else {
      toast.error(res, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  // console.log(token);
  return (
    <div>
      <ToastContainer />
      <HomePage />
    </div>
  );
}

export default Home;
