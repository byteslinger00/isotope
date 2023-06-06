import React from "react";
import { ChartOptions } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend
);

const options: ChartOptions<"bubble"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      text: "Top 3 Locations",
      display: true,
      align: "start",
      color: "#000000",
      font: {
        size: 20,
        weight: "bold",
      },
    },
    legend: {
      display: true,
      position: "right",

      labels: {
        font: {
          size: 16,
          family: "Inter",
        },
        color: "#000000",
        boxWidth: 15,
        useBorderRadius: true,
        borderRadius: 7,
      },
    },
  },
  scales: {
    x: {
      max: 2,
      type: "linear",
      grace: "5%",
      grid: {
        display: false,
      },
      ticks: {
        display: false,
        // stepSize: 50,
      },
      display: false,
    },
    y: {
      display: false,
      type: "linear",
      grace: "5%",
      grid: {
        display: false,
        // beginAtZero: true,
      },
      //   min: 0,
      max: 0.5,
      ticks: {
        // forces step size to be 50 units
        display: false,
      },
    },
  },
};

const labels = ["USA", "Australia", "England"];

interface props {
  data: any;
}
export const BubbleChart: React.FC<props> = ({ data }) => {
  return <Bubble options={options} data={{ labels: labels, datasets: data }} />;
};
export default BubbleChart;
