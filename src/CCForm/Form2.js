/* eslint-disable no-alert */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import paypal from './images/5.png';
import visa from './images/1.png';
import mastercard from './images/2.png';
import amex from './images/22.png';
import './CCForm2.css';

const Form2 = () => {
  const submitForm2 = event => {
    event.preventDefault();
    alert('Thank you for submitting Form 2');
  };

  return (
    <div style={{ marginTop: 30 }}>
      <h2>New, simplified form</h2>
      <div
        style={{
          width: '27em',
          backgroundColor: 'white',
          height: '40em',
          display: 'flex',
          justifyContent: 'center',
          marginTop: 30,
        }}
      >
        <form className="Main" onSubmit={submitForm2}>
          <header>
            <h2>Payment details</h2>
            <h4>All transactions are secure and encrypted</h4>
          </header>
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: 60,
              justifyContent: 'space-between',
            }}
          >
            <label
              htmlFor="paypal"
              id="paypal"
              nesting="1"
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '36%',
                justifyContent: 'space-between',
              }}
            >
              <input
                type="radio"
                name="payment"
                id="paypal"
                value="paypal"
                style={{ appearance: 'none', color: 'red' }}
              />
              PayPal <img src={paypal} alt="paypal icon" className="cc-image" />
            </label>
            <label
              htmlFor="creditdebit"
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '87%',
                justifyContent: 'space-between',
              }}
            >
              <input
                type="radio"
                name="payment"
                id="creditdebit"
                value="creditdebit"
              />
              Credit/Debit card
              <img src={visa} alt="visa" className="cc-image" />
              <img src={mastercard} alt="mastercard" className="cc-image" />
              <img src={amex} alt="american express" className="cc-image" />
            </label>
          </section>
          <label htmlFor="Name">
            Name on card
            <input
              type="text"
              name="Name on Card"
              id="name"
              placeholder="e.g Jamie Smith"
              className="in-box"
            />
          </label>
          <label htmlFor="Card Number">
            Card number
            <input
              type="number"
              name="Card Number"
              id="Card Number"
              placeholder="0000 0000 0000 0000"
              className="in-box"
            />
          </label>
          <section
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '65%',
            }}
          >
            <label htmlFor="Expiry date">
              Expiry date <br />
              <input
                type="text"
                name="Expiry date"
                id="Expiry date"
                placeholder="MM\YYYY"
                className="sec-in-box"
              />
            </label>
            <label htmlFor="Security Code">
              Security Code <br />
              <input
                type="number"
                name="Security Code"
                id="Security Code"
                min="000"
                max="999"
                placeholder="000"
                className="sec-in-box"
              />
            </label>
          </section>
          <div
            style={{
              marginBottom: 10,
              color: 'gray',
              fontSize: 12,
              marginTop: 10,
            }}
          >
            By purchasing I agree to the{' '}
            <a href="http://www.google.com" style={{ color: 'gray' }}>
              Terms of Service
            </a>
            .
          </div>

          <button type="submit" className="green-button">
            Start free Trial - pay after 7 days
          </button>
          <section
            style={{
              marginBottom: 40,
              marginTop: 10,
              fontSize: 12,
              color: 'gray',
              lineHeight: 1.7,
            }}
          >
            Your 7-day trial will start today and end on 2 April 2020. Unless
            you cancel during this period you'll be charged $79.99 after 7 days.
            Afterwards your subscription will renew automatically every year,
            but you can cancel anytime.
          </section>
        </form>
      </div>
    </div>
  );
};

export default Form2;
