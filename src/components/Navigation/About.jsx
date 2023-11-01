import React from "react";
import { ImLocation } from "react-icons/im";
import { FaCalendarAlt, FaFlag } from "react-icons/fa";
import imagee1 from "/images/travel9.jpeg";
import imagee2 from "/images/back.jpeg";

function About() {
  return (
    <>
      <div className="about-imageback"></div>
      <div className="data-filters">
        <div className="about-select">
          <ImLocation className="about-icon" />
          <input type="text" placeholder="WHERE TO?" className="filter-input" />
        </div>
        <div className="about-select">
          <FaCalendarAlt className="about-icon" />
          <select className="filter-select">
            <option value="">WHEN?</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <div className="about-select">
          <FaFlag className="about-icon" />
          <select className="filter-select">
            <option value="">CULTURE</option>
            <option value="">ADVENTURE</option>
            <option value="">HISTORICAL</option>
            <option value="">SEASIDE</option>
            <option value="">DISCOVERY</option>
          </select>
        </div>
        <button className="find-button">FIND NOW</button>
      </div>
      <div className="about-container">
        <div className="about-image">
          <img src={imagee1} className="image1" alt="image1" />
          <img src={imagee2} className="image2" alt="image2" />
        </div>
        <div className="about-content">
          <h2 className="all-title">About Us</h2>
          <h1 className="mydesti">Plan Your Trip with Us</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your mouth.
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic. Italic Mountains, she had a last
            view back on the skyline
          </p>
          <button className="read-more">Read More</button>
        </div>
      </div>
    </>
  );
}

export default About;