import React from 'react';

import styles from '../Dash.styles';
import UserInfo from './UserInfo';
import Actions from './Actions';
import LiveFeed from './LiveFeed';

const ProfileCard = () => {
  const { main } = styles.profileCard;

  return (
    <div style={main}>
      <UserInfo />
      <Actions />
      <LiveFeed />
    </div>
  );
};

export default ProfileCard;
