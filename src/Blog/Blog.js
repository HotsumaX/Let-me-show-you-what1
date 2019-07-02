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
    height: '120em',
    paddingTop: 50,
    paddingLeft: 30,
  },
};

const Blog = () => {
  return (
    <div style={styles.outline}>
      <BlogCard />
      <br />
      <BlogMain />
    </div>
  );
};

export default Blog;
