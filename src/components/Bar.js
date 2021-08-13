import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const Bar = () => {
  const [options, setOptions] = useState({
    charts: {
      type: "bar",
    },
    xaxis: {
      categories: [],
    },
    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: true,
      followCursor: false,
      intersect: false,
      inverseOrder: false,
      custom: undefined,
      fillSeriesColor: false,
      theme: false,
      style: {
        fontSize: '12px',
        fontFamily: undefined
      },
      onDatasetHover: {
          highlightDataSeries: false,
      },
      x: {
          show: true,
          format: 'dd MMM',
          formatter: undefined,
      },
      y: {
          formatter: undefined,
          title: {
              formatter: (seriesName) => seriesName,
          },
      },
      z: {
          formatter: undefined,
          title: 'Size: '
      },
      marker: {
          show: true,
      },
      items: {
         display: "flex",
      },
      fixed: {
          enabled: false,
          position: 'topRight',
          offsetX: 0,
          offsetY: 0,
      },
  }
  });
  const [series, setSeries] = useState([
    {
      name: "search",
      data: [],
    },
  ]);

  useEffect(() => {
    const year = [];
    const count = [];
    axios
      .get("https://6112b33c89c6d00017ac04d9.mockapi.io/Search")
      .then((response) => {
        console.log("response", response);
        response.data.map((item) => {
          year.push(item.year);
          count.push(item.count);
          return null;
        });
        setOptions({
          chart: {
            type: "bar",
          },
          xaxis: {
            categories: year,
          },
        });
        setSeries([
          {
            name: "search",
            data: count,
          },
        ]);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);

  return (
    <div span={8} id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={200}
        width={300}
      />
    </div>
  );
};

export default Bar;
