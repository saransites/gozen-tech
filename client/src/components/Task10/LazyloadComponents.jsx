import React, { useEffect, useState } from "react";
import axios from "axios";

const LazyloadComponents = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Row = ({ index }) => {
    const image = data[index]?.image;
    return (
      <div className="p-2">
        <picture className="w-32 h-32">
          <img
            src={image}
            alt={`Product ${index}`}
            onError={(e) =>
              (e.currentTarget.src =
                "https://www.shutterstock.com/shutterstock/photos/722839600/display_1500/stock-vector-photo-coming-soon-picture-frame-vector-illustration-722839600.jpg")
            }
            className="w-full h-full object-cover"
          />
        </picture>
      </div>
    );
  };

  return (
    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {data.length > 0 &&
        data.map((_, index) => <Row key={index} index={index} />)}
    </div>
  );
};

export default LazyloadComponents;
