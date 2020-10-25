import React from "react";
import { FiFileText, FiCalendar } from "react-icons/fi";

import "./Card.scss";

function Card({ item }) {
  return (
    <a href={item.url} className="card-news" target="_blank" rel="noopener noreferrer">
      <div className="img-contain">
        <img src={item.urlToImage} alt="img" onError={(e)=>{e.target.onerror = null; e.target.src="./code2.png"}} />
      </div>
      <div className="card-content">
        <h4 className="card-title">{item.title.slice(0, 65)}</h4>
        <div className="card-data">
          <div className="ref">
            <FiFileText className="icon" />
            <span className="card-refrence">{item.source.name}</span>
          </div>
          <div className="ref">
            <FiCalendar className="icon" />
            <span className="card-date">{item.publishedAt.slice(0, 10)}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Card;
