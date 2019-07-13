import React from 'react';

import SmallChartBox from './SmallChartBox';

const data = {
  title: 'ENGAGEMENT',
  value: 60,
  type: 'percent',
};

const Engagement = () => {
  return (
    <div>
      <SmallChartBox {...data} />
    </div>
  );
};
export default Engagement;
