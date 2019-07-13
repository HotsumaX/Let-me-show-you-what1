import React from 'react';
import HomeBar from './HomeBar';
import ProfileCard from './ProfileCard/ProfileCard';
import MainDash from './MainDash';

const Dash = () => {
  return (
    <div style={{ height: '90em' }}>
      <HomeBar />
      <div style={{ display: 'flex' }}>
        <ProfileCard />
        <MainDash />
      </div>
    </div>
  );
};

export default Dash;
