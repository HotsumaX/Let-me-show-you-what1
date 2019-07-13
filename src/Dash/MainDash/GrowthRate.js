import React from 'react';

import SmallChartBox from './SmallChartBox';

const data = {
  title: 'GROWTH RATE',
  value: 41,
  type: 'percent',
};

const GrowthRate = () => {
  return (
    <div>
      <SmallChartBox {...data} />
    </div>
  );
};
export default GrowthRate;
