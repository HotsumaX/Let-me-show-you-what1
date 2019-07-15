import React from 'react';
import HomeBar from './HomeBar';
import ProfileCard from './ProfileCard/ProfileCard';
import MainDash from './MainDash';

const Dash = () => {
  return (
    <div
      style={{
        height: '90em',
        width: '80em',
        margin: '0 auto',
      }}
    >
      <HomeBar />
      <div style={{ display: 'flex', paddingTop: 30, paddingLeft: 20 }}>
        <ProfileCard />
        <MainDash />
      </div>
    </div>
  );
};

export default Dash;
