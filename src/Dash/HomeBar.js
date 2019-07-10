import React from 'react';

import flower from './images/flower.svg';
import styles from './Styles.Dash';

const HomeBar = () => {
  const { homeBar, icon, homeButton } = styles.homeBarMain;
  return (
    <div style={homeBar}>
      <img src={flower} alt="logo" style={icon} />
      <div style={homeButton}>home</div>
      <div style={homeButton}>referral</div>
      <div style={homeButton}>profile</div>
      <div style={homeButton}>help</div>
    </div>
  );
};

export default HomeBar;
