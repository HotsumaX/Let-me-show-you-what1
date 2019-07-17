import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import Blog from './Blog/index';
import Home from './Home';
import Dash from './Dash/index';
import Shop from './Shop';
import CCForm from './CCForm';

const styles = {
  NavBar: {
    fontSize: 30,
    backgroundColor: 'green',
    height: 70,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: '3%',
  },
  BotSec: {
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: '90%',
    alignItems: 'center',
    marginLeft: '5%',
    minWidth: 500,
  },
  pageContainer: {
    position: 'relative',
    minHeight: '100vh',
  },
  contentWraper: {
    paddingBottom: '2.5rem',
  },
};

const NavBar = () => {
  return (
    <div style={styles.NavBar}>
      <Link to="/">Home</Link>
      <Link to="/Blog">Blog</Link>
      <Link to="/Shop">Shop</Link>
      <Link to="Dashboard">Dashboard</Link>
      <Link to="CCForm">Credit Card Form</Link>
    </div>
  );
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
    <div style={styles.pageContainer}>
      <NavBar />
      <div style={styles.contentWraper}>
        <Router>
          <Home path="/" />
          <Blog path="/Blog" />
          <Shop path="/Shop" />
          <Dash path="/Dashboard" />
          <CCForm path="/CCForm" />
        </Router>
        <BotSec />
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
