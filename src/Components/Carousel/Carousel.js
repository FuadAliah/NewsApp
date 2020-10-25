import React, { useState, useEffect } from "react";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

import Slider from "react-slick";
// /public/data/business.json
// http://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=651f195e5650444aaab38d149cb91c72

const Carousel = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fitchData = async () => {
      const result = await axios("http://localhost:3000/news");
      setData(result.data);
    };
    fitchData();
  });

  const dataCarousel = data.map((item) => (
    <a href={item.url} className="slide-news" target="_blank" rel="noopener noreferrer" key={item.url}>
      <img src={item.urlToImage} alt="img" />
      <div className="slide-content">
        <div className="slide-data">
          <span className={item.category + " slide-category"}>{item.category.toUpperCase()}</span>
          <h4 className="slide-title">{item.title.slice(0, 80).split("-").join("")}</h4>
          <span className="slide-refrence">{item.source.name}</span>
        </div>
      </div>
    </a>
  ));

  return (
    <Slider
      dots={true}
      arrows={false}
      slidesToShow={1}
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={9000}
      draggable={false}
      adaptiveHeight={true}
      speed={1000}>
      {dataCarousel}
    </Slider>
  );
};

export default Carousel;
