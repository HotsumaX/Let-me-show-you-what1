import React from 'react';
import styles from './Form.styles';

const DescriptionCard = () => {
  const { cardBase } = styles;
  return (
    <div style={cardBase}>
      <div>#45632</div>
      <div>image</div>
      <div>category</div>
      <div>description</div>
      <div>stars</div>
      <div>add to cart</div>
    </div>
  );
};

export default DescriptionCard;
