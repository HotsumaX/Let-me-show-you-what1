/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import faker from 'faker';
import clock from './images/clock.svg';
import ribbon from './images/star.svg';
import ribbonActive from './images/lace.svg';

const styles = {
  outline: {
    backgroundColor: '#2A79D3',
    minWidth: '54em',
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
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBox: {
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  image: {
    height: 20,
  },
  font: {
    fontSize: 10,
  },
  title: {
    color: '#2675B2',
  },
};

const article = {
  Name: `${faker.name.firstName()} ${faker.name.lastName()}`,
};

const Blog = () => {
  const [imgColor, setImgColor] = useState(true);

  return (
    <div style={styles.outline}>
      individual blog post card
      <div style={styles.card}>
        <div style={styles.imageBox}>
          <img src={clock} alt="clock" style={styles.image} />
          <br />
          <span style={styles.font}>
            {faker.random.number({ min: 1, max: 25 })} HR Ago
          </span>
          <br />
          <img
            src={imgColor ? ribbon : ribbonActive}
            alt="clock"
            style={styles.image}
            onClick={() => setImgColor(!imgColor)}
          />
          <span style={styles.font}>SAVE</span>
        </div>
        <img
          src={faker.image.business()}
          alt="blog post"
          style={{ height: '80%' }}
        />
        <div style={styles.infoBox}>
          <span style={styles.title}>{faker.random.words(2)}</span>
          <div
            style={{
              width: 500,
              paddingTop: 8,
              paddingBottom: 5,
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            {faker.random.words(9)}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src={faker.image.avatar()}
              alt="avatar"
              style={{ height: 35, borderRadius: 50, marginRight: 10 }}
            />
            {article.Name} vertival line comments
          </div>
        </div>
      </div>
      blog post
      <div style={styles.post}>{article.Name}</div>
    </div>
  );
};

export default Blog;
