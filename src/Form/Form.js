import React from 'react';

import styles from './Form.styles';
import BaseCard from './BaseCard';
import DescriptionCard from './DescriptionCard';

const Form = () => {
  return (
    <div style={styles.main}>
      <BaseCard />
      <DescriptionCard />
    </div>
  );
};

export default Form;
