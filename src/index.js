import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import Blog from './Blog/index';
import Home from './Home';
import Dash from './Dash/index';
import Shop from './Shop';
import CCForm from './CCForm';
import ToDoList from './ToDoList';
import Footer from './Footer';

const styles = {
  NavBar: {
    fontSize: 30,
    backgroundColor: 'green',
    minHeight: 70,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: '3%',
    flexWrap: 'wrap',
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
  link: {
    marginLeft: 10,
    marginRight: 10,
  },
};

const NavBar = () => {
  return (
    <div style={styles.NavBar}>
      <Link to="/" style={styles.link}>
        Home
      </Link>
      <Link to="Blog" style={styles.link}>
        Blog
      </Link>
      <Link to="Shop" style={styles.link}>
        Shop
      </Link>
      <Link to="Dashboard" style={styles.link}>
        Dashboard
      </Link>
      <Link to="CCForm" style={styles.link}>
        Credit Card Form
      </Link>
      <Link to="ToDoList" style={styles.link}>
        To Do List
      </Link>
      <Link to="Footer" style={styles.link}>
        Footer Clone
      </Link>
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
          <Blog path="Blog" />
          <Shop path="Shop" />
          <Dash path="Dashboard" />
          <CCForm path="CCForm" />
          <ToDoList path="ToDoList" />
          <Footer path="Footer" />
        </Router>
        <BotSec />
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
