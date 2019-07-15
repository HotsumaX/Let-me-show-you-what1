import React from 'react';

import { Chart } from 'primereact/chart';

const data = {
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
};

const options = {
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
  },
};

const ActionsChart = () => {
  return (
    <div
      style={{
        width: 275,
        height: 320,
        borderRadius: 5,
        boxShadow: '0px 10px 26px -12px rgba(0,0,0,0.75)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <div style={{ color: 'gray', marginLeft: 20 }}>Actions</div>
      <div>
        <Chart type="line" data={data} options={options} height="250" />
      </div>
    </div>
  );
};
export default ActionsChart;
