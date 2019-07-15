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
    {
      tag: '#morningpickmeup',
      value: 30,
    },
    {
      tag: '#gogojuice',
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
          height: 50,
          alignItems: 'center',
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
    <div
      style={{
        width: 275,
        minHeight: 50,
        boxShadow: '0px 10px 26px -12px rgba(0,0,0,0.75)',
        borderRadius: 10,
      }}
    >
      <div
        style={{
          height: 50,
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 10,
          boxShadow: '0px 16px 23px -20px rgba(15,31,95,1)',
          color: 'gray',
        }}
      >
        {data.title}
      </div>
      <div
        style={{
          overflowX: 'auto',
          height: 240,
        }}
      >
        <DataList {...data} />
      </div>
    </div>
  );
};
export default SourcePerformance;
