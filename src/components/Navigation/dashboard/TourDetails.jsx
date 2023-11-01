import React from "react";
import { useParams } from "react-router-dom";

function TourDetails() {
  const { tourId } = useParams();

  const tourData = {
    1: { name: "City Tour", description: "Explore the city's landmarks.", price: 50 },
    2: { name: "Adventure Trek", description: "Hike through the wilderness.", price: 100 },
    3: { name: "Cultural Experience", description: "Immerse in local culture.", price: 75 },
  };

  const tour = tourData[tourId];

  if (!tour) {
    return <div>Tour not found.</div>;
  }

  return (
    <div>
      <h2>Tour Details</h2>
      <h3>{tour.name}</h3>
      <p>{tour.description}</p>
      <p>Price: ${tour.price}</p>
    </div>
  );
}

export default TourDetails;