import React from 'react';

import './CCForm2.css';

const Form2 = () => {
  return (
    <div>
      <h2>New, simplified form</h2>
      <div
        style={{
          width: '30em',
          backgroundColor: 'white',
          height: '40em',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <form className="Main">
          <header>
            <h2>Payment details</h2>
            <h4>All transactions are secure and encrypted</h4>
          </header>
          <section style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="paypal" id="paypal" nesting="1">
              <input type="radio" name="payment" id="paypal" value="paypal" />
              paypal
            </label>
            <label htmlFor="creditdebit">
              <input
                type="radio"
                name="payment"
                id="creditdebit"
                value="creditdebit"
              />
              Credit/Debit card
            </label>
          </section>
          <label htmlFor="Name">
            Name on card{' '}
            <input
              type="text"
              name="Name on Card"
              id="name"
              placeholder="e.g Jamie Smith"
            />
          </label>
          <label htmlFor="Expiry date">
            Expiry date
            <input
              type="month"
              name="Expiry date"
              id="Expiry date"
              min="2019-07"
              max="2025-12"
              value="2019-07"
            />
          </label>
          <label htmlFor="Security Code">
            Security Code
            <input
              type="number"
              name="Security Code"
              id="Security Code"
              min="000"
              max="999"
              placeholder="000"
            />
          </label>
          By purchasing I agree to the Terms of Service
          <button type="submit">Start free Trial - pay after 7 days</button>
          <section>
            Your 7-day trial will start today and end on 2 April 2020. Unless
            you cancel during this period you'll be charged $79.99 after 7 days.
            Afterwards your subscription will renew automatically every year,
            but you can cancel anytime.{' '}
          </section>
        </form>
      </div>
    </div>
  );
};

export default Form2;
