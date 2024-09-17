import React from 'react';
import styles from './FirmFactCard.module.scss';

const FirmFactCard = ({ variant }) => {
  const cardStyles = variant === 'border' ? styles.border : styles.default;
  
  return (
    <div className={`${styles.card} ${cardStyles}`}>
      <p>This is a Firm Fact Card</p>
    </div>
  );
};

export default FirmFactCard;
