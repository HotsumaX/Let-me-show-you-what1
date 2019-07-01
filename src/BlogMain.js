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
};

const BlogMain = () => {
  return (
    <>
      blog post
      <div style={styles.post}>
        article type
        <br />
        article title
        <br />
        image image description
        <br />
        article
        <br />
        {article.Name}
      </div>
    </>
  );
};

export default BlogMain;
