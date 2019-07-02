import React from 'react';
import faker from 'faker';

const styles = {
  post: {
    marginTop: 10,
    width: '50rem',
    backgroundColor: 'white',
    marginLeft: 30,
  },
};

const article = {
  Name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  Paragraph: faker.lorem.paragraphs(4),
  Type: faker.random.words(3),
  Title: faker.random.words(3),
};

const BlogMain = () => {
  return (
    <>
      blog post
      <div style={styles.post}>
        <div>{article.Type}</div>
        <br />
        {article.Title}
        <br />
        image image description
        <br />
        {article.Paragraph}
        <br />
        {article.Paragraph}
        <br />
        {article.Paragraph}
        <br />
        {article.Name}
      </div>
    </>
  );
};

export default BlogMain;
