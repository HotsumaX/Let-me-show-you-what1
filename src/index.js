import React from 'react';
import { render } from 'react-dom';

const styles = {
  NavBar: {
    fontSize: 30,
    backgroundColor: 'green',
    height: 70,
  },
  BotSec: {
    backgroundColor: 'green',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    height: 50,
    width: '90%',
    alignItems: 'center',
    marginLeft: '5%',
    minWidth: 500,
  },
};
const NavBar = () => {
  return <div style={styles.NavBar}>something</div>;
};

const BotSec = () => {
  return (
    <div style={styles.BotSec}>
      <div>something else</div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <NavBar />
      <body>stuff</body>
      <BotSec />
    </>
  );
};

render(<App />, document.getElementById('root'));
