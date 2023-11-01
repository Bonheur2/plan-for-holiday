import React from "react";

function Image(props) {
  return (
    <>
    <div className="destination">
      <img src={props.image } alt={props.description}  className="desc-images"/>
      <h2 className="image-desc">{props.description} </h2>
      </div>
    </>
  );
}

function Destination() {
  return (
    <>
    <div className="destination-pages">
      <h2 className="all-title">Amazing Destination</h2>
      <h1 className="mydesti">Choose The Destination Just Right For Your Vacation</h1>
      <div className="parent">
        <div className="app">
          <Image image="/images/travel1.jpeg" description="Rwanda" />
          <Image image="/images/travel2.jpeg" description="Maroc" />
          <Image image="/images/travel3.jpeg" description="Beligique" />
          <Image image="/images/travel4.jpeg" description="Canada" />
          <Image image="/images/travel5.webp" description="Usa" />
          <Image image="/images/travel1.jpeg" description="Nethaland" />
          <Image image="/images/travel7.jpg" description="Suede" />
          <Image image="/images/travel8.jpg" description="Burundi" />
          <Image image="/images/travel9.jpeg" description="Indian" />
          <Image image="/images/travel3.jpeg" description="Madrid" />
        </div>
      </div>
      </div>
    </>
  );
}

export default Destination;