import React, { useState, useContext} from "react";
import { useParams } from "react-router-dom";
import "./SingleTour.css";
import { AuthContext } from "../../context/AppProvider";
import images from "/images/greece.jpeg"


const SingleTour = () => {

  const { myTours } = useContext(AuthContext);
 
  const { _id } = useParams();
  const tour = myTours?.find((invo) => invo._id == _id  )
  console.log(tour)



  return (
    <>
      <div>

        <div>
          <div className="background-image">
            <img src={tour?.backdropImage} alt="" />
            <h1 className="name-indian"> rwanda</h1>
          </div>

          <div className="detail-information">
            <div className="info-button">Tour Plan</div>
            <div className="vertical-line"></div>
            <div className="info-button">{tour?.country}</div>
            <div className="vertical-line"></div>
            <div className="info-button">{tour?.Gallery}</div>
            <div className="vertical-line"></div>
            <div className="info-button">Review</div>
          </div>
          <div className="tour-area1">
            <div className="side-form1">
              <h6 className="title-2">BOOK THIS TOUR</h6>
              <div className="search-tour1">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="search-tour1">
                <input type="email" placeholder="Email" />
              </div>
              <div className="search-tour1">
                <input type="email" placeholder="Confirm Email" />
              </div>

              <div className="search-tour1">
                <input type="number" placeholder="phone" />
              </div>

              <div className="search-tour1">
                <input type="date" placeholder="mm/dd/yyy" />
              </div>

              <div className="search-tour1">
                <input type="number" placeholder="Number Of Tickets" />
              </div>
              <div className="checkbox">
                <input type="checkbox" id="cultural" />
                <label htmlFor="cultural">Check Availability</label>
              </div>

              <button>FIND NOW</button>
            </div>
            <div className="tour-mission2">
              <div className="mission-details">
                <h1>Why Book with us ?</h1>
                <p>Customer care available 24/7</p>
                <p>Free Travel Insurance </p>
                <p>Hand-picked Tours & Activitie</p>
              </div>
            </div>
            

            <div className="tour-mission3">
              <div className="">
                <h1>Get A Question ?</h1>
                <p>
                  Do not hesitage to give us a call. We are an expert team and
                  we are happy to talk to you
                </p>
                <p>holidayplanners@gmail.com </p>
                <p>+123 456 7890</p>
              </div>
            </div>

            <div className="tour-detailed">
              <div className="para23">
                <h1>
                  {" "}
                  A wonderful serenity has taken possession of my entire soul
                </h1>

                <div className="circle">
                  <p>${tour?.Price}</p>
                  <p>Per person</p>
                </div>
              </div>
              <div className="planned-trip">
                <p className="trip-duration">2 days</p>
                <p className="trip-duration">{tour?.Duration}</p>
                <p className="trip-participants">{tour?.GroupSize} </p>
                <p className="trip-destination">{tour?.location}</p>
                <p className="trip-destination"> {tour?.destination}</p>
              </div>
              <div className="trip-description">
                <p>
                  {" "}
                 {tour?.Description}
                 {" "}
                </p>
              </div>

              <table>
                <thead>
                  <tr>
                    <th>Greece</th>
                    <th>LoremIpsum</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Destination</td>
                    <td>Greece</td>
                  </tr>
                  <tr>
                    <td>Departure</td>
                    <td>LoremIpsum</td>
                  </tr>
                  <tr>
                    <td>Departure Time</td>
                    <td>{tour?.Departure}</td>
                  </tr>
                  <tr>
                    <td>Return Time</td>
                    <td>10:12pm</td>
                  </tr>
                  <tr>
                    <td>Dress Code</td>
                    <td>Light Jacket</td>
                  </tr>
                  <tr>
                    <td>Price Included</td>
                    <td>${tour?.Price}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
          </div>
          </div>
        {/* ))} */}

      </div>
    </>
  );
};

export default SingleTour;