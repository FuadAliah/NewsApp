import React, { useState, useEffect } from "react";
import axios from "axios";
import { DESCRIPTION, CONTENT } from "../../Components/DATA";
import ViewItemLoading from "../ViewItemLoading/ViewItemLoading";

import { FiChevronLeft } from "react-icons/fi";

import "./ViewItem.scss";

import { FiCalendar } from "react-icons/fi";
import { Link } from "react-router-dom";

const ViewItem = (props) => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const { id } = props.match.params;
    const pathname = replaceURL(props.location.pathname);
    const fitchData = async () => {
      const result = await axios(`http://localhost:3000/${pathname}/${id}`);
      setItem(result.data);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };
    fitchData();
  });

  const replaceURL = (ele) => {
    return ele.replace(/[^a-zA-Z ]/g, "");
  };

  const backPage = () => {
    window.history.back();
  };

  function capitalize(str) {
    return str.split("")[0].toUpperCase() + str.slice(1);
  }

  return !isLoading ? (
    <main className="view-item">
      <div className="container">
        <div className="head-item">
          <div className="back-btn" onClick={backPage}>
            <FiChevronLeft className="back-icon" />
            <span>Back</span>
          </div>
          <div className="slide-news-item">
            <img src={item.urlToImage ? item.urlToImage : window.location.origin + "/default.svg"} alt="img" />
            <div className="slide-content-item">
              <div className="slide-data-item">
                <h4 className="slide-title-item">{item.title.slice(0, 80).split("-").join("")}</h4>
                <span className="slide-refrence-item">{item.source.name}</span>
              </div>
            </div>
          </div>
          {/* right */}
        </div>

        <div className="detailed-item">
          <div className="item-info">
            <div className="author-info">
              <span className="author-name">{item.author.toUpperCase().slice(0, 1)}</span>
              <span className="author">
                {item.author}{" "}
                <a href={item.source.link} target="_blank" rel="noopener noreferrer">
                  {item.source.name}
                </a>
              </span>
            </div>
            <div className="date-info">
              <FiCalendar className="icon-item" />
              <span className="date">{item.publishedAt.slice(0, 10)}</span>
            </div>
          </div>

          <div className="content-item">
            <p className="description">{item.description ? item.description : DESCRIPTION}</p>
            <p className="content">{item.content ? item.content : CONTENT}</p>
            <div className="tags">
              <Link to={`/${replaceURL(props.match.url)}`} className="tag">
                {capitalize(replaceURL(props.match.url))}
              </Link>
              <a href={item.source.link} className="tag">
                {item.source.name}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  ) : (
    <ViewItemLoading />
  );
};

export default ViewItem;

/*

*/
