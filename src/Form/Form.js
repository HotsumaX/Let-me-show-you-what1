import React from 'react';

import styles from './Form.styles';

const InfoCard = () => {
  const { base } = styles;

  return (
    <div style={base}>
      <div>product name quantaty order total</div>
    </div>
  );
};

const DescriptionCard = () => {
  const { cardBase } = styles;
  return (
    <div style={cardBase}>
      <div>Product something</div>
    </div>
  );
};

const Form = () => {
  return (
    <div style={styles.main}>
      <InfoCard />
      <DescriptionCard />
    </div>
  );
};

export default Form;
