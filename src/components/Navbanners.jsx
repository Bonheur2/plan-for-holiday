import React from "react";
import { Link } from "react-router-dom";
import { TfiSearch } from "react-icons/tfi";
import { FiBarChart } from "react-icons/fi";
import { useState } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { SlClose } from "react-icons/sl";

function Navbanners() {
  const [modal, setModal] = useState(false);
  function openModal() {
    setModal((prev) => !prev);
  }
  return (
    <>
      <div className="navbar-container2">
        <div className="right-navbar">
          <img src="/images/logo.png" alt="Logo planners" />
        </div>
        <div className="left-navbar">
          <div>
            <button className="reserve-btn">RESERVE</button>
          </div>
          <div>
            <TfiSearch className="search-btn" />
          </div>
          <div>
            <FiBarChart className="iconsbar" onClick={openModal} />
          </div>
        </div>
      </div>

      {modal && (
        <div className="nav-bar">
          
          <div className="whitelogo-nav">
            <div>
            <img src="./public/images/white-logo.png" alt="Logo planners" />
            </div>
            <div>
            <ul onClick={openModal}>
              <li>
                <Link to="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link to="/destination">
                  <p>Destination</p>
                </Link>
              </li>
              <li>
                <Link to="/tour">
                  <p>Tour</p>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <p>Login</p>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <p>Contact Us</p>
                </Link>
              </li>
            </ul>
            </div>
          </div>
          
            <div className="logo-close-icons">
            <span className="close">
            <SlClose  onClick={openModal}/>            
          </span>
          <div className="logo-icons">
          
            <div className="navbar-icons1">
              <div className="navbar-facebook1">
                <FaFacebookF className="icons1" />
              </div>
              <div className="navbar-instagram1">
                <FiInstagram className="icons1" />
              </div>
              <div className="navbar-twitter1">
                <FaTwitter className="icons1" />
              </div>
            </div>
            <img
              className="logo2"
              src="./public/images/logo-icon-white.svg"
              alt="logo2"
            />
          </div>
        </div>
        </div>
      )}
    </>
  );
}

export default Navbanners;