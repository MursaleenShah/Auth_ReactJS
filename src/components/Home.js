import React from "react";
import "../home.css";
import { useDispatch } from "react-redux";
import { logout } from "../redux/user/userSlice";
import { useNavigate, useSelector } from "react-router";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    // Dispatch logout action
    dispatch(logout());
    // Navigate to login page
    navigate("/login");
  };
  return (
    <form className="logout">
      <h1>
        Welcome <span className="user__name"></span>!
      </h1>
      <button className="logout__button" onClick={handleLogout}>
        Log out
      </button>
    </form>
  );
}
