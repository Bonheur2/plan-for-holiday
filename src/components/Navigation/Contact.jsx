import React from "react";
import { ImLocation } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import "./Contact.css"
import { useState } from "react";
import axios from "axios";
import contactimage from "/images/travel7.jpg";

import Notiflix from "notiflix";



Notiflix.Notify.init({
  position: "righf-top",
  timeout: 3000,
  cssAnimation: true,
})


function Contact() {
  const [name, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [service, setService] = useState("")

  const contactdata = { email, name, phone, message, service }

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://holiday-planner-4lnj.onrender.com/api/v1/contact/submit",
        contactdata,
      );
      // alert("Contact submission successful"/
      Notiflix.Notify.success("Contact submission successful!");

      console.log(contactdata);
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <>
      <img src={contactimage} alt="" className="contact-image" />

      <div className="contact-container">
        <div className="contact-form-content">

          <aside className="contact-form1">
            <form action="" onSubmit={handleContactSubmit}>

              <article className="contact-in-text">

                <nav className="contact-input">
                  <input type="text" className="cont"
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name *" />
                  <input type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="cont"
                    placeholder="Email *" />
                  <input type="text"
                    className="cont"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone*" />
                  <input type="text"
                    onChange={(e) => setService(e.target.value)}
                    className="cont"
                    placeholder="Services*" />
                </nav>
                <nav>
                  <textarea
                    name=""
                    id=""
                    cols="120"
                    rows="5"
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>

                </nav>
                <input type="submit" className="contact-button" value="submit" />
              </article>

            </form>
          </aside>

          <div className="contact-content">
            <div className="contact-book-list">
              <p className="why-book">WHY BOOK WITH US?</p>
              <ul>
                <li>Best Price Guarantee</li>
                <li>Customer care available 24/7</li>
                <li>Free Travel Insureance</li>
                <li>Hand-picked Tours & Activities</li>
              </ul>
            </div>
            <div className="contact-question">
              <h1 className="why-question">GET A QUESTION?</h1>
              <p>
                Do not hesitage to give us a call. We are an expert team and
                we are happy to talk to you.
              </p>
              <ul>
                <li>Holiday plannners</li>
                <li>+250787306047</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="location-map">
          <div className="contact-location">
            <nav className="contact-location1">
              <h1>INDIAN OFFICE</h1>
              <ul>
                <li>
                  <ImLocation className="icon3" />
                  54, Beside Shoping Mall, Gujarat.
                </li>
                <li>
                  <IoCall className="icon3" />
                  +123 456 7890
                </li>
                <li>
                  <MdOutlineAlternateEmail className="icon3" />
                  holidayplanners@gmail.com
                </li>
              </ul>
            </nav>
            <nav className="contact-location2">
              <h1>USA OFFICE</h1>
              <ul>
                <li>
                  <ImLocation className="icon3" />
                  888 S Greenville, TX 75081, United States.
                </li>
                <li>
                  <IoCall className="icon3" />
                  +123 456 7890
                </li>
                <li>
                  <MdOutlineAlternateEmail className="icon3" />
                  holidayplannersusa@gmail.com
                </li>
              </ul>
            </nav>
            <nav className="contact-location3">
              <h1>VICTORIA OFFICE</h1>
              <ul>
                <li>
                  <ImLocation className="icon3" />
                  Main Street, Victoria 8007.
                </li>
                <li>
                  <IoCall className="icon3" />
                  +123 456 7890
                </li>
                <li>
                  <MdOutlineAlternateEmail className="icon3" />
                  holidayplannersvic@gmail.com
                </li>
              </ul>
            </nav>
          </div>
          <div className="contact-map">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  className="gmap_iframe"
                  width="100%"
                  src="https://maps.google.com/maps?width=800&amp;
                  height=400&amp;
                  hl=en&amp;
                  q=Nyanza Rwanda&amp;
                  t=k&amp;z=14&amp;
                  ie=UTF8&amp;
                  iwloc=B&amp;
                  output=embed"
                ></iframe>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;