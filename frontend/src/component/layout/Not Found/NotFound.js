import React from "react";
// import ErrorIcon from "@material-ui/icons/Error";
import "./NotFound.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import cat from "../../../images/mittens.jpg";

const NotFound = () => {
  return (
    <div className="PageNotFound">
      <img src={cat} alt="Nothing Here" />
      <Typography>Oops! Nothings here </Typography>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
