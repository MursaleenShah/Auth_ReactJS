import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword } from "../redux/user/userSlice";
import Home from "./Home";
import "../components.css";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  console.log(formData);

  const handleLogin = () => {
    const { email, password } = formData;
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log(storedUser.email);
    console.log(storedUser.password);

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      dispatch(setEmail(email));
      dispatch(setPassword(password));
      //<Home />
      navigate("/home");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src="../../Assets/email.png" alt="" />
          <input
            type="email"
            placeholder="Email Id"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <img src="../../Assets/password.png" alt="" />
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="submit-container">
        <Link to="/">
          <div className="submit">Sign Up</div>
        </Link>
        <div className="submit" onClick={handleLogin}>
          Login
        </div>
      </div>
    </div>
  );
}
