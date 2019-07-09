import React from 'react';
import styles from './Form.styles';

import beer from './images/518663-removebg-preview.png';
import star from './images/star.svg';
import halfStar from './images/star (1).svg';

const DescriptionCard = () => {
  const { cardBase } = styles;
  return (
    <div style={cardBase}>
      <div>#45632</div>
      <div style={{ display: 'flex' }}>
        <div>
          <img src={beer} alt="stein" style={{ height: '20em' }} />
          <div>
            <img src={star} alt="star" style={{ height: '2em' }} />
            <img src={star} alt="star" style={{ height: '2em' }} />
            <img src={star} alt="star" style={{ height: '2em' }} />
            <img src={star} alt="star" style={{ height: '2em' }} />
            <img src={halfStar} alt="half star" style={{ height: '2em' }} />
          </div>
          <div>See All Reviews</div>
        </div>
        <div>
          <div>category</div>
          <div>Glassware</div>
          <div>description</div>
          <div>
            Each beer glass is specifically designed to enjoy a particular beer
            style
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
