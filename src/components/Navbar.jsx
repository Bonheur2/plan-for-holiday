import React from "react";
import "../App.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import Navbanners from "./Navbanners";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-container1">
          <div className="navbar-contents">
            <div className="navbar-email">
              <AiTwotoneMail className="email-icon" />
              holidayplanners@gmail.com
            </div>
            <div className="navbar-phone">
              <IoIosCall className="phone-icon" />
              +250787306047
            </div>
          </div>
          <div className="navbar-icons">
            <div className="navbar-facebook">
              <FaFacebookF className="icons1" />
            </div>
            <div className="navbar-instagram">
              <FiInstagram className="icons1" />
            </div>
            <div className="navbar-twitter">
              <FaTwitter className="icons1" />
            </div>
          </div>
        </div>
        <Navbanners />
      </div>
    </>
  );
}

export default Navbar;