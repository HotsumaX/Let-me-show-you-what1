import React from 'react';
import faker from 'faker';

import styles from '../Dash.styles';
import settingsIcon from './images/settings.svg';
import power from './images/flash-black-circular-interface-button.svg';
import play from './images/music-player-play.svg';
import larrow from './images/left-chevron.svg';
import uarrow from './images/right-arrow.svg';

const UserInfo = () => {
  const {
    gear,
    gearBox,
    userImage,
    statusNum,
    statusNumBox,
    statusTitle,
    statusItem,
    buttons,
    activityButton,
    hrbreak,
    membershipButton,
  } = styles.profileCard;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={gearBox}>
          <img src={larrow} alt="left arrow" style={gear} />
          <img src={settingsIcon} alt="settings button" style={gear} />
        </div>
      </div>

      <div style={userImage}>
        <div
          style={{
            border: '1px orange solid',
            borderRadius: '50%',
            height: 65,
            width: 65,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={faker.image.avatar()}
            alt="user avatar"
            style={{
              height: 60,
              borderRadius: '50%',
            }}
          />
        </div>
        <img
          src={power}
          alt="super user"
          style={{
            height: 25,
            marginLeft: -13,
            marginTop: 3,
            backgroundColor: 'white',
            borderRadius: '50%',
          }}
        />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}
      >
        Emily.Hunter
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px black solid',
            borderRadius: 50,
            height: 20,
            width: 50,
            fontSize: 12,
            marginBottom: 10,
          }}
        >
          TRIAL
        </div>
      </div>

      <div style={statusNum}>
        <div style={statusNumBox}>
          <div>
            <span style={statusTitle}>FOLLOWERS</span>
          </div>
          <div>
            <span style={statusItem}>
              <img
                src={uarrow}
                alt="up arrow"
                style={{ height: 13, marginRight: 2 }}
              />
              83k
            </span>
          </div>
        </div>
        <div style={statusNumBox}>
          <div>
            <span style={statusTitle}>POSTS</span>
          </div>
          <div>
            <span style={statusItem}>2k</span>
          </div>
        </div>
        <div style={statusNumBox}>
          <div>
            <span style={statusTitle}>FOLLOWING</span>
          </div>
          <div>
            <span style={statusItem}>1.3k</span>
          </div>
        </div>
      </div>

      <div style={buttons}>
        <button type="button" style={activityButton}>
          <img src={play} alt="playbutton" style={{ height: 10 }} />
          &nbsp;&nbsp;Start Activity
        </button>
      </div>
      <div style={buttons}>
        <button type="button" style={membershipButton}>
          <span style={{ textDecoration: 'line-through' }}>$12/mo</span>
          <span style={{ fontSize: 19 }}>&nbsp;&nbsp;$6/mo</span>
          <br />
          If you upgrade in 00:59:00
        </button>
      </div>
      <hr style={hrbreak} />
    </div>
  );
};
export default UserInfo;
