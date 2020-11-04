import React from "react";

import "./ViewItemLoading.scss";

const ViewItemLoading = () => {
  return (
    <main className="view-item-loading">
      <div className="container">
        <div className="head-item">
          <div className="slide-news-item">
            <div className="img"></div>
            <div className="slide-content-item">
              <div className="slide-data-item">
                <span className="slide-title-item-loading"></span>
                <span className="slide-refrence-item-loading"></span>
              </div>
            </div>
          </div>
          {/* right Contenet */}
        </div>

        <div className="detailed-item">
          <div className="item-info">
            <div className="author-info">
              <span className="author-name-loading"></span>
              <span className="author-loading"></span>
            </div>
            <div className="date-info">
              <span className="date-loading"></span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ViewItemLoading;

/*

*/
