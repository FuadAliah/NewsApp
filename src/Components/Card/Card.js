import React from "react";
import { FiFileText, FiCalendar, FiBookmark } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./Card.scss";

function titles(str) {
  return str.split(" ").slice(0, 10).join(" ");
}

function Card({ item }) {
  return (
    <div className="card-news">
      <div className="img-contain">
        <Link to={`/${item.category}/${item.id}`}>
          <img src={item.urlToImage ? item.urlToImage : window.location.origin + "/default.svg"} alt="img" />
        </Link>
      </div>
      <div className="card-content">
        <Link to={`/${item.category}/${item.id}`} className="card-title">
          {titles(item.title)}
        </Link>
        <div className="card-data">
          <div className="ref">
            <FiFileText className="icon" />
            <span className="card-refrence">{item.source.name}</span>
          </div>
          <div className="ref">
            <FiCalendar className="icon" />
            <span className="card-date">{item.publishedAt.slice(0, 10)}</span>
          </div>
          <div className="bookmark">
            <FiBookmark className="favorite" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
