/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import plus from './images/plus.svg';
import minus from './images/minus.svg';

import styles from './Form.styles';

const BaseCard = () => {
  const [quantity, setQuantity] = useState(1);
  const { base, stock, itemColumn, buttonLayout } = styles;

  return (
    <div style={base}>
      <div style={itemColumn}>
        <div style={stock}>in stock</div>
        <div style={{ color: '#E87678', fontWeight: 700, fontSize: 15 }}>
          PRODUCT
        </div>
        <div
          style={{
            color: 'white',
            fontSize: 40,
            marginBottom: 200,
            fontWeight: '100',
          }}
        >
          HTFU Stein Glass
        </div>
        <div style={{ color: '#8D929E', fontSize: 20 }}>Quantity</div>
        <div
          style={{
            color: 'white',
            fontSize: 50,
            display: 'flex',
            marginBottom: 30,
          }}
        >
          {quantity === 10 ? (
            <span
              style={{ color: '#8D929E', fontSize: 20, alignSelf: 'center' }}
            >
              {' '}
              (Max){' '}
            </span>
          ) : null}
          {quantity}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src={plus}
              alt="plus"
              style={{
                height: 30,
                marginRight: 10,
                marginLeft: 10,
              }}
              onClick={() =>
                setQuantity(quantity === 10 ? quantity : quantity + 1)
              }
            />
            <img
              src={minus}
              alt="minus"
              style={{ height: 30 }}
              onClick={() =>
                setQuantity(quantity === 0 ? quantity : quantity - 1)
              }
            />
          </div>
        </div>
        <hr />
        <div
          style={{
            color: '#8D929E',
            fontSize: 18,
            marginTop: 30,
            marginBottom: 5,
          }}
        >
          ORDER TOTAL
        </div>
        <div
          style={{
            color: 'white',
            fontSize: 50,
          }}
        >
          ${(19.95 * quantity).toFixed(2)}
        </div>
      </div>
      <div style={buttonLayout}>
        <div>product</div>
        <div>details </div>
        <div>suggestions</div>
        <div>video</div>
      </div>
    </div>
  );
};

export default BaseCard;
