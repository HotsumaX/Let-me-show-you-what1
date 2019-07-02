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
  const { card, imageBox, image, font, infoBox, articleTitle, title } = styles;

  return (
    <>
      individual blog post card
      <div style={card}>
        <div style={imageBox}>
          <img src={clock} alt="clock" style={image} />
          <br />
          <span style={font}>
            {faker.random.number({ min: 1, max: 25 })} HR Ago
          </span>
          <br />
          <img
            src={imgColor ? ribbon : ribbonActive}
            alt="clock"
            style={image}
            onClick={() => setImgColor(!imgColor)}
          />
          <span style={font}>SAVE</span>
        </div>
        <img
          src={faker.image.business()}
          alt="blog post"
          style={{ height: '80%' }}
        />
        <div style={infoBox}>
          <span style={title}>{faker.random.words(2)}</span>
          <div style={articleTitle}>{faker.random.words(9)}</div>
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
