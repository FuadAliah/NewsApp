import React from "react";
import { FiFileText, FiCalendar, FiBookmark } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./Card.scss";

function Card({ item }) {
  console.log(item);
  return (
    <div className="card-news">
      <div className="img-contain">
        <Link to={`/${item.category}/${item.id}`}>
          <img src={item.urlToImage ? item.urlToImage : window.location.origin + "/default.svg"} alt="img" />
        </Link>
      </div>
      <div className="card-content">
        <Link to={`/${item.category}/${item.id}`} className="card-title">
          {item.title.slice(0, 65)}
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
