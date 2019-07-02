import React from 'react';
import faker from 'faker';

import styles from './BlogCard.styles';

const article = {
  Name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  Paragraph: faker.lorem.paragraphs(4),
  Type: faker.random.words(3),
  Title: faker.random.words(12),
  Image: faker.image.animals(),
};

const BlogMain = () => {
  const { title, mainTitle, para, paraBox } = styles;

  return (
    <>
      blog post
      <div style={styles.post}>
        <div style={{ marginLeft: '2em', marginTop: '1rem' }}>
          <div style={title}>{article.Type}</div>
          <div style={mainTitle}>{article.Title}</div>
          <br />
          <img src={article.Image} alt="" style={{ width: '95%' }} />
          <br />
          <div style={{ color: '#818181', marginBottom: 10 }}>
            Photo:{article.Name}(AP)
          </div>
          <div style={paraBox}>
            <div style={para}>{article.Paragraph}</div>
            <div style={para}>{article.Paragraph}</div>
            <div style={para}>{article.Paragraph}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogMain;
