import React from 'react';

import styles from './CCForm.styles';

const Form1 = () => {
  const { MainBox } = styles.Form1;
  return (
    <div>
      <h2>Current payment form</h2>
      <div style={MainBox}>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <label
            htmlFor="Payment Method"
            style={{
              display: 'flex',
              flexDirection: 'column',
              border: '1px green solid',
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
          <label
            htmlFor="First Name"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            First Name
            <input type="text" name="First Name" id="" />
          </label>
          <label
            htmlFor="Last Name"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            Last Name
            <input type="text" name="Last Name" id="" />
          </label>
          <label htmlFor="CC number">
            Credit card number
            <input type="text" placeholder="XXXX XXXX XXXX XXXX" />
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
          <button type="submit">Start free trial - pay after 7 days</button>
          <div>
            Your 7-day-trial will start today and end on 28 march 2019. Unless
            you cancel during this period, you'll be charged $89.99 after 7
            days. afterwards your subscription will renew automatically every
            year, but you can cancel anytime. details can be found here.
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form1;
