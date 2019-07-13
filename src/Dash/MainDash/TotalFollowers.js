import React from 'react';

import SmallChartBox from './SmallChartBox';

const data = {
  title: 'Total Followers',
  value: 230,
  type: 'number',
};

const TotalFollowers = () => {
  return (
    <div>
      <SmallChartBox {...data} />
    </div>
  );
};
export default TotalFollowers;
