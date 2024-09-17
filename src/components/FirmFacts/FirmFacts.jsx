import React from 'react';
import styles from './FirmFacts.module.scss';
import FirmFactCard from '../FirmFactCard/FirmFactCard';
import Button from '../Button/Button';

const FirmFacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <FirmFactCard variant="default" />
        <Button variant="default">Top Button</Button>
      </div>
      <div className={styles.bottomRow}>
        <FirmFactCard variant="border" />
        <Button variant="icon">Bottom Button</Button>
      </div>
    </div>
  );
};

export default FirmFacts;
