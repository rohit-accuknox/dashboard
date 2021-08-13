import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const Donut = () => {
  const [options, setOptions] = useState({
      labels:['Apple', 'Mango', 'Orange', 'Watermelon']
  });

  const [series, setSeries] = useState([
  ]);

  useEffect(() => {
    let categories = [];
    let sales = [];
    axios
      .get("https://6112b33c89c6d00017ac04d9.mockapi.io/fields")
      .then((response) => {
        console.log("res", response);
        response.data.map((item) => {
          console.log("item", item);
          categories.push(item.category);
          sales.push(item.sale);
          return null;
        });
        setOptions({
            labels:categories
        });
        setSeries(sales);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);
  return (
    <div className="donut">
      <Chart options={options} series={series} width={300} type="donut" />
    </div>
  );
};

export default Donut;
