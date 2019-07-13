import React from 'react';
import faker from 'faker';

import plusButton from './images/add-square-button.svg';

const feed = [
  {
    id: 1,
    name: 'debra_williams',
    status: 'Followed you',
    avatar: `${faker.image.avatar()}?random=${Date.now() + 5}`,
  },
  {
    id: 2,
    name: 'sharon.diaz',
    status: 'Followed you',
    avatar: `${faker.image.avatar()}?random=${Date.now() + 11}`,
  },
  {
    id: 3,
    name: 'michelle.vargas',
    status: 'Followed you',
    avatar: `${faker.image.avatar()}?random=${Date.now() + 12}`,
  },
];

const FeedCard = ({ data }) => {
  return data.map(item => {
    return (
      <div>
        <div style={{ border: '1px lightblue solid', borderRadius: '50%' }}>
          <img src={item.avatar} alt="avatar" style={{ borderRadius: '50%' }} />
        </div>
        <div>{item.id}</div>
        <div>{item.name}</div>
        <div>{item.status}</div>
        <div>
          <img src={plusButton} alt="add user" style={{ height: 10 }} />
        </div>
      </div>
    );
  });
};

const LiveFeed = () => {
  return (
    <div>
      Live Feed
      <div>enter the personal card {feed[0].name}</div>
      <FeedCard data={feed} />
    </div>
  );
};
export default LiveFeed;
