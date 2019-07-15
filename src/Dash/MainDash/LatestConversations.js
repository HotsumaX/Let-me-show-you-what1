import React from 'react';
import faker from 'faker';

const posts = [
  {
    name: 'debra_williams',
    time: 'a min ago',
    tag: 'coffee',
    avatar: `${faker.image.avatar()}?random=${Date.now() + 5}`,
  },
  {
    name: 'olivia_stone',
    time: 'a hour ago',
    tag: 'hot',
    avatar: `${faker.image.avatar()}?random=${Date.now() + 10}`,
  },
  {
    name: 'michelle.vargas',
    time: '6:21pm',
    tag: 'cocoa',
    avatar: `${faker.image.avatar()}?random=${Date.now() + 15}`,
  },
  {
    name: 'sandra.gordon',
    time: '4:32pm',
    tag: 'starbucks',
    avatar: `${faker.image.avatar()}?random=${Date.now() + 20}`,
  },
  {
    name: 'james.doug',
    time: 'wed 12:02pm',
    tag: 'getstuffdone',
    avatar: `${faker.image.avatar()}?random=${Date.now() + 25}`,
  },
  {
    name: 'jim_jamason',
    time: 'tues 3:30pm',
    tag: 'morningtakeoff',
    avatar: `${faker.image.avatar()}?random=${Date.now() + 30}`,
  },
];

const Posts = ({ data }) => {
  return data.map(item => {
    return (
      <div
        style={{
          display: 'flex',
          height: 60,
          alignItems: 'center',
          marginLeft: 10,
        }}
      >
        <img
          src={item.avatar}
          alt="avatar"
          style={{ height: 30, borderRadius: 50 }}
        />
        <div style={{ marginLeft: 10 }}>
          <div>{item.name}</div>
          <div style={{ display: 'flex' }}>
            <div style={{ color: 'gray' }}>{item.time}</div>
            <div style={{ marginLeft: 10, color: '#18A4E4' }}>#{item.tag}</div>
          </div>
        </div>
      </div>
    );
  });
};

const LatestConversations = () => {
  return (
    <div
      style={{
        width: 275,
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
        Latest Conversations
      </div>
      <div style={{ height: 240, overflowX: 'auto' }}>
        <Posts data={posts} />
      </div>
    </div>
  );
};
export default LatestConversations;
