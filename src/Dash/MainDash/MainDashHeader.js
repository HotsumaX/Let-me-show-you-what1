/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import styles from '../Dash.styles';

const MainDashHeader = () => {
  const [colorOverview, setColorOverview] = useState(true);
  const [colorTargets, setColorTargets] = useState(false);
  const [colorSettings, setColorSettings] = useState(false);
  const [colorComments, setColorComments] = useState(false);
  const { headerButtons, test } = styles.MainDashHeader;

  return (
    <div
      style={{
        display: 'flex',
        borderBottom: '1px lightgray solid',
        marginBottom: 20,
      }}
    >
      <div
        style={
          colorOverview ? { ...headerButtons, ...test } : { ...headerButtons }
        }
        onClick={() => setColorOverview(prevState => !prevState)}
      >
        OVERVIEW
      </div>
      <div
        style={
          colorTargets ? { ...headerButtons, ...test } : { ...headerButtons }
        }
        onClick={() => setColorTargets(prevState => !prevState)}
      >
        TARGETS
      </div>
      <div
        style={
          colorSettings ? { ...headerButtons, ...test } : { ...headerButtons }
        }
        onClick={() => setColorSettings(prevState => !prevState)}
      >
        SETTINGS
      </div>
      <div
        style={
          colorComments ? { ...headerButtons, ...test } : { ...headerButtons }
        }
        onClick={() => setColorComments(prevState => !prevState)}
      >
        COMMENTS
      </div>
    </div>
  );
};
export default MainDashHeader;
