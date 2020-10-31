import React from "react";

import "./CardLoading.scss";

function CardLoading({ item }) {
  return (
    <div className="card-news-loading">
      <div className="img-contain-loading"></div>
      <div className="card-content-loading">
        <div className="card-title-loading"></div>
        <div className="card-title-loading"></div>
        <div className="card-data-loading">
          <div className="ref-loading">
            <span className="card-refrence-loading"></span>
            <span className="card-refrence-loading"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardLoading;
