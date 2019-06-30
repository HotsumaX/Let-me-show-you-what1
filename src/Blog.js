import React from 'react';
import faker from 'faker';
import clock from './images/clock.svg';

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
    height: 100,
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
  },
  image: {
    height: 40,
  },
};

const article = {
  Name: `${faker.name.firstName()} ${faker.name.lastName()}`,
};

const Blog = () => {
  return (
    <div style={styles.outline}>
      card
      <div style={styles.card}>
        <div style={styles.imageBox}>
          <img src={clock} alt="clock" style={styles.image} />
          <img src={clock} alt="clock" style={styles.image} />
        </div>
      </div>
      blog post
      <div style={styles.post}>{article.Name}</div>
    </div>
  );
};

export default Blog;
