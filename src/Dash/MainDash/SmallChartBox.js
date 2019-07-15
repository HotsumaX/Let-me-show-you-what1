/* eslint-disable react/prop-types */
import React from 'react';

import Uarrow from './images/right-arrow.svg';

const SmallChartBox = ({ title, value, type }) => {
  return (
    <div
      style={{
        border: '1px green solid',
        height: 80,
        width: 275,
        borderRadius: 5,
        boxShadow: '0px 10px 26px -12px rgba(0,0,0,0.75)',
      }}
    >
      {title} <img src={Uarrow} alt="trend arrow up" style={{ height: 15 }} />
      <div style={{ display: 'flex' }}>
        <div style={{ fontSize: 30 }}>
          {value}
          {type === 'number' ? 'k' : '%'}
        </div>
        <div>chart</div>
      </div>
    </div>
  );
};
export default SmallChartBox;
