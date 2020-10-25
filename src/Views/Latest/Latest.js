import React, { useEffect, useState } from "react";
import FullCard from "../../Components/FullCard/FullCard";
import Carousel from "../../Components/Carousel/Carousel";
import axios from "axios";
import "./Latest.css";

const Latest = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fitchData = async () => {
      const result = await axios("http://localhost:3000/breaking");
      setData(result.data);
      setIsLoading(false);
    };
    fitchData();
  });
  return (
    <section className="latest-news">
      <div className="container">
        {!isLoading ? (
          <div className="grid-contain">
            <div className="grid">
              {data.map((item) => (
                <FullCard item={item} key={item.url} />
              ))}
            </div>
            <div className="carousel">
              <Carousel data={data} />
            </div>
          </div>
        ) : (
          <div className="loading">loading...</div>
        )}
      </div>
    </section>
  );
};

export default Latest;
