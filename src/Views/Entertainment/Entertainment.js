import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import axios from "axios";
import "./Entertainment.scss";

const Entertainment = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fitchData = async () => {
      const result = await axios("http://localhost:3000/Entertainment");
      setData(result.data);
      setIsLoading(false);
    };
    fitchData();
  });
  return (
    <section className="entertainment-section">
      <div className="container">
        {!isLoading ? (
          <div className="grid-contain">
            {data.map((item) => (
              <Card item={item} key={item.url} />
            ))}
          </div>
        ) : (
          <div className="loading">loading...</div>
        )}
      </div>
    </section>
  );
};

export default Entertainment;
