import React, { useState } from 'react';
import Switch from 'react-switch';

const Actions = () => {
  const [follButt, setFollButt] = useState(true);
  return (
    <div>
      <div>Actions</div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Switch
          handleDiameter={15}
          height={20}
          width={40}
          uncheckedIcon={false}
          checkedIcon={false}
          offColor="#D2E6F6"
          onColor="#0986FF"
          checked={follButt}
          onChange={() => setFollButt(!follButt)}
        />
        Follows button
      </div>
      <div>unfollows button</div>

      <div>likes button</div>
      <div>comments button</div>
      <hr />
    </div>
  );
};
export default Actions;
