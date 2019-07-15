import React from 'react';

import SmallChartBox from './SmallChartBox';

const data = {
  title: 'GROWTH RATE',
  value: 41,
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
        backgroundColor: 'RGBA(255, 250, 238, 0.50)',
        borderColor: 'RGBA(233, 208, 109, 1.00)',
      },
    ],
  },
};

const GrowthRate = () => {
  return (
    <div>
      <SmallChartBox {...data} />
    </div>
  );
};
export default GrowthRate;
