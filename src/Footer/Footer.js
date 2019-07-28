import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <div className="main-body">
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30em' }}>invision image</div>
        <div className="accordion">
          <section>
            <ul>
              <h3>contact</h3>
              <li>contact in vision</li>
            </ul>
          </section>
          <section>
            <ul>
              <h3>about</h3>
              <li>about invision</li>
              <li>invition for startups</li>
              <li>pricing</li>
              <li>students and teachers</li>
              <li>media kit</li>
              <li>jobs</li>
            </ul>
          </section>
          <section>
            <ul>
              <h3>platform</h3>
              <li>freehand</li>
              <li>boards</li>
              <li>studio</li>
              <li>craft</li>
              <li>prototype</li>
              <li>inspect</li>
              <li>dsm</li>
              <li>integrations</li>
            </ul>
          </section>
          <section>
            <ul>
              <h3>resorces</h3>
              <li>blog</li>
              <li>Design Resources</li>
              <li>product training</li>
              <li>help center</li>
              <li>knowledge base</li>
              <li>community</li>
              <li>design defined</li>
              <li>marketplace</li>
            </ul>
          </section>
        </div>
        <section style={{ width: 160 }}>
          inMobile.
          <br />
          app image <br />
          recent news mobile image Meet the new InVision mobile app: now with
          studio mirroring and freehand to help you design better faster,
          together-on the go.
        </section>
      </div>

      <div style={{ display: 'flex' }}>
        <div>invisionApp inc. all rights reserved.</div>
        <div>
          <a href="http://www.google.com">terms of service</a>
          <a href="http://www.google.com">pricavy policy</a>
          <a href="http://www.google.com">security</a>
          <a href="http://www.google.com">sitemap</a>
        </div>
        <div>
          <a href="http://wwww.google.com">tw</a>
          <a href="http://wwww.google.com">db</a>
          <a href="http://wwww.google.com">Ig</a>
          <a href="http://wwww.google.com">Fb</a>
          <a href="http://wwww.google.com">Rss</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
