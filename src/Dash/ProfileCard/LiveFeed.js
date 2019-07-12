import React from 'react';

const feed = [
  {
    id: 1,
    name: 'debra_williams',
    status: 'Followed you',
  },
  {
    id: 2,
    name: 'sharon.diaz',
    status: 'Followed you',
  },
  {
    id: 3,
    name: 'michelle.vargas',
    status: 'Followed you',
  },
];

const FeedCard = ({ data }) => {
  return data.map(item => {
    return (
      <div>
        <div>{item.id}</div>
        <div>{item.name}</div>
        <div>{item.status}</div>
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
