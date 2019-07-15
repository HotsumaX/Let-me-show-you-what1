import React from 'react';

import flower from './images/flower.svg';
import styles from './Dash.styles';

const HomeBar = () => {
  const { homeBar, icon, homeButton } = styles.homeBarMain;
  return (
    <div style={homeBar}>
      <img src={flower} alt="logo" style={icon} />
      <div style={homeButton}>Home</div>
      <div style={homeButton}>Referral</div>
      <div style={homeButton}>Profile</div>
      <div style={homeButton}>Help</div>
    </div>
  );
};

export default HomeBar;
