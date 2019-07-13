import React from 'react';

const data1 = {
  title: 'Total Followers',
  value: 230,
  type: 'number',
};

const TotalFollowers = () => {
  return (
    <div style={{ border: '1px green solid', height: 80 }}>{data1.title}</div>
  );
};
export default TotalFollowers;
