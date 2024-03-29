import React from "react";
import styles from "./Chart.module.css";
import { Line } from "react-chartjs-2";

import { useSelector } from "react-redux";
import { selectDaily } from "../covidSlice";

const Chart: React.FC = () => {
  const daily = useSelector(selectDaily);
  const dates = daily.map(({ Date }) => Date);

  const lineChart = daily[0] && (
    <Line
      data={{
        labels: dates.map((date) => new Date(date).toDateString()),

        datasets: [
          {
            data: daily.map((data) => data.Confirmed),
            label: "感染者数",
            borderColor: "#3333ff",
            showLine: false,
          },
          {
            data: daily.map((data) => data.Recovered),
            label: "回復者数",
            borderColor: "green",
            showLine: false,
          },
          {
            data: daily.map((data) => data.Deaths),
            label: "死亡者数",
            borderColor: "#ff3370",
            showLine: false,
          },
        ],
      }}
    />
  );

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
