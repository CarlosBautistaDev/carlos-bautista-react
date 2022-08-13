import React from "react";
import {
  ChartPrecenseStyled,
  Title,
} from "../styled-components/chartPrecense.styles";
import { FlexPie } from "../styled-components/container.styles";

const ChartPrecense = ({ data }) => {
  const chartData = {
    series: data.series,
    chart: {
      width: 380,
      type: "pie",
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: "right",
      floating: false,
      fontSize: "14px",
      fontFamily: "Montserrat, Arial",
      fontWeight: 400,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 0,
      offsetY: 60,
      labels: {
        colors: undefined,
        useSeriesColors: false,
      },

      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 3,
      },
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },
    labels: data.labels,
    // control load
    noData: {
      text: "Loading...",
    },
  };
  return (
    <FlexPie>
      <Title>Price Evolution</Title>
      <ChartPrecenseStyled
        options={chartData}
        series={chartData.series}
        labels={chartData.labels}
        type="pie"
      ></ChartPrecenseStyled>
    </FlexPie>
  );
};

export default ChartPrecense;
