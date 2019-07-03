import React from 'react';
import faker from 'faker';

import flame from './images/flame.svg';
import comment from './images/chat.svg';
import favorite from './images/bookmark.svg';

import styles from './BlogCard.styles';

const article = {
  Name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  Paragraph: faker.lorem.paragraphs(4),
  Type: faker.random.words(3),
  Title: faker.random.words(12),
  Image: faker.image.animals(),
};

const BlogMain = () => {
  const { title, mainTitle, para, paraBox, buttonBox, image, icons } = styles;

  return (
    <>
      blog post
      <div style={styles.post}>
        <div style={{ marginLeft: '2em', marginTop: '1rem' }}>
          <div style={title}>{article.Type}</div>
          <div style={mainTitle}>{article.Title}</div>
          <div style={buttonBox}>
            <div style={{ display: 'flex' }}>
              <img
                src={faker.image.avatar()}
                alt="avatar"
                style={{ height: 45, borderRadius: 50, marginRight: 10 }}
              />
              <div>
                <div>{article.Name}</div>
                <div>
                  <span style={{ color: '#818181' }}>
                    {faker.date.weekday()} 4:52pm
                  </span>
                </div>
              </div>
            </div>
            <div style={icons}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <img src={flame} alt="read-icon" style={image} />
                131.6k
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <img src={comment} alt="comments" style={image} />
                181
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img src={favorite} alt="favorite" style={image} />1
              </div>
            </div>
          </div>
          <img src={article.Image} alt="" style={{ width: '95%' }} />
          <br />
          <div style={{ color: '#818181', marginBottom: 10 }}>
            Photo:{article.Name}(AP)
          </div>
          <div style={paraBox}>
            <div style={para}>{article.Paragraph}</div>
            <div style={para}>{article.Paragraph}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogMain;
