import React, { useState } from 'react';
import Switch from 'react-switch';

const Actions = () => {
  const [state, setState] = useState({
    follows: true,
    unfollows: true,
    likes: false,
    comments: true,
  });

  const switchSettings = {
    handleDiameter: 15,
    height: 20,
    width: 40,
    uncheckedIcon: false,
    checkedIcon: false,
    offColor: '#D2E6F6',
    onColor: '#0986FF',
  };

  return (
    <div>
      <div>Actions</div>
      <div
        style={{
          height: 125,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginLeft: 10,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Switch
            {...switchSettings}
            checked={state.follows}
            onChange={() => setState({ ...state, follows: !state.follows })}
          />
          Follows button
        </div>
        <div>
          <Switch
            {...switchSettings}
            checked={state.unfollows}
            onChange={() => setState({ ...state, unfollows: !state.unfollows })}
          />
          unfollows button
        </div>

        <div>
          <Switch
            {...switchSettings}
            checked={state.likes}
            onChange={() => setState({ ...state, likes: !state.likes })}
          />
          likes button
        </div>
        <div>
          <Switch
            {...switchSettings}
            checked={state.comments}
            onChange={() => setState({ ...state, comments: !state.comments })}
          />
          comments button
        </div>
      </div>

      <hr />
    </div>
  );
};
export default Actions;
