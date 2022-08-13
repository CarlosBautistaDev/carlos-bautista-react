import styled from "styled-components";
import Chart from "react-apexcharts";

export const Title = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 160%;
  color: #011b33;
  background-color: #f0f6ff;
  padding-left: 25px;
  padding-top: 20px;
  `;

export const ChartEvoStyled = styled(Chart)`
  max-width: 100%;
  margin-left: 25px;
  background-color: #fff;
  padding-left: 30px;
  border: 1px solid #E9E9E9;

`;
