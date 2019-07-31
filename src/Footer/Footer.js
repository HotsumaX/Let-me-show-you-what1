import React from 'react';

import inMobile from './images/Muzli-770x618.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="main-body">
      <div className="main-body-upper">
        <div className="invision-image">invision image</div>
        <div className="accordion">
          <section>
            <h4>Contact</h4>
            <ul>
              <li>Contact in Vision</li>
            </ul>
          </section>
          <section>
            <h4>About</h4>
            <ul>
              <li>About Invision</li>
              <li>Invition For Startups</li>
              <li>Pricing</li>
              <li>Students and Teachers</li>
              <li>Media Kit</li>
              <li>Jobs</li>
            </ul>
          </section>
          <section>
            <h4>Platform</h4>
            <ul>
              <li>Freehand</li>
              <li>Boards</li>
              <li>Studio</li>
              <li>Craft</li>
              <li>Prototype</li>
              <li>Inspect</li>
              <li>Dsm</li>
              <li>Integrations</li>
            </ul>
          </section>
          <section>
            <h4>Resorces</h4>
            <ul>
              <li>Blog</li>
              <li>Design Resources</li>
              <li>Product Training</li>
              <li>Help Center</li>
              <li>Knowledge Base</li>
              <li>Community</li>
              <li>Design Defined</li>
              <li>Marketplace</li>
            </ul>
          </section>
        </div>
        <div style={{ paddingRight: 40 }}>
          <section
            style={{
              maxWidth: 325,
              display: 'flex',
              flexDirection: 'column',
              fontSize: 15,
            }}
          >
            <h4>Recent News</h4>
            <img
              src={inMobile}
              alt="mobile main"
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: 320,
                marginBottom: 15,
              }}
            />
            <strong>Meet the new InVision mobile app:</strong>
            <span style={{ color: 'RGBA(162, 164, 170, 1.00)' }}>
              Now with studio mirroring and freehand to help you design better
              faster, together-on the go.
            </span>
          </section>
        </div>
      </div>

      <div className="media-box">
        <div className="copywrite">© inVisionApp Inc. All rights reserved.</div>
        <div className="link-box-main">
          <div className="link-box">
            <a href="http://www.google.com">Terms of Service</a>
            <a href="http://www.google.com">Pricavy Policy</a>
            <a href="http://www.google.com">Security</a>
            <a href="http://www.google.com">Sitemap</a>
          </div>
          <div className="media-links">
            <a href="http://www.google.com">Tw</a>
            <a href="http://www.google.com">Db</a>
            <a href="http://www.google.com">Ig</a>
            <a href="http://www.google.com">Fb</a>
            <a href="http://www.google.com">Rss</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
