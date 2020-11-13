import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container contain">
        <img src={window.location.origin + "/404.gif"} alt="csd"/>
        <Link to="/Business" className="btn btn-outline-primary px-3">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
