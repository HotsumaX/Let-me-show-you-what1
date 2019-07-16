/* eslint-disable react/prop-types */
import React from 'react';
import { Chart } from 'primereact/chart';

import Uarrow from './images/right-arrow.svg';

const SmallChartBox = ({ title, value, type, options, data2 }) => {
  return (
    <div
      style={{
        height: 125,
        width: 300,
        borderRadius: 5,
        boxShadow: '0px 10px 26px -12px rgba(0,0,0,0.75)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div style={{ marginLeft: 10, color: 'gray' }}>
        {title} <img src={Uarrow} alt="trend arrow up" style={{ height: 14 }} />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-end',
        }}
      >
        <div style={{ fontSize: 40 }}>
          {value}
          {type === 'number' ? 'k' : '%'}
        </div>
        <div>
          <Chart type="line" options={options} data={data2} width="140" />
        </div>
      </div>
    </div>
  );
};
export default SmallChartBox;
