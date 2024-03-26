import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setName, setEmail, setPassword } from "../redux/user/userSlice";
import "../components.css";
export default function Singup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = useSelector((state) => state.user);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };





  const handleSignup = () => {
    const { name, email, password } = formData;
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }




    if (!name || !email || !password) {
      console.log("Please fill in all fields.");
      alert("Please fill in all fields.");
      return;
    }

    //Dispatch actions to update user state in Redux
    dispatch(setName(name));
    dispatch(setEmail(email));
    dispatch(setPassword(password));

    // Save user details to local storage
    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    // Navigate to home component
    navigate("/home");
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text"> Sign Up </div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src="../../Assets/person.png" alt="" />
          <input
            type="text"
            placeholder="Name"
            id="name"
            onChange={handleChange}
          />
        </div>

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
        <div className="submit" onClick={handleSignup}>
          SignUp
        </div>
        {/* <div className="submit"> <Link to='/login'></Link></div> */}
        <Link to="/login">
          <div className="submit">Login</div>
        </Link>
      </div>
    </div>
  );
}
