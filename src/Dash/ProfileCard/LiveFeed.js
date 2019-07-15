/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import faker from 'faker';

import plusButton from './images/add-square-button.svg';
import styles from '../Dash.styles';

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
  const { feedCardMain, imageBorder } = styles.FeedCard;

  return data.map(item => {
    return (
      <div style={feedCardMain}>
        <div style={imageBorder}>
          <img
            src={item.avatar}
            alt="avatar"
            style={{ borderRadius: '50%', height: 40 }}
          />
        </div>
        <div style={{ marginLeft: 10 }}>
          <div>{item.name}</div>
          <div style={{ color: 'gray' }}>{item.status}</div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: '70%',
            width: 50,
          }}
        >
          <img
            src={plusButton}
            alt="add user"
            style={{ height: 15 }}
            onClick={() =>
              window.alert(`User ${item.name} has been added to your account`)
            }
          />
        </div>
      </div>
    );
  });
};

const LiveFeed = () => {
  const { liveFeedMain } = styles.LiveFeed;
  return (
    <div style={liveFeedMain}>
      <span style={{ marginBottom: 20, color: 'gray' }}>Live Feed</span>
      <FeedCard data={feed} />
    </div>
  );
};
export default LiveFeed;
