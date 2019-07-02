/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import BlogCard from './BlogCard';
import BlogMain from './BlogMain';

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
};

const Blog = () => {
  return (
    <div style={styles.outline}>
      <BlogCard />
      <BlogMain />
    </div>
  );
};

export default Blog;
