import React from 'react';

import SmallChartBox from './SmallChartBox';

const data = {
  title: 'ENGAGEMENT',
  value: 60,
  type: 'percent',
  options: {
    elements: {
      point: {
        radius: 0,
      },
    },
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          display: false, // this will remove all the x-axis grid lines
        },
      ],
      xAxes: [
        {
          display: false, // this will remove all the x-axis grid lines
        },
      ],
    },
  },
  data2: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
      {
        label: 'First Dataset',
        data: [0, 10, 17, 21, 28, 22, 33],
        fill: true,
        backgroundColor: 'RGBA(231, 229, 255, .70)',
        borderColor: 'RGBA(154, 145, 228, 1.00)',
      },
    ],
  },
};

const Engagement = () => {
  return (
    <div>
      <SmallChartBox {...data} />
    </div>
  );
};
export default Engagement;
