import React from 'react';
import { Chart } from 'react-google-charts';

export const data = [
  ['Year', 'Sales', 'Expenses', 'Profit'],
  ['2019', 1190, 817, 800],
  ['2020', 1170, 460, 250],
  ['2021', 660, 1120, 300],
  ['2022', 1030, 540, 350],
  ['2023', 1526, 1517, 1567],
];

export const options = {
  chart: {
    title: 'Company Performance',
    subtitle: 'Sales, Expenses and profits:2019-2023',
  },
  colors: ['rgb(53,138,148)', 'rgb(40,34,70)'],
};

export default function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="350px"
      data={data}
      options={options}
    />
  );
}
