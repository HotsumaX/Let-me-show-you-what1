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

  const { title } = styles.actionCard;

  return (
    <div>
      <div>Actions</div>
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
          Follows button
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
          unfollows button
        </div>

        <div style={title}>
          <Switch
            {...switchSettings}
            checked={state.likes}
            onChange={() =>
              setState(prevState => ({ ...state, likes: !prevState.likes }))
            }
          />
          likes button
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
          comments button
        </div>
      </div>

      <hr />
    </div>
  );
};
export default Actions;
