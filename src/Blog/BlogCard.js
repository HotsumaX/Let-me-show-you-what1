/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import faker from 'faker';

import clock from './images/clock.svg';
import ribbon from './images/star.svg';
import ribbonActive from './images/lace.svg';
import styles from './BlogCard.styles';

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
