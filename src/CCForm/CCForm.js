import React from 'react';
import Form1 from './Form1';
import Form2 from './Form2';

// item is from https://dribbble.com/shots/6766389-Payment-Form/attachments

const CCForm = () => {
  return (
    <div
      style={{
        backgroundColor: 'RGBA(241, 246, 245, 1.00)',
        height: '70em',
        display: 'flex',
        justifyContent: 'space-around',
        minWidth: '65em',
      }}
    >
      <Form1 />
      <Form2 />
    </div>
  );
};

export default CCForm;
