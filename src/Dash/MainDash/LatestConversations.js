import React from 'react';

const data = {};

const LatestConversations = () => {
  return (
    <div
      style={{
        border: '1px blue solid',
        width: 275,
        boxShadow: '0px 10px 26px -12px rgba(0,0,0,0.75)',
      }}
    >
      <div
        style={{
          border: '1px red solid',
          height: 50,
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 10,
          boxShadow: '0px 16px 23px -20px rgba(15,31,95,1)',
        }}
      >
        LatestConversations
      </div>
      <div style={{ height: 240 }}>posts</div>
    </div>
  );
};
export default LatestConversations;
