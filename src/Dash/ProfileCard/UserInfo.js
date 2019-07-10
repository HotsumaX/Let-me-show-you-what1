import React from 'react';
import faker from 'faker';

import styles from '../Dash.styles';
import settingsIcon from './images/settings.svg';

const UserInfo = () => {
  const { gear, gearBox, userImage } = styles.porfileCard;

  return (
    <div>
      <div style={gearBox}>
        <img src={settingsIcon} alt="settings button" style={gear} />
      </div>
      <div style={userImage}>
        <img
          src={faker.image.avatar()}
          alt="user avatar"
          style={{ height: 60, borderRadius: '50%' }}
        />
      </div>
      <div>user name</div>
      <div>mebership status pill</div>
      <div>followers number</div>
      <div>posts count</div>
      <div>following count</div>
      <div>start activity button</div>
      <div>cheaper membership button</div>
      <hr />
    </div>
  );
};
export default UserInfo;
