import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const getRandomExpense = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Chart = () => {
  const expenses = Array.from({ length: 7 }, () => getRandomExpense(0, 50000));
  const augustExpense = 40000;

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Amount of money you spent',
        data: [...expenses, augustExpense],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Your Monthly Expenses',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 78000,
        ticks: {
          callback: function (value) {
            return '₹' + value;
          },
        },
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
