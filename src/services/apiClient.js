import axios from "axios";
import { EndPoints } from "../consts/backend";

export const getEvo = async () => {
  try {
    const res = await axios.get(EndPoints.Evolution);
    const sortedEvo = res.data.sort(
      (a, b) => new Date(a.dateExtraction) - new Date(b.dateExtraction)
    );
    let evoFinalSeries = [];
    let arrayTemporal = [];
    for (let i = 0; i < sortedEvo.length; i++) {
      arrayTemporal = evoFinalSeries.filter(
        (resp) => resp["name"] === sortedEvo[i]["name"]
      );
      if (arrayTemporal.length > 0) {
        evoFinalSeries[evoFinalSeries.indexOf(arrayTemporal[0])]["data"].push(
          sortedEvo[i]["price"]
        );
      } else {
        evoFinalSeries.push({
          name: sortedEvo[i]["name"],
          data: [sortedEvo[i]["price"]],
        });
      }
    }
    return evoFinalSeries;
  } catch (error) {
    console.log(error);
  }
};
export const getPrecense = async () => {
  try {
    const res = await axios.get(EndPoints.Presence);
    let pieData = {
      series: [],
      labels: [],
    };
    res.data.forEach((item) => {
      pieData.series.push(item.presenceShare);
    }, 0);
    res.data.forEach((item) => {
      pieData.labels.push(item.name);
    }, 0);
    return pieData;
  } catch (error) {
    console.log(error);
  }
};
export const getTable = async () => {
  try {
    const res = await axios.get(EndPoints.Table);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
