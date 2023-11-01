import React from "react";
import "./Tour.css";
import { tourlists } from "./Tourlist";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AppProvider";
import { useContext } from "react";

function Tour() {
  const { myTours } = useContext(AuthContext);

  return (
    <div className="alltour-container">
      <div className="tour">
        <p>Tour List</p>
      </div>
      <div className="tourists">
        <div className="touristsse">
          {myTours?.map((invo) => (
            <div className="card">
              <p key={invo.id}></p>
              <img src={invo.backdropImage} />
              <button className="RWANDA">{invo.country}</button>
              <div className="card-body">
                <h2>{invo.code}</h2>
                <p>{invo.date}</p>
                <div className="duration">
                  <div>
                    <b>Duration</b>
                    <p>{invo.Duration}</p>
                  </div>
                  <div>
                    <b>Group Size</b>
                    <p>{invo.days}</p>
                  </div>
                </div>
                <div className="durationn">
                  <p>${invo.Price}</p>
                  <Link to={`/tour/${invo._id}`}>
                    <button className="find-buttonn">BOOK NOW</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="tourists22">
          <div className="card2">
            <p>FIND YOUR TOUR</p>
            <div>
              <input
                type="text"
                placeholder="WHERE TO?"
                className="filterinput"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="WHERE TO?"
                className="filterinput"
              />
            </div>
            <div>
              <select className="filterselect">
                <option value="">When?</option>
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
            <div>
              <label>
                <b>Duration</b>
              </label>
              <select className="filterselect">
                <option value="">Travel Type</option>
                <option value="">ADVENTURE</option>
                <option value="">HISTORICAL</option>
                <option value="">SEASIDE</option>
                <option value="">DISCOVERY</option>
              </select>
            </div>
            <div className="number">
              <input type="number" className="number-1" />
              <input type="number" className="number-1" />
            </div>
            <div className="sects">
              <ul>
                <li>
                  <a href="#"> Cultural</a>
                </li>
                <li>
                  <a href="#">Adventure</a>
                </li>
                <li>
                  <a href="#">Historical</a>
                </li>
                <li>
                  <a href="#">Seaside</a>
                </li>
                <li>
                  <a href="#">Discovery</a>
                </li>
              </ul>
            </div>
            <button className="findbutton">FIND NOW</button>
          </div>
          <div className="TOURLIST">
            <b>WHY BOOK WITH US?</b>
            <div className="TOURLIST1">
              <h>Best Price Guarantee</h>
              <h>Customer care available 24/7</h>
              <h>Free Travel Insureance</h>
              <h>Hand-picked Tours & Activities</h>
            </div>
          </div>
          <div className="TOURLIST2">
            <b>GET A QUESTION?</b>
            <p>
              Do not hesitage to give us a call.
              <br />
              We are an expert team and we are happy <br />
              to talk to you.
            </p>
            <div className="TOURLIST2-1">
              <h>holidayplanners@gmail.com</h>
              <h>+123 456 7890</h>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tour;