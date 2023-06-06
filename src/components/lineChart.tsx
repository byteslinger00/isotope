import React from "react";
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
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
        stepSize: 50,
      },
    },
    y: {
      grid: {
        display: false,
        beginAtZero: true,
      },
      min: 0,
      max: 1.1,

      ticks: {
        // forces step size to be 50 units
        display: false,
        stepSize: 100,
      },
    },
  },
};

const labels = ["1", "2", "3", "4", "5", "6"];

const data1 = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [0.1, 0.3, 0.4, 0.6, 0.9, 1],
      borderColor: "#FBBC05",
      backgroundColor: "#FBBC05",
    },
  ],
};
interface props {
  data: any;
}
export const LineChart: React.FC<props> = ({ data }) => {
  return <Line options={options} data={{ labels: labels, datasets: data }} />;
};
export default LineChart;
