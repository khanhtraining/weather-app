import React, { useEffect, useRef, useState } from "react";
import ReactApexChart from 'react-apexcharts';
import * as d3 from "d3";

export const Graph = () => {
  const series = [
    {
      name: "Sunset",
      data: [
        555,
        1500000,
        69030,
        88369,
        167466,
        932638,
        2055423,
        3343777,
        3845718,
        555,
        1500000,
        69030,
        88369,
        167466,
        932638,
        2055423,
        3343777,
        3845718,
        1500000,
        69030,
        88369,
        167466,
        88369,
        167466,
        932638,
      ],
    },
  ];
  const options = {
    dataLabels: {
      enabled: false,
       colors: ['#F44336', '#E91E63', '#9C27B0'],
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "hour",
      categories: [
        "12PM",
        "1AM",
        "2AM",
        "3AM",
        "4AM",
        "5AM",
        "6AM",
        "7AM",
        "8AM",
        "9AM",
        "10AM",
        "11AM",
        "12AM",
        "1PM",
        "2PM",
        "3PM",
        "4PM",
        "5PM",
        "6PM",
        "7PM",
        "8PM",
        "9PM",
        "10PM",
        "11PM",
        "12PM",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        textAlign: "center",
      }}
    >
      <br />
      <h2>DAY 1</h2>
      <br />
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
        width = {5000}
      />
      
      <br />
    </div>
  );
}

export default Graph;
