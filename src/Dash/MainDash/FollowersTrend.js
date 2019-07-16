import React from 'react';
import { Chart } from 'primereact/chart';

const data = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      label: 'First Dataset',
      data: [0, 12, 30, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(32, 162, 219, 0.07)',
      borderColor: '#42A5F5',
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

const FollowersTrend = () => {
  return (
    <div
      style={{
        height: 320,
        width: 625,
        borderRadius: 5,
        boxShadow: '0px 10px 26px -12px rgba(0,0,0,0.75)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <div style={{ marginLeft: 20, color: 'gray' }}>Followers</div>

      <div>
        <Chart type="line" data={data} options={options} height="120" />
      </div>
    </div>
  );
};
export default FollowersTrend;
