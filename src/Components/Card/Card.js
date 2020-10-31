import React from "react";
import { FiFileText, FiCalendar, FiBookmark } from "react-icons/fi";

import "./Card.scss";

function Card({ item }) {
  return (
    <div className="card-news">
      <div className="img-contain">
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <img src={item.urlToImage ? item.urlToImage : window.location.origin + "/default.svg"} alt="img" />
        </a>
      </div>
      <div className="card-content">
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="card-title">
          {item.title.slice(0, 65)}
        </a>
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
