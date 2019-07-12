import React, { useState } from 'react';
import Switch from 'react-switch';

import styles from '../Dash.styles';

const Actions = () => {
  const [state, setState] = useState({
    follows: true,
    unfollows: true,
    likes: false,
    comments: true,
  });

  const switchSettings = {
    handleDiameter: 17,
    height: 20,
    width: 40,
    uncheckedIcon: false,
    checkedIcon: false,
    offColor: '#D2E6F6',
    onColor: '#0986FF',
  };

  const { title, hrbreak } = styles.actionCard;

  return (
    <section>
      <div style={{ marginLeft: 10, marginBottom: 10, color: 'gray' }}>
        Actions
      </div>
      <div
        style={{
          height: 140,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          marginLeft: 10,
        }}
      >
        <div style={title}>
          <Switch
            {...switchSettings}
            checked={state.follows}
            onChange={() =>
              setState(prevState => ({ ...state, follows: !prevState.follows }))
            }
          />
          <span style={{ marginLeft: -75 }}>Follows</span>
          <span>290</span>
        </div>
        <div style={title}>
          <Switch
            {...switchSettings}
            checked={state.unfollows}
            onChange={() =>
              setState(prevState => ({
                ...state,
                unfollows: !prevState.unfollows,
              }))
            }
          />
          <span style={{ marginLeft: -60 }}>Unfollows</span>
          <span>120</span>
        </div>

        <div style={title}>
          <Switch
            {...switchSettings}
            checked={state.likes}
            onChange={() =>
              setState(prevState => ({ ...state, likes: !prevState.likes }))
            }
          />
          <span style={{ marginLeft: -100 }}>Likes</span>
          <span>0</span>
        </div>
        <div style={title}>
          <Switch
            {...switchSettings}
            checked={state.comments}
            onChange={() =>
              setState(prevState => ({
                ...state,
                comments: !prevState.comments,
              }))
            }
          />
          <span style={{ marginLeft: -60 }}>Comments</span>
          <span>10</span>
        </div>
      </div>

      <hr style={hrbreak} />
    </section>
  );
};
export default Actions;
