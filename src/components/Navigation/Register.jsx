import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import user from "/images/login-user.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Notiflix from "notiflix";



Notiflix.Notify.init({
  position: "righf-top",
  timeout: 3000,
  cssAnimation: true,
})
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const formdata = { email, location, password, fullName };

  const Navigate = useNavigate();



  const handleFormSubmit = async (e) => {
    e.preventDefault();

  if (password !== confirmPassword) {
    // alert("Passwords do not match");
    Notiflix.Notify.failure("Password not match!");

    return;
  }

    try {
      await axios.post(
        "https://holiday-planner-4lnj.onrender.com/api/v1/auth/signup",
        formdata
      );
      console.log(formdata);
      Navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="reg-container">
        <nav className="register-title">
          <h1>Register to our platform</h1>
        </nav>

        <div className="register-container">
          <div className="register-form">
            <form action="" className="reg-form" onSubmit={handleFormSubmit}>
              <label htmlFor="">Fullname</label>
              <input
                type="text"
                name="fullName"
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your fullname"
              />

              <label htmlFor="">Email</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder="Enter your Email"
              />

              <label htmlFor="">Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Enter your password"
              />
              <label htmlFor="">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repeat your password"
              />

              <label htmlFor="">Location</label>

              <input
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                name="phone"
                placeholder="Enter your Location"
              />

              <input type="submit" value="REGISTER"  className="reg-button"/>
              <div>
                {" "}
                If you hava any account Sign Up <Link to="/login">Here</Link>
              </div>
            </form>
          </div>
          <div className="user-logo">
            <img src={user} alt="user-images" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
