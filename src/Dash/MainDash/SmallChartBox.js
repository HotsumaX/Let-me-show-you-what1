import React from 'react';

import Uarrow from './images/right-arrow.svg';

const SmallChartBox = ({ title, value, type }) => {
  return (
    <div style={{ border: '1px green solid', height: 80 }}>
      {title} <img src={Uarrow} alt="trend arrow up" style={{ height: 20 }} />
      <div style={{ fontSize: 30 }}>
        {value}
        {type === 'number' ? 'k' : '%'}
      </div>
    </div>
  );
};
export default SmallChartBox;
