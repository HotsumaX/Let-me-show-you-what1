import React from 'react';
import faker from 'faker';

const data = [
  {
    name: 'debra_williams',
    time: 'a min ago',
    tag: 'coffee',
  },
  {
    name: 'olivia_stone',
    time: 'a hour ago',
    tag: 'hot',
  },
  {
    name: 'michelle.vargas',
    time: '6:21pm',
    tag: 'cocoa',
  },
  {
    name: 'sandra.gordon',
    time: '4:32pm',
    tag: 'starbucks',
  },
  {
    name: 'james.doug',
    time: 'yesterday 12:02pm',
    tag: 'getstuffdone',
  },
  {
    name: 'jim_jamason',
    time: 'tuesday 3:30pm',
    tag: 'morningtakeoff',
  },
];

const LatestConversations = () => {
  return (
    <div
      style={{
        border: '1px blue solid',
        width: 275,
        boxShadow: '0px 10px 26px -12px rgba(0,0,0,0.75)',
      }}
    >
      <div
        style={{
          border: '1px red solid',
          height: 50,
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 10,
          boxShadow: '0px 16px 23px -20px rgba(15,31,95,1)',
        }}
      >
        LatestConversations
      </div>
      <div style={{ height: 240, overflowX: 'auto' }}>posts</div>
    </div>
  );
};
export default LatestConversations;
