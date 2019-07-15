import React from 'react';

import SmallChartBox from './SmallChartBox';

const data = {
  title: 'TOTAL FOLLOWERS',
  value: 230,
  type: 'number',
  options: {
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
    elements: {
      point: {
        radius: 0,
      },
    },
  },
  data2: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
      {
        label: 'First Dataset',
        data: [0, 10, 17, 21, 28, 22, 33],
        fill: true,
        backgroundColor: 'rgba(32, 162, 219, 0.2)',
        borderColor: '#42A5F5',
      },
    ],
  },
};

const TotalFollowers = () => {
  return (
    <div>
      <SmallChartBox {...data} />
    </div>
  );
};
export default TotalFollowers;
