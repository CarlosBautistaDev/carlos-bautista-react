import React from "react";
import { ChartEvoStyled, Title } from "../styled-components/chartEvo.styles";
import { FlexLine } from "../styled-components/container.styles";

const ChartEvo = ({ data }) => {
  const chartData = {
    chart: {
      id: "apexchart-example",
      foreColor: "#3c3c3c",
      type: "line",
    },
    grid: {
      row: {
        colors: ["#dedede", "#fff"],
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => {
          return "$" + value;
        },
      },
    },
    colors: ["#D6215B", "#7530B2", "#FFB448"],
    xaxis: {
      tickPlacement: "between",
      categories: [
        "",
        "sep 1",
        "sep 2",
        "sep 3",
        "sep 4",
        "sep 5",
        "sep 6",
        "sep 7",
        "sep 8",
        "sep 9",
      ],
      axisTicks: {
        show: false,
      },
    },
    legend: {
      // position: '',
      width: 700,
      // position: 'top',
    },
    stroke: {
      curve: "smooth",
    },
    series: data,
    // control load
    noData: {
      text: "Loading...",
    },
  };
  return (
    <FlexLine>
      <Title>Price Evolution</Title>
      {data !== undefined ? (
        <ChartEvoStyled
          options={chartData}
          series={chartData.series}
          height="400"
        ></ChartEvoStyled>
      ) : (
        ""
      )}
    </FlexLine>
  );
};

export default ChartEvo;
