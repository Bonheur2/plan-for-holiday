import React from "react";
import "./Login.css";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import user from "/images/login-user.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formdata = { email, password }

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://holiday-planner-4lnj.onrender.com/api/v1/auth/login",
        formdata
      );
      localStorage.setItem('data', JSON.stringify(res.data))
      if (res.data.user.role === "admin") {
        alert("Admin login successfull");
        navigate("/dashboard/barchart");
      }
      else {
        alert("User login successfull");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <div className="contact-form">
        <div className="login-dash">
          <h1>Login</h1>
          <p>
            Doesn't Have any account yet?<Link to="/signup"> Sign Up</Link>
          </p>
          <div className="contact-form1">
            <form action="" id="form" onSubmit={handleLogin}>
              <div className="input-el">
                <label htmlFor="">Email Address</label>
                <br />
                <input
                  type="email"
                  placeholder="you@example.com"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  id="name"
                />
                <p id="error2" className="error"></p>
              </div>
              <div className="input-el">
                <nav id="passwords">
                  <label htmlFor="">Password</label>
                  <Link to="/Forget">Forget Password</Link>
                </nav>
                <br />
                <input
                  type="password"
                  placeholder="Enter 6 character or more"
                  id="email"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p id="error1" className="error"></p>
              </div>
              <div className="remember">
                <input type="checkbox" value="IsRemembeMe" id="rememberMe" />
                <label htmlFor="rememberMe">Remeber me</label>
                <input type="submit" value="LOGIN" className="submit" />
              </div>
            </form>
          </div>
          <nav className="login-us">
            <Link to="" id="social">
              <FcGoogle className="icon4" />
              Google
            </Link>
            <Link to="" id="social">
              <FaFacebookF className="icon4" />
              Facebook
            </Link>
          </nav>
        </div>
        <div className="user-logo">
          <img src={user} alt="user-images" />
        </div>
      </div>
    </div>
  );
}

export default Login;