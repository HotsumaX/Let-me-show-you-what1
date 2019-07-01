/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import faker from 'faker';
import BlogCard from './BlogCard';

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

const Blog = () => {
  return (
    <div style={styles.outline}>
      <BlogCard />
      blog post
      <div style={styles.post}>{article.Name}</div>
    </div>
  );
};

export default Blog;
