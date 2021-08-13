import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const Sales = () => {
  const [options, setOptions] = useState({
    charts: {
      type: "line",
    },
    xaxis: {
      categories: [],
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 2,
      dashArray: 0,      
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
      name: "Visitors",
      data: [],
    },
  ]);

  useEffect(() => {
    const days = [];
    const visit = [];
    axios
      .get("https://6112b33c89c6d00017ac04d9.mockapi.io/visitor")
      .then((response) => {
        console.log("response", response);
        response.data.map((item) => {
          days.push(item.days);
          visit.push(item.visit);
          return null;
        });
        setOptions({
          chart: {
            type: "line",
          },
          xaxis: {
            categories: days,
          },
        });
        setSeries([
          {
            name: "Visitors",
            data: visit,
          },
        ]);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);

  return (
    <div span={10} id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={160}
        width={230}
      />
    </div>
  );
};

export default Sales;
