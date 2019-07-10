import React from 'react';
import HomeBar from './HomeBar';

const ProfileCard = () => {
  return <div>ProfileCard</div>;
};

const MainDash = () => {
  return <div>MainDash</div>;
};

const Dash = () => {
  return (
    <div>
      <HomeBar />
      <div style={{ display: 'flex' }}>
        <ProfileCard />
        <MainDash />
      </div>
    </div>
  );
};

export default Dash;
