import React from "react";
import { useEffect } from "react";
import "../home.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/user/userSlice";
import { useNavigate } from "react-router";
import { setAuthenticated } from "../redux/user/userSlice";

export default function Home() {
  const { name, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    // Redirect to signup page if user is not authenticated
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    // Dispatch logout action
    dispatch(logout());
    dispatch(setAuthenticated(false));
    // Navigate to login page
    navigate("/login");
  };
  

  console.log(name);
  return (
    <form className="logout">
      <h1>
        Welcome <span className="user__name">{name}</span>!
      </h1>
      <button className="logout__button" onClick={handleLogout}>
        Log out
      </button>
    </form>
  );
}
