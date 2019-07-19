import React, { useState } from 'react';

import styles from './CCForm.styles';
import paypal from './images/5.png';
import visa from './images/1.png';
import mastercard from './images/2.png';
import amex from './images/22.png';
import discover from './images/14.png';
import diner from './images/10.png';
import jcb from './images/16.png';

import './CCForm.css';

const Form1 = () => {
  const [color, setColor] = useState(false);

  const { MainBox, ccImage, inputBox, inputBoxActive } = styles.Form1;
  return (
    <div>
      <h2>Current payment form</h2>
      <div style={MainBox}>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 30,
            justifyContent: 'space-around',
            height: 800,
          }}
        >
          <label
            htmlFor="Payment Method"
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '5em',
              justifyContent: 'space-around',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 20,
              }}
            >
              <input
                type="radio"
                name="payment type"
                value="PayPal"
                style={{ marginRight: 15 }}
              />
              PayPal{' '}
              <div style={{ marginLeft: 15 }}>
                <img src={paypal} alt="paypal" style={ccImage} />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <input
                type="radio"
                name="payment type"
                value="Credit Card"
                style={{ marginRight: 15 }}
              />
              Credit Card
              <div style={{ marginLeft: 15 }}>
                <img src={visa} alt="visa" style={ccImage} />
                <img src={mastercard} alt="mastercard" style={ccImage} />
                <img src={amex} alt="american express" style={ccImage} />
                <img src={discover} alt="discover" style={ccImage} />
                <img src={diner} alt="diner's club" style={ccImage} />
                <img src={jcb} alt="JCB" style={ccImage} />
              </div>
            </div>
          </label>
          <h3>Paymet details</h3>
          <label
            htmlFor="First Name"
            style={{ display: 'flex', flexDirection: 'column', height: 60 }}
          >
            First Name
            <input type="text" name="First Name" className="inputbox" />
          </label>
          <label
            htmlFor="Last Name"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            Last Name
            <input
              type="text"
              name="Last Name"
              style={{ height: 30, width: '90%', border: '2px gray solid' }}
            />
          </label>
          <label htmlFor="CC number">
            Credit card number
            <input
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              style={{ height: 30, width: '90%', border: '2px gray solid' }}
            />
          </label>
          <label htmlFor="Expiry date">
            Expiry date
            <div>
              <input
                type="number"
                name="expiry month"
                min="1"
                max="12"
                placeholder="MM"
                style={{
                  border: '2px gray solid',
                  height: 30,
                  width: 40,
                  marginRight: 10,
                  paddingLeft: 10,
                }}
              />
              <input
                type="number"
                name="expiry year"
                placeholder="YYYY"
                style={{
                  border: '2px gray solid',
                  height: 30,
                  width: 60,
                  paddingLeft: 10,
                }}
              />
            </div>
          </label>
          <label htmlFor="CVV" style={{ height: 50 }}>
            CVV <br />
            <input
              type="text"
              name="CVV number"
              placeholder="CVV"
              style={{
                border: '2px gray solid',
                paddingLeft: 10,
                height: 30,
                width: 45,
              }}
            />
          </label>
          <section
            style={{
              height: 40,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span style={{ color: 'gray' }}>By purchasing I agree to the</span>
            <a
              href="http://www.google.com"
              style={{
                color: 'RGBA(162, 209, 175, 1.00)',
                textDecoration: 'none',
              }}
            >
              Terms of Service.
            </a>
          </section>
          <button
            type="submit"
            style={{
              width: '90%',
              height: 50,
              color: 'white',
              backgroundColor: 'RGBA(108, 220, 137, 1.00)',
              fontSize: 18,
            }}
          >
            Start free trial - pay after 7 days
          </button>
          <section style={{ width: '90%', color: 'gray' }}>
            <p>
              Your 7-day-trial will start today and end on 28 march 2019. Unless
              you cancel during this period, you'll be charged $89.99 after 7
              days. afterwards your subscription will renew automatically every
              year, but you can cancel anytime. details can be found{' '}
              <a
                href="http://www.google.com"
                style={{
                  color: 'RGBA(162, 209, 175, 1.00)',
                  textDecoration: 'none',
                }}
              >
                here
              </a>
              .
            </p>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Form1;
