import React from 'react';
import faker from 'faker';
import styles from './BlogCard.styles';

const article = {
  Name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  Paragraph: faker.lorem.paragraphs(4),
  Type: faker.random.words(3),
  Title: faker.random.words(3),
  Image: faker.image.animals(),
};

const BlogMain = () => {
  const { title } = styles;
  return (
    <>
      blog post
      <div style={styles.post}>
        <div style={{ marginLeft: '2em', marginTop: '1rem' }}>
          <div style={title}>{article.Type}</div>
          <br />
          {article.Title}
          <br />
          <img src={article.Image} alt="" style={{ width: '95%' }} />
          <br />
          image image description
          <br />
          {article.Paragraph}
          <br />
          {article.Paragraph}
          <br />
          {article.Paragraph}
        </div>
      </div>
    </>
  );
};

export default BlogMain;
