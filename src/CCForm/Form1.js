import React from 'react';

import styles from './CCForm.styles';
import paypal from './images/5.png';
import visa from './images/1.png';
import mastercard from './images/2.png';
import amex from './images/22.png';
import discover from './images/14.png';
import diner from './images/10.png';
import jcb from './images/16.png';

const Form1 = () => {
  const { MainBox, ccImage } = styles.Form1;
  return (
    <div>
      <h2>Current payment form</h2>
      <div style={MainBox}>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 30,
            marginTop: 30,
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
              }}
            >
              <input
                type="radio"
                name="payment type"
                value="PayPal"
                style={{ marginRight: 15 }}
              />
              PayPal <img src={paypal} alt="paypal" style={ccImage} />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <input type="radio" name="payment type" value="Credit Card" />
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
          <h2>Paymet details</h2>
          <label
            htmlFor="First Name"
            style={{ display: 'flex', flexDirection: 'column', height: 60 }}
          >
            First Name
            <input
              type="text"
              name="First Name"
              style={{ height: 30, width: '90%', border: '2px gray solid' }}
            />
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
                style={{ border: '2px gray solid' }}
              />
              <input
                type="number"
                name="expiry year"
                placeholder="YYYY"
                style={{ border: '2px gray solid' }}
              />
            </div>
          </label>
          <label htmlFor="CVV" style={{ height: 50 }}>
            CVV <br />
            <input
              type="text"
              name="CVV number"
              placeholder="CVV"
              style={{ border: '2px gray solid' }}
            />
          </label>
          <section
            style={{
              height: 50,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            By purchasing i agree to the terms and service.
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
          <section style={{ width: '90%' }}>
            Your 7-day-trial will start today and end on 28 march 2019. Unless
            you cancel during this period, you'll be charged $89.99 after 7
            days. afterwards your subscription will renew automatically every
            year, but you can cancel anytime. details can be found here.
          </section>
        </form>
      </div>
    </div>
  );
};

export default Form1;
