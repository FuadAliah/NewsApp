import React from "react";
import "./FullCard.scss";

function FullCard({ item }) {
  return (
    <a href={item.url} className="news" target="_blank" rel="noopener noreferrer">
      <img src={item.urlToImage} alt="img" />
      <div className="content">
        <div className="data">
          <span className={item.category + " category"}>{item.category.toUpperCase()}</span>
          <h4 className="title">{item.title.slice(0, 80)}</h4>
          <span className="refrence">{item.source.name}</span>
        </div>
      </div>
    </a>
  );
}

export default FullCard;
