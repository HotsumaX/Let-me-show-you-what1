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
            <input type="month" name="" id="" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default Form1;
