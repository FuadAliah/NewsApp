import React from "react";

import "./Bookmarks.scss";

const Bookmarks = (props) => {
    console.log(props);
  return (
    <div className="bookmarks">
      <div className="container">
        <div className="content">
          <span className="page-title">Your Saved Items</span>
          <a href="#f" className="dalete-btn">
            Delete All
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
