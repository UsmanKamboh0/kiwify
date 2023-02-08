import Rating from '@mui/material/Rating';
import React from "react";
// import profilePng from "../images/Profile1.png";

const ReviewCard = () => {
  const options = {
    // value: review.rating,
    value:3,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <>
      <div className="reviewCard">
      {/* <img src={profilePng} alt="User" /> */}
      {/* <p>{review.name}</p> */}
      <Rating {...options} />
      
    </div>










   
    </>

  );
};

export default ReviewCard;
