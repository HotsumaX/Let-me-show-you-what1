import React from 'react';

import styles from './CCForm.styles';

const Form1 = () => {
  const { MainBox } = styles.Form1;
  return (
    <div>
      <h2>Current payment form</h2>
      <div style={MainBox}>
        <form
          style={{ display: 'flex', flexDirection: 'column', marginLeft: 30 }}
        >
          <label
            htmlFor="Payment Method"
            style={{
              display: 'flex',
              flexDirection: 'column',
              border: '1px green solid',
              height: '5em',
              justifyContent: 'space-around',
            }}
          >
            <div>
              <input type="radio" name="payment type" value="PayPal" />
              PayPal
            </div>
            <div>
              <input type="radio" name="payment type" value="Credit Card" />
              Credit Card
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
              />
              <input type="number" name="expiry year" placeholder="YYYY" />
            </div>
          </label>
          <label htmlFor="CVV">
            CVV <br />
            <input type="text" name="CVV number" placeholder="CVV" />
          </label>
          By purchasing i agree to the terms and service.
          <br />
          <button type="submit" style={{ width: '90%' }}>
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
