import React from 'react';
import faker from 'faker';

import styles from '../Dash.styles';
import settingsIcon from './images/settings.svg';

const UserInfo = () => {
  const {
    gear,
    gearBox,
    userImage,
    statusNum,
    statusNumBox,
    buttons,
    activityButton,
    membershipButton,
  } = styles.profileCard;

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
      <div>Emily.Hunter</div>
      <div>TRIAL</div>
      <div style={statusNum}>
        <div style={statusNumBox}>
          <div>FOLLOWERS</div>
          <div>
            <span style={{ fontSize: 25 }}>83k</span>
          </div>
        </div>
        <div style={statusNumBox}>
          <div>POSTS</div>
          <div>
            <span style={{ fontSize: 25 }}>2k</span>
          </div>
        </div>
        <div style={statusNumBox}>
          <div>FOLLOWING</div>
          <div>
            <span style={{ fontSize: 25 }}>1.3k</span>
          </div>
        </div>
      </div>

      <div style={buttons}>
        <button type="button" style={activityButton}>
          Start Activity
        </button>
      </div>
      <div style={buttons}>
        <button type="button" style={membershipButton}>
          <span style={{ textDecoration: 'line-through' }}>$12/mo</span>
          <span style={{ fontSize: 20 }}>&nbsp;&nbsp;$6/mo</span>
          <br />
          If you upgrade in 00:59:00
        </button>
      </div>
      <hr
        style={{
          backgroundColor: '#ECEEF2',
          border: '0',
          width: '95%',
          height: '.5px',
        }}
      />
    </div>
  );
};
export default UserInfo;
