"use client";
import React from "react";

// Chartjs
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend );

export default function BarChart({bgColor, label}: {bgColor: string, label: string}) {
  
  const labels = ["January", "February", "March", "April", "May", "June", "July"];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
        labels : {
          font: {
            family: "Poppins, sans-serif"
          }
        }
      },
      title: {
        display: true,
        text: "Total Cases",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: label,
        data: [140, 200, 100, 98, 134, 340, 240],
        backgroundColor: bgColor,
      },
    ],
  };

  return <Bar role="img" aria-label={label} style={{ width: '100% !important', height: 'auto !important', aspectRatio: '16/9', fontFamily: 'Poppins !important' }} options={options} data={data} />;
}
