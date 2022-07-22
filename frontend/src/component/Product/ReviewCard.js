import { Rating } from "@material-ui/lab";
import React from "react";
import profilePng from "../../images/Profile.png";

const ReviewCard = ({ review }) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.1,
  };

  return (
    <div className="reviewCard">
      <div className="user">
        <img src={profilePng} alt="User" />
        <p>{review.name}</p>
      </div>
      <Rating {...options} />
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  );
};

export default ReviewCard;
