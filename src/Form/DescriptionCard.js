import React from 'react';
import styles from './Form.styles';

import beer from './images/518663-removebg-preview.png';
import star from './images/star.svg';
import halfStar from './images/star (1).svg';

const DescriptionCard = () => {
  const { cardBase } = styles;
  return (
    <div style={cardBase}>
      <div
        style={{
          fontSize: 60,
          marginTop: -12,
          textAlign: 'right',
          fontWeight: 'bold',
          fontStyle: 'italic',
          color: '#D7DAE2',
        }}
      >
        #45632
      </div>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            height: '30em',
          }}
        >
          <img src={beer} alt="stein" style={{ height: '20em' }} />
          <div>
            <img src={star} alt="star" style={{ height: '2em' }} />
            <img src={star} alt="star" style={{ height: '2em' }} />
            <img src={star} alt="star" style={{ height: '2em' }} />
            <img src={star} alt="star" style={{ height: '2em' }} />
            <img src={halfStar} alt="half star" style={{ height: '2em' }} />
          </div>
          <div style={{ marginTop: -30, color: '#8D929E', fontSize: 15 }}>
            See All Reviews
          </div>
        </div>
        <div>
          <div
            style={{
              color: '#8D929E',
              fontSize: 15,
              marginBottom: 15,
              marginTop: 30,
              fontWeight: 'bolder',
            }}
          >
            CATEGORY
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: '100',
              marginBottom: 25,
              color: '#797F86',
            }}
          >
            Glassware
          </div>
          <div
            style={{
              color: '#8D929E',
              fontSize: 15,
              marginBottom: 25,
              fontWeight: 'bolder',
            }}
          >
            DESCRIPTION
          </div>
          <div style={{ fontSize: 30, color: '#797F86' }}>
            Each beer glass is specifically designed to enjoy a particular beer
            style.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
