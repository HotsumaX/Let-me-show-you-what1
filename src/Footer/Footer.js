import React from 'react';

import inMobile from './images/Muzli-770x618.png';
import './Footer.css';

const Footer2 = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 140,
        border: '1px red solid',
        marginBottom: 100,
      }}
    >
      <div
        style={{
          border: '1px red solid',
          width: 500,
          minHeight: 800,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '90%', marginTop: 30, marginBottom: 20 }}>
          inVision image will go here
        </div>
        <section style={{ border: '1px green solid', width: '90%' }}>
          <h4>Contact</h4>
          <ul>
            <li>Contact in Vision</li>
          </ul>
        </section>
        <section style={{ border: '1px green solid', width: '90%' }}>
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
        <section style={{ border: '1px green solid', width: '90%' }}>
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
        <section style={{ border: '1px green solid', width: '90%' }}>
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
        <div style={{ width: '90%', marginBottom: -15, marginTop: 30 }}>
          <h4>Recent News</h4>
        </div>
        <img
          src={inMobile}
          alt="mobile main"
          style={{
            width: '90%',
            height: 'auto',
            marginBottom: 15,
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 20,
            width: '90%',
            alignItems: 'center',
            border: '1px blue solid',
            fontSize: 14,
          }}
        >
          <span>
            <strong>Meet the new InVision mobile app:</strong>
            <span style={{ color: 'RGBA(162, 164, 170, 1.00)' }}>
              {' '}
              Now with studio mirroring and freehand to help you design better
              faster, together-on the go.
            </span>
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '90%',
              justifyContent: 'space-around',
              marginBottom: 30,
            }}
          >
            <a href="http://www.google.com">Tw</a>
            <a href="http://www.google.com">Db</a>
            <a href="http://www.google.com">Ig</a>
            <a href="http://www.google.com">Fb</a>
            <a href="http://www.google.com">Rss</a>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              width: '80%',
              marginBottom: 30,
              justifyContent: 'space-between',
            }}
          >
            <a
              href="http://www.google.com"
              style={{ width: '47%', textAlign: 'right', marginBottom: 10 }}
            >
              Terms of Service
            </a>
            <a href="http://www.google.com" style={{ width: '47%' }}>
              Pricavy Policy
            </a>
            <a
              href="http://www.google.com"
              style={{ width: '47%', textAlign: 'right' }}
            >
              Security
            </a>
            <a href="http://www.google.com" style={{ width: '47%' }}>
              Sitemap
            </a>
          </div>
          <div style={{ marginBottom: 30 }}>
            © inVisionApp Inc. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
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
          <div className="copywrite">
            © inVisionApp Inc. All rights reserved.
          </div>
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
      <div>
        <Footer2 />
      </div>
    </div>
  );
};

export default Footer;
