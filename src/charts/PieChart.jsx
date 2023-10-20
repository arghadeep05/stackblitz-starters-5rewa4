import React from 'react';
import { Chart } from 'react-google-charts';

export const data = [
  ['Country', 'Population'],
  ['Germany', 2.31],
  ['United States', 4.34],
  ['Brazil', 2.81],
  ['Canada', 1.31],
  ['France', 1.23],
  ['RU', 1.91],
  ['India', 17.87],
  ['China', 18.46],
];

export const options = {
  title: 'Population index',
};

export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={'100%'}
      height={'270px'}
    />
  );
}
