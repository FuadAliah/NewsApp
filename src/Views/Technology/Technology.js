import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import CardLoading from "../../Components/CardLoading/CardLoading";
import axios from "axios";
import "./Technology.scss";

const Technology = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fitchData = async () => {
      const result = await axios("http://localhost:3000/Technology");
      setData(result.data);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };
    fitchData();
  });
  return (
    <section className="technology-section">
      <div className="container">
        {!isLoading ? (
          <div className="grid-contain">
            {data.map((item) => (
              <Card item={item} key={item.url} />
            ))}
          </div>
        ) : (
          <div className="grid-contain">
            {data.map((item) => (
              <CardLoading item={item} key={item.url} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Technology;
