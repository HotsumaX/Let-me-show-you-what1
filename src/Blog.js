import React from 'react';
import faker from 'faker';

const styles = {
  outline: {
    backgroundColor: '#2A79D3',
    width: '90%',
    marginLeft: '5%',
    display: 'flex',
    height: '70em',
    justifyContent: 'center',
  },
  post: {
    marginTop: 30,
    width: '50rem',
    backgroundColor: 'white',
    marginLeft: 30,
  },
};

const article = {
  Name: `${faker.name.firstName()} ${faker.name.lastName()}`,
};

const Blog = () => {
  return (
    <div style={styles.outline}>
      <div style={styles.post}>{article.Name}</div>
    </div>
  );
};

export default Blog;
