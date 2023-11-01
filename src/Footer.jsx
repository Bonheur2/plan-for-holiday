import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/images/logo.png" alt="Logo planners" />
          </div>
          <div className="footer-description">
            Holiday planners sit amet consectetur adipisicing elid. Perferendis
            sapiente tenetur officiis explicabofugit, sil mollitia eum atque
            excepturi quaerat autem.
          </div>
          <div className="btn-input-all">
            <input type="email"  placeholder="Enter your Email" className="my-input"/>
            <button className="input-btn">SUBMIT</button>
          </div>
        </div>
        <div className="navigation">
          <h2>Navigation</h2>
          <hr />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/destination">Destination</Link>
            </li>
            <li>
              <Link to="/tour">Tour</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="help">
          <h1>Need Helps!</h1>
          <hr />
          <div className="call-us">
            <p>Call Us</p>
            <p>+250787306047</p>
          </div>
          <div className="email-us">
            <p>Email for Us</p>
            <p>holidayplanners@gmail.com</p>
          </div>
          <div className="location">
            <p>Location</p>
            <p>Main Street, Victoria 8007</p>
          </div>
          <div className="follow-us">
            <p>Follow us</p>
            <p className="my-icons">
              <FaFacebookF className="icons1" />
              <FiInstagram className="icons1" />
              <FaTwitter className="icons1" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;