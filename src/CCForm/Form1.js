/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-alert */
import React from 'react';

import styles from './CCForm.styles';
import paypal from './images/5.png';
import visa from './images/1.png';
import mastercard from './images/2.png';
import amex from './images/22.png';
import discover from './images/14.png';
import diner from './images/10.png';
import jcb from './images/16.png';

import './CCForm1.css';

const Form1 = () => {
  const submitForm = event => {
    event.preventDefault();

    alert('Thank you for submitting your order');
  };

  const { MainBox, ccImage } = styles.Form1;
  return (
    <div style={{ marginTop: 30 }}>
      <h2>Current payment form</h2>
      <div style={MainBox}>
        <form
          onSubmit={submitForm}
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 30,
            justifyContent: 'space-around',
            height: 800,
            color: 'darkblue',
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
                className="radio-button"
              />
              PayPal
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
                className="radio-button"
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
            <input type="text" name="Last Name" className="inputbox" />
          </label>
          <label htmlFor="CC number">
            Credit card number
            <input
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              className="inputbox"
            />
          </label>
          <label htmlFor="Expiry date">
            Expiry date
            <div style={{ marginTop: 10 }}>
              <input
                type="number"
                name="expiry month"
                min="1"
                max="12"
                placeholder="MM"
                className="small-input-box"
              />
              <input
                type="number"
                name="expiry year"
                placeholder="YYYY"
                className="year-input-box"
              />
            </div>
          </label>
          <label
            htmlFor="CVV"
            style={{ height: 50, display: 'flex', flexDirection: 'column' }}
          >
            CVV
            <div>
              <input
                type="text"
                name="CVV number"
                placeholder="CVV"
                className="ccv-box"
              />
            </div>
          </label>
          <section
            style={{
              height: 40,
              display: 'flex',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <span style={{ color: 'gray' }}>
              By purchasing I agree to the &nbsp;
            </span>

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
              fontWeight: 100,
              outline: 'none',
              border: 'none',
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
