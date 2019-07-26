import React from 'react';
import FooterCSS from './FooterCSS';
import FooterReact from './FooterReact';

import './Footer.css';

const Footer = () => {
  return (
    <div className="main-body">
      <h2>footer made as one component using media quaries</h2>
      <FooterCSS />
      <h2>building three components to auto adjust</h2>
      <FooterReact />
    </div>
  );
};

export default Footer;
