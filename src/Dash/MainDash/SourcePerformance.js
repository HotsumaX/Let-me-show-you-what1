import React from 'react';

const data = {
  title: 'Source Performance',
  info: [
    {
      tag: '#coffee',
      value: 12,
    },
    {
      tag: '#starBucks',
      value: 9,
    },
    {
      tag: '#instacoffee',
      value: 80,
    },
    {
      tag: '#waiting',
      value: 2,
    },
    {
      tag: '#kickstart',
      value: 30,
    },
  ],
};

const DataList = ({ info }) => {
  return info.map(item => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '90%',
          paddingLeft: 10,
        }}
      >
        <div>{item.tag}</div>
        <div>{item.value}</div>
      </div>
    );
  });
};

const SourcePerformance = () => {
  return (
    <div style={{ border: '1px red solid', width: 260, minHeight: 50 }}>
      <div style={{ border: '1px blue solid' }}>{data.title}</div>
      <div>
        <DataList {...data} />
      </div>
    </div>
  );
};
export default SourcePerformance;
