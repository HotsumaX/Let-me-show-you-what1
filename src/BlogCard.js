/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import faker from 'faker';
import clock from './images/clock.svg';
import ribbon from './images/star.svg';
import ribbonActive from './images/lace.svg';

const styles = {
  card: {
    marginTop: 10,
    backgroundColor: 'white',
    width: '50rem',
    marginLeft: 30,
    height: 150,
    display: 'flex',
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
  articleTitle: {
    width: 500,
    paddingTop: 8,
    paddingBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
};

const article = {
  Name: `${faker.name.firstName()} ${faker.name.lastName()}`,
};

const BlogCard = () => {
  const [imgColor, setImgColor] = useState(true);

  return (
    <>
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
          <div style={styles.articleTitle}>{faker.random.words(9)}</div>
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
            {article.Name}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
