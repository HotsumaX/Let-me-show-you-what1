import React from 'react';
import faker from 'faker';
import clock from './images/clock.svg';
import ribbon from './images/star.svg';
import ribbonActive from './images/lace.svg';

const styles = {
  outline: {
    backgroundColor: '#2A79D3',
    width: '90%',
    marginLeft: '5%',
    display: 'flex',
    flexDirection: 'column',
    height: '70em',
    paddingTop: 50,
    paddingLeft: 30,
  },
  card: {
    marginTop: 10,
    backgroundColor: 'white',
    width: '50rem',
    marginLeft: 30,
    height: 150,
    display: 'flex',
  },
  post: {
    marginTop: 10,
    width: '50rem',
    backgroundColor: 'white',
    marginLeft: 30,
  },
  imageBox: {
    display: 'flex',
    flexDirection: 'column',
    width: 80,
  },
  image: {
    height: 40,
  },
  font: {
    fontSize: 12,
  },
};

const article = {
  Name: `${faker.name.firstName()} ${faker.name.lastName()}`,
};

const Blog = () => {
  return (
    <div style={styles.outline}>
      individual blog post card
      <div style={styles.card}>
        <div style={styles.imageBox}>
          <img src={clock} alt="clock" style={styles.image} />
          <br />
          <span style={styles.font}>{faker.random.number()} HR Ago</span>
          <br />
          <img src={ribbon} alt="clock" style={styles.image} />
          <span style={styles.font}>SAVE</span>
        </div>
        <img
          src={faker.image.business()}
          alt="blog post"
          style={{ height: '80%' }}
        />
      </div>
      blog post
      <div style={styles.post}>{article.Name}</div>
    </div>
  );
};

export default Blog;
